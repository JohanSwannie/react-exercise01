const ColorBox = ({ color, hex, isTextDark }) => {
  return (
    <section
      className="box"
      style={{
        backgroundColor: color,
        color: isTextDark ? "#000" : "#FFF",
      }}
    >
      <p>{color ? color : "Empty Value"}</p>
      <p>{hex ? hex : null}</p>
    </section>
  );
};

ColorBox.defaultProps = {
  color: "Empty Color Value",
};

export default ColorBox;
