import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClearClick= ()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared!","success");
        
    }
    //remove all the symbols
    const handletextExtract =()=>{
    const regex = /[0-9/A-Z/a-z/ /]/g;
    const letters = text.match(regex);
    const res1 = letters.join('');
    setText(res1)
    props.showAlert("All Symbols removed!","success");
    };

    //to extract only the numbers in the text:
const handleNumExtract =()=>{
    const regex = /[0-9/ /]/g;
    const digits = text.match(regex);
    const res = digits.join('');
   setText(res)
   props.showAlert("Showing only numbers!","success");
    };
    const handleCopy = () => {
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!","success");
    }
    const handleExtraSpaces = ()=>{
       const newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        props.showAlert("Extra Spaces Removed","success");
        }

    const handleOnChange= (event)=>{

        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
        
          <h1>{props.heading}</h1>
          <div className="mb-3" >
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white' ,color: props.mode==='dark'? 'white':'#042743' }} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-info mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-danger mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-success mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-warning mx-1" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-danger mx-1" onClick={handletextExtract}>Remove All Symbols</button>
          <button className="btn btn-info mx-1" onClick={handleNumExtract}>Show Numbers only</button>
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'? 'white':'#042743'}}>
              <h1>Your Text Summary</h1>
              <p>{text.split(" ").length} words and {text.length} characters</p>
              <p>{0.008 * text.split(" ").length}Minutes read</p>
              <h2>Preview</h2>
              <p>{text.length>0 ? text:"Enter something in the above Text Box to preview it here :)"}</p>

          </div>
          </>
  )
}
