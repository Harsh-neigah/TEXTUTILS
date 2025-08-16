import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = (event) => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLowClick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
const handleSentenceClick = () => {
  let newText =
    text.length > 0
      ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      : "";
  setText(newText);
  props.showAlert("Converted to sentence case!", "success");
};
const handleCapitalizeClick = () => {
  let newText = text
    .split(" ") 
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  setText(newText);
  props.showAlert("Converted to capitalized case!", "success");
}
const handleCopy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Text copied to clipboard!", "success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/).join(" ");
  setText(newText);
  props.showAlert("Extra spaces removed!", "success");
}
const handleReverseClick = () => {
  let newText = text.split("").reverse().join("");
  setText(newText);
  props.showAlert("Text reversed!", "success");
}
const handleTitleCaseClick = () => {
  let newText = text
    .toLowerCase()  
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
  setText(newText);
  props.showAlert("Converted to title case!", "success");
}

const handleClearClick = () => {
  
    let newText = '';
  setText(newText);
  props.showAlert("Text cleared!", "success");
};
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
    <div className="container my-3">
      <h2 className={`text-${props.textmode}`}>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#292e33' : 'white', color: props.textmode === 'dark' ? 'black' : 'white' }}
          rows={8}
          value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary m-2" onClick={handleLowClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary m-2" onClick={handleSentenceClick}>
        Convert to Sentence
      </button>
      <button className="btn btn-primary m-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary m-2" onClick={handleCapitalizeClick}>
        Capitalize Each Word
      </button>
      <button className="btn btn-primary m-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary m-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary m-2" onClick={handleReverseClick}>
        Reverse Text
      </button>
      <button className="btn btn-primary m-2" onClick={handleTitleCaseClick}>
        Convert to Title Case
      </button>
      
    </div>
    <div className={`container my-4 text-${props.textmode}`}>
      <h2>Your text summary</h2>
      <p>
        {text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.replace(/\s/g, "").length} characters
      
        </p>
      <p>
        
        {0.008 * text.split(" ").length} minutes to read
      </p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
