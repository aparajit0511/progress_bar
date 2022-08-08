import React, { useEffect, useRef, useState } from "react";

export default function ProgressBar() {
  //   const result = document.getElementsByClassName("bar");
  //   console.log(result);

  const [width, setwidth] = useState(0);
  const [barStatus, setbarStatus] = useState(false);
  const [IntervalId, setIntervalId] = useState(0);
  console.log("hi");

  //   const componentRef = useRef(null);
  //   console.log(componentRef);

  useEffect(() => {
    var bar;
    if (barStatus) {
      bar = setInterval(() => {
        setwidth((width) => width + 1);
      }, 10);
      setIntervalId(bar);
    } else {
      clearInterval(IntervalId);
    }
    console.log("bar", IntervalId);
  }, [barStatus]);

  const onClickHandler = () => {
    setbarStatus(true);
  };

  const onStopHandler = () => {
    setbarStatus(false);
  };

  return (
    <div>
      <div>ProgressBar</div>

      <div
        // ref={componentRef}
        style={{
          width: `${width}` + "px",
          height: "20px",
          backgroundColor: "grey",
        }}
      ></div>
      <div>
        <button onClick={onClickHandler}>Start</button>
        <button onClick={onStopHandler}>Stop</button>
      </div>
    </div>
  );
}
