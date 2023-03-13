import React, { useState } from "react";
import ColorBox from "./ColorBox";
import InputColor from "./InputColor";

function App() {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");
  const [isTextDark, setIsTextDark] = useState(true);

  return (
    <div className="App">
      <ColorBox color={color} hex={hex} isTextDark={isTextDark} />
      <InputColor
        color={color}
        setColor={setColor}
        setHex={setHex}
        isTextDark={isTextDark}
        setIsTextDark={setIsTextDark}
      />
    </div>
  );
}

export default App;
