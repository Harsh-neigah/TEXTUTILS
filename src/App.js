import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert"; 
import { Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [textmode, setTextMode] = useState("dark");
  
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "#292e33";
      document.title = "TextUtils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    }
  };
 
  return (
    <>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} textmode={textmode} showAlert={showAlert}/> 
      <Alert alert={alert} /> 
      <Routes>
        <Route path="/about" element={<About  toggleMode={toggleMode} mode={mode}/>}>
        </Route>
        <Route path="/" element={
          <Textform heading="Enter text to analyze below" mode={mode} textmode={textmode} showAlert={showAlert}/>
        }>
        </Route>
      </Routes>
    </>
          
  );
}

export default App;
