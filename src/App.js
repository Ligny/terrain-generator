import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

import Map from "./Components/Map";
import Dubstep from "./Components/Dubstep";

var cols, rows;
var scl = 20;
var w = 2400;
var h = 2200;
var flying = 0;
var terrain = [];

function App() {
  const [color, setColor] = useState("#808080");
  const [height, setHeight] = useState(100);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    if (!mode) {
      setColor("#808080");
      setHeight(100);
    }
  }, [mode]);

  const setup = (p5) => {
    p5.createCanvas(800, 600, p5.WEBGL);
    cols = w / scl;
    rows = h / scl;
  
    for (var x = 0; x < cols; x++) {
      terrain[x] = [];
      for (var y = 0; y < rows; y++) {
        terrain[x][y] = 0;
      }
    }
  }

  const draw = (p5) => {
    flying -= 0.1;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        terrain[x][y] = p5.map(p5.noise(xoff, yoff), 0, 1, -height, height);
        xoff += 0.2;
      }
      yoff += 0.2;
    }
    p5.background(color);
    p5.translate(0, 50);
    p5.rotateX(p5.PI / 3);
    p5.fill(200, 200, 200, 50);
    p5.translate(-w / 2, -h / 2);
    for (var y = 0; y < rows - 1; y++) {
      p5.beginShape(p5.TRIANGLE_STRIP);
      for (var x = 0; x < cols; x++) {
        p5.vertex(x * scl, y * scl, terrain[x][y]);
        p5.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      p5.endShape();
    }
  }

  return (
    <div className="App">
      <input className="mode" type={'button'} value={"boom"} onClick={() => setMode(!mode)} />
      {!mode ?
        <Map
          color={color}
          setColor={setColor}
          height={height}
          setHeight={setHeight}
        />
        : <Dubstep
            setColor={setColor}
            setHeight={setHeight}
          />}
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default App;
