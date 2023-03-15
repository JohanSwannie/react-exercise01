import colorNames from "colornames";

const InputColor = ({ color, setColor, setHex, isTextDark, setIsTextDark }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        type="text"
        placeholder="Change Name of Color"
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHex(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsTextDark(!isTextDark)}>
        Click to Change Text Color
      </button>
    </form>
  );
};

export default InputColor;
