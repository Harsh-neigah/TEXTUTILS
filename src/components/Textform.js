import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = (event) => {
    setText(event.target.value);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = (event) => {
    setText(event.target.value);
    let newText = text.toLowerCase();
    setText(newText);
  };
const handleSentenceClick = () => {
  let newText =
    text.length > 0
      ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      : "";
  setText(newText);
};
const handleClearClick = () => {
  
    let newText = '';
  setText(newText);
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
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>
        Convert to Sentence
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      
    </div>
    <div className={`container my-4 text-${props.textmode}`}>
      <h2>Your text summary</h2>
      <p>
        {text.split(" ").length} words and {text.length} characters
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
