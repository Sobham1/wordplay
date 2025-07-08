import React, { useState } from 'react';
import '../App.css'; // Import your CSS file for styling
export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
       props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
     const handleClrClick = (event) => {
         let newText ="";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    }
    const handleCopy = () => {
        // console.log("Copy to clipboard");
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }
    const [text, setText] = useState("Enter text here");
    
  return (
    <>
    
    <div className="container" style={{color:props.mode==='dark'?'white':'black',fontFamily:'courier',fontSize:'20px'}}>
        <h1>{props.heading}</h1>
        <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="myBox"  style={{height:'100px',backgroundColor:props.mode==='dark'?"#2F343C":'#DADCCE',color:props.mode==='dark'?'white':'black',border: props.mode === 'dark' ? '3px solid white' : '3px solid black',fontFamily:'courier',fontSize:'20px'}} value={text} onChange={handleOnChange} ></textarea>
    </div>   
        <button className="btn btn-danger my-2" onClick={handleUpClick}>Convert to Uppercase🔠</button>
        <button className="btn btn-success my-2" onClick={handleLowClick} style={{marginLeft:'20px'}}>Convert to Lowercase🔡</button>
        <button className="btn btn-warning my-2" onClick={handleClrClick} style={{marginLeft:'20px'}}>Clear Text🚮</button>
        <button className="btn btn-info my-2" onClick={handleExtraSpaces} style={{marginLeft:'20px'}}>Remove Extra Spaces🚫</button>
        <button className="btn btn-primary my-2" onClick={handleCopy} style={{marginLeft:'20px'}}>Copy to Clipboard📋</button>

    </div>
    

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black',fontFamily:'courier',fontSize:'20px'}}>
        <h2>Your Text Summary:</h2>
        <p>Words:{text.split(" ").filter(word => word.trim() !== "").length}</p>
        <p>Characters: {text.length}</p>
        <p>Minutes required to Read:{0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
       <div
     style={{
    height: '100px',
    backgroundColor: props.mode === 'dark' ? '#2F343C' : '#DADCCE',
    color: props.mode === 'dark' ? 'white' : 'black',
    padding: '10px',
   border: props.mode === 'dark' ? '3px solid white' : '3px solid black'
         }}
        >
  {text.length > 0 ? text : "Enter something in the TextBox above to preview here"}
</div>

       </div>
    </>
  )
}
