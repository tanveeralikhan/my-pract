import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./App.css";
import Text from "./Components/Text";

import Input from "./Components/Input.tsx";

import { ResultWrapper, SearchWrapper, TextWrapper } from "./styled.component";
import classNames from "classnames";
import DisplayTable from "./Components/Interview/Publicis";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
} from "./Components/APP_WITH_REDUX/data/actions/counter.actions";
import { getRansomNotes } from "./Components/Misc/AlgTest/STRINGS/RANSOM_NOTES";
import Myform from "./Components/Form/MyForm";
import Login from "./Components/Form/WithRef/Login";
import SlidingImage from "./Components/SlidingImage/Index";
import { divideString } from "./Components/Misc/AlgTest/STRINGS/DIVIDE_STRING_EQUAL_GUIDE";

interface DataProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseCounter());
  };

  const handleDecrement = () => {
    dispatch(decreaseCounter());
  };
  const [text, setText] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [islike, setIsLike] = useState(false);
  const initialValue = 100;
  const [likes, setLikes] = useState(initialValue);
  const myAction = () => {
  };

  /* const onChange = (value: string) => {
    setInputText(value); // Timer break
  }; */

  const testFunction = () => {
    const val = divideString();
    console.log(val);
  };

  const submitFun = () => {
    const textArray = inputText.split(" ");
    let displayText = "";
    let counter = 0;
    const timinter = setInterval(() => {
      console.log("Time Interval", counter, "items", textArray[counter]);
      if (textArray[counter]) {
        displayText = displayText + " " + textArray[counter];
        counter++;
        setText(displayText);
      } else if (!textArray[counter]) {
        console.log("clearedTIme interval");
        clearInterval(timinter);
      }
    }, 2000);
  };

  const fetchData = async () => {
    /* const getData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = getData?.data?.slice(0, 10) as DataProps[];
    setData(data);
    console.table(data); */

    const fetchData = await axios.get("http://localhost:3001/searchItem");
    setData(fetchData.data);
    console.log(fetchData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // debounce
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search !== null && search !== "") {
        const newData = data.filter((val: any) => {
          const { value }: { value: string; id?: number } = val;
          if (value.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return val;
          }
        });
        setData(newData);
        setShow(true);
      } else if (search === "" || search === null) {
        fetchData();
        setShow(false);
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  /*  useEffect(() => {
    setInterval(() => {
      fetchData();
      
    }, 1000 * 60);
  }, []); */

  const selectChange = (e: any) => {
    console.log(e.target.value);
  };

  const setUpdatedValue = (value: string) => {
    setSearch(value);
    // setSelectedValue(value);
    setShow(false);
  };

  const likeClicked = () => {
    setIsLike((state) => !state);
  };

  useEffect(() => {
    let like = likes;
    if (islike) {
      setLikes(like + 1);
    } else if (like !== initialValue) {
      setLikes(like - 1);
    }
  }, [islike]);

  const btnClass = classNames({ "like-button": true, liked: islike });

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={testFunction}>Check Result</button>

      {/*  <section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {data &&
              data?.map((val: DataProps, index: number) => {
                const { title } = val;
                return (
                  <Text label={title} color="red" size="1rem" key={index} />
                );
              })}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Input onInputChange={(e: string) => setSearch(e)} />
              <button onClick={myAction} title="Hello">
                Submit
              </button>
              <select onChange={selectChange}>
                <option>Please select one</option>
                {data &&
                  data?.map((val: any, index: number) => {
                    return <option key={index}>{val.value}</option>;
                  })}
              </select>
            </div>
          </div>
        </div>
        <SearchWrapper>
          <Text label={selectedValue} color="red" size="1rem" />
          <TextWrapper>
            <Input onInputChange={(e: string) => setSearch(e)} />
          </TextWrapper>
          {show && (
            <ResultWrapper>
              {data &&
                data?.map((val: any, index: number) => {
                  return (
                    <Text
                      label={val.value}
                      color="red"
                      size="1rem"
                      key={index}
                      onClickEvent={setUpdatedValue}
                    />
                  );
                })}
            </ResultWrapper>
          )}
        </SearchWrapper>
        <div className="like-button-wrapper">
          <div className={btnClass} onClick={likeClicked}>
            <span className="likes-counter">{`Like | ${likes}`}</span>
          </div>
        </div>
      </section> */}

      {/* <DisplayTable /> */}
      <Myform />
      <Login />
      <SlidingImage />
    </div>
  );
}

export default App;
