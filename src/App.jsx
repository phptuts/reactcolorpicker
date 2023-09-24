import { useEffect, useState } from "react";
import Slider from "./Slider";
function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(50);
  const [blue, setBlue] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    const rgbToHex = (r, g, b) =>
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");
    setColor(rgbToHex(red, green, blue));
  }, [red, green, blue]);

  return (
    <>
      <h1>Color: {color}</h1>
      <Slider colorName="Red" color={red} setColor={setRed} />
      <Slider colorName="Green" color={green} setColor={setGreen} />
      <Slider colorName="Blue" color={blue} setColor={setBlue} />
      <div
        style={{ width: "300px", height: "300px", backgroundColor: color }}
      ></div>
    </>
  );
}

export default App;
