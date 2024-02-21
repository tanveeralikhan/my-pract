import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const timerIdRef :React.MutableRefObject<null> = useRef(null);

  useEffect(() => {
    if (start) {
      timerIdRef?.current = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerIdRef?.current);
    };
  }, [count, start]);

  const onStart = () => {
    setStart((prev)=>!prev);
    if(!start)clearInterval(timerIdRef?.current)
  };

  const onStop = () => {
    clearTimeout(timerIdRef?.current);
    setStart(false);
  };

  return (
      <div className="box">
      <h1>Count: {count}</h1>
      <button onClick={onStart}>Start</button>
    </div>
  );
};
export default Timer;
