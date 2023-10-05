import React, {useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpCLick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoCLick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  let wordCOunt = 0;
  wordCOunt = text.split(" ").length;
  return (
    <>
    <div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCLick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoCLick}>Convert to LowerCase</button>
    </div>
    <hr/>

    <div className="container summ my-3">
      <h1>Summary</h1>
    <h4 className="best">Total words are: {wordCOunt} </h4>
    <h4 className="best">Total Characters are: {text.length}</h4>
    <p>Minutes to read: {0.008 * wordCOunt}</p>

    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
