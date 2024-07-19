import React, { useState } from 'react';

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleFirstLetterCapClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("First letter capitalized!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Single space", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied!", "success");
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className='container' style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === "dark" ? "#091228" : "white", color: props.mode === "dark" ? "white" : "#091228" }}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleFirstLetterCapClick}>Capitalize First Letter</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra space</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
        <h2>Preview</h2>
        <p2>{text.length > 0 ? text : "Preview the text here "}</p2>
      </div>
    </>
  )
}
