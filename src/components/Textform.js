import React, {useState} from 'react'
export default function Textform(props) {
    const handleUpClick =()=>{
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!" ,"Success")  //this line is used to put alert for buttons
    }
    const handleLoClick =()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!" ,"Success")    //this line is used to put alert for buttons
    }
    const handleClearClick =()=>{
        
        let newText = "";
        setText(newText)
        props.showAlert("Cleared!" ,"Success")   //this line is used to put alert for buttons
    }
    const handleOnChange =(event)=>{
        
        setText(event.target.value)
        
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Single space" ,"Success")    //this line is used to put alert for buttons
    }
    // const handleCopy=()=>{
    //     console.log("i am Copied");
    //     var text=document.getElementById("Mybox");
    //     text.Select();
    //     text.setSelectionRange(0,9999);
    //     navigator.clipboard.writeText(text.value);}
    
    const [text, setText] = useState(' ');
    // setText("New Text");
  return (
    <>
    <div className='container'style={{color:props.mode==="dark"?"white":"#042743"}} >   
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"grey"}} id="Mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra space</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleCopy}>Copytext</button> */}
    </div>
    <div className="container my-3"style={{color:props.mode==="dark"?"white":"#042743"}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length } minutes to read</p>
        <h2>Preview</h2>
        <p2>{text.length>0?text:"Preview the text here "}</p2>
    </div>
    </>
  )
}
