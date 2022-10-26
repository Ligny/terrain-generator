import React from "react";

import Input from "./Input";

const Map = ({
  color,
  setColor,
  height,
  setHeight,
}) => (
  <>
    <h1>3D Map Generator</h1>
    <div className="from-map">
      <Input text={color} setText={setColor} type={"color"} description={"Color"} />
      <Input text={height} setText={setHeight} type={"number"} description={"Height"} />
    </div>
  </>
)

export default Map;