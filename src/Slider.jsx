const Slider = ({ colorName, color, setColor }) => {
  function onChangeColor(e) {
    setColor(+e.target.value);
  }
  return (
    <>
      <input
        type="range"
        min={0}
        max={255}
        value={color}
        onChange={onChangeColor}
      />{" "}
      {colorName} ({color})
    </>
  );
};

export default Slider;
