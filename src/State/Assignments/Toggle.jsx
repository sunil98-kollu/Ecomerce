import React from "react";
import { useState } from "react";
const Toggle = () => {
  const [isDark, setIsDark] = useState(true);

  const styling = {
    backgroundColor: isDark ? "#121212" : "#ffffff",
    color: isDark ? "#fff" : "#000",
    width : "100%",
    height: "100%"
  };

  const handleClickChange=()=>{   // click on button it set the boolean value to opposite 
  setIsDark(!isDark);
  }
  return (
    <div style={styling}>
      <h1>{ isDark?'DarkTheme':'Light theme'}</h1>
      <button onClick={handleClickChange}> Switch to {isDark ? "Light" : "Dark"}</button>  
       {/* // based on boolean variable  it shows text   */}
 
    </div>
  );
};
export default Toggle;
