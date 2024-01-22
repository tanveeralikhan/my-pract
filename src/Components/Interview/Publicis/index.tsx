import { useEffect, useLayoutEffect, useState } from "react";
import Films from "./Films";
import { VehiclesProps } from "./Vehicles";

interface DisplayTableProps {
  name: string;
  films: string[];
  vehicles: string[];
}
const DisplayTable = () => {
  const [data, setData] = useState<DisplayTableProps[]>([]);

  const getData = (resultsData: any) => {
    return resultsData.map((value: any) => {
      const { name, films, vehicles } = value;
      return { name, films, vehicles };
    }) as DisplayTableProps[];
  };

  const fetchData = async () => {
    const fData = await fetch("https://swapi.dev/api/people/");
    const responseData = await fData.json();
    const resultsData = responseData?.results;
    const getFilteredData = getData(resultsData.slice(0, 4));
    setData(getFilteredData);
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {data &&
        data.map((val: DisplayTableProps) => {
          const { films, name, vehicles } = val;
          return (
            <div>
              <h1>Name</h1>
              <div>{name}</div>
              <Films {...films} />
            </div>
          );
        })}
    </div>
  );
};

export default DisplayTable;
