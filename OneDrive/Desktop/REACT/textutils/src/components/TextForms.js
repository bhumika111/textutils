import React, { useState } from "react";

export default function TextForms(props) {
  const wordCount = (text) => {
    let regex = /\s+\S+/;
    let numOfWords = text.split(regex);
    return numOfWords.length;
  };
  const handleUpClick = () => {
    // console.log("Button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  };
  const handleLoClick = () => {
    // console.log("Button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  };
  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Converted to speech!", "success");
  };
  const handleinverseclick = () => {
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Converted to Inverted Text!", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#554b4b" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "Grey" : "white",
              color: props.mode === "dark" ? "white" : "#554b4b",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-secondary mx-1 " onClick={handleSpeakClick}>
          Speak
        </button>
        <button className="btn btn-secondary mx-1" onClick={handleinverseclick}>
          Inverse text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#554b4b" }}
      >
        <h2>Your text summary</h2>
        {/* <p>
          {text.split(" ").length - 2} text and {text.length - 1} characters
        </p>
        <p>{0.008 * text.split(" ").length - 0.016} Minutes read</p> */}

        <p>
          {text === "" ? 0 : wordCount(text)} words and {text.length} characters
        </p>
        <p>{text === "" ? 0 * 0.008 : wordCount(text) * 0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
      </div>
    </>
  );
}
