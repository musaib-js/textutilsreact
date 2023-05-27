import React, {useState} from "react";
import Result from "./Result";

export default function Form(props){
    document.title = "Textify - Home"
    const handleClear = () =>{
        setText("")
        props.showAlert("Success", "Text Cleared")
    }
    const handleLowClick = () =>{
        const lowText = text.toLowerCase()
        setText(lowText)
        props.showAlert("Success", "Converted to Lower Case")
    }
    const handleUpClick = () =>{
         const newText = text.toUpperCase()
         setText(newText)
         props.showAlert("Success", "Converted to Upper Case")
    }
    const handleChange = (event) =>{
        setText(event.target.value)

    }
    const [text, setText] = useState("")
    return(
        <>
        <div className="container my-4 shadow-lg">
        <div className="mb-3">
           <h3>{props.heading}</h3>
            <textarea className="form-control" value = {text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <div className="btn-group my-2" role="group" aria-label="Default button group">
          <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
          <button type="button" className="btn btn-info mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
          <button type="button" className="btn btn-warning mx-2" onClick={handleClear}>Clear All</button>
        </div>
        </div>
        <div className="container border shadow-lg">
        <Result ntext = {text}/>
        </div>
        </>
    )
}