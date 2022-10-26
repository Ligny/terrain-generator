import React, { useState, useEffect } from "react";
import Switch from "react-switch";

import Input from "./Input";

const Dubstep = ({
  setColor,
  setHeight,
}) => {
  const [refresh, setRefresh] = useState(0.2);
  const [randomColor, setRandomColor] = useState(false);

  useEffect(() => {
    console.log("random color", randomColor);
    const interval = setInterval(() => {
      if (randomColor === true)
        setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
      setHeight(Math.floor(Math.random() *  500));
    }, refresh * 1000);
    return () => clearInterval(interval);
  }, [refresh, randomColor]);

  return (
    <>
      <h1>Dubstep</h1>
      <div className={"from-map"}>
        <Switch onChange={() => setRandomColor(!randomColor)} checked={randomColor} />
        <Input text={refresh} setText={setRefresh} type={"number"} description={"Interval Time (seconds)"} />
      </div>
    </>
  )
}

export default Dubstep;