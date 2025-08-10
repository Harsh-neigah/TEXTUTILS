import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [textmode, setTextMode] = useState("dark");
  
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "#292e33";
      document.title = "TextUtils - Dark Mode";
    }
  };
 
  return (
    <>
    <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} textmode={textmode} />  
    <Textform heading="Enter text to analyze below" mode={mode} textmode={textmode}/>
    {/* <About /> */}
          
    </>
  );
}

export default App;
