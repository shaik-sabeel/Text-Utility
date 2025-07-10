import React ,{ useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // alert("Changing to uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        // alert("Changing to Lowercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleclear = () => {
        // alert("Clearing the text");
        let newText = ''
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleCopy = () => {
        // alert("Text copied to clipboard");
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard!", "success");
    }

    const handleChange = (event) => {
     setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (

    <>
    <div className="container" style={{color: props.mode === `light`? `black` : `white`}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">

        <textarea className="form-control" value = {text} onChange={handleChange} style={{backgroundColor: props.mode === `dark`? `white` : `white`}} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-2 mx-0" onClick={handleclear}>Clear Text</button>
        <button className="btn btn-primary my-2 mx-3" onClick={handleCopy}>Copy Text</button>
    </div>
    </div>

<div className="container" style={{color: props.mode === `light`? `black` : `white`}}>

    <h2>Your Text summary</h2>
    <div className="container">
        <p>{text.split(" ").filter((element)=> {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=> {return element.length !== 0}).length} minutes took to read your text</p>
        <h2>Preview of your Text</h2>
        <p>{text.length > 0 ? text : "Enter something in the text box to preview"}</p>

    </div>
</div>
    </>
    
  )
}
