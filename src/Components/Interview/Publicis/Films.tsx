import { useEffect, useLayoutEffect, useState } from "react";

export interface FilmsDataProps {
  title: string;
  director: string;
  producer: string;
}

const Films = (props: string[]) => {
  const [data, setData] = useState<FilmsDataProps[]>([]);

  const getFilteredData = (data: any) => {
    return data?.map((val: any) => {
      const { title, director, producer } = val;
      return { title, director, producer };
    }) as FilmsDataProps[];
  };
  const fetchData = async (props: string[]) => {
    const result = await Promise.all(
      Object.values(props).map(async (val) => {
        const resp = await fetch(val);
        return resp.json();
      })
    );
    const filteredData = getFilteredData(result);
    setData(filteredData);
  };

  useLayoutEffect(() => {
    fetchData(props);
  }, [props]);

  return (
    <>
      <h1>Films</h1>
      {data &&
        data.map((val: FilmsDataProps) => {
          const { director, producer, title } = val;
          return (
            <div>
              <h2>Film</h2>
              <div>{title}</div>
              <div>{director}</div>
              <div>{producer}</div>
            </div>
          );
        })}
    </>
  );
};

export default Films;
