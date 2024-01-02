import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Text from "./Components/Text";
import { getMapArray } from "./Components/Misc/ArrayFun";
import {
  findTwoSum,
  ifDuplicateExist,
  removeDuplicate,
  removeElement,
} from "./Components/Misc/ArrayAlg";
import Input from "./Components/Input.tsx";
import {
  isValidParentheses,
  longestSubstring,
} from "./Components/Misc/StringAlg";

interface DataProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [text, setText] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const myAction = () => {
    const getArr = isValidParentheses();
    console.table(getArr);
  };

  const onChange = (value: string) => {
    setInputText(value);
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
    const getData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = getData?.data?.slice(0, 10) as DataProps[];
    setData(data);
    console.table(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000 * 60);
  }, []);

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
      <section>
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
            <div>
              <Text label={text} color="red" size="1rem" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <Input onInputChange={onChange} />
              <button onClick={myAction} title="Hello">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
