import React, {useState} from 'react'

export default function TextForm() {
    const [text, setText] = useState("Enter the text here");

    const handleOnchangeText = (event) => {
        setText(event.target.value);
    }

    const handleClickUppercase = () => {
        var type = document.getElementById('type').value;

        var newText;
        if (type == 'lower') {
            newText = text.toLowerCase();
        } else if (type == 'upper') {
            newText = text.toUpperCase();
        } else if (type == 'localLower') {
            newText = text.toLocaleLowerCase();
        } else if (type == 'localUpper') {
            newText = text.toLocaleUpperCase();
        } else {
            newText = text
        }
        setText(newText);
    }

    return (
    <div>
        <h1>Enter the text analyze below</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchangeText} id="myText" rows="7"></textarea>
        </div>

        <div className='d-flex row'>
            <div className="col-6">
                <select name="type" id="type" className='form-control'>
                    <option value="" selected disabled>Select any one</option>
                    <option value="upper">Convert to Uppercase</option>
                    <option value="lower">Convert to Lowercase</option>
                    <option value="localUpper">Convert to Local Uppercase</option>
                    <option value="localLower">Convert to Local Lowercase</option>
                </select>
            </div>
            <div className="col-6">
                <button className="btn btn-outline-primary" onClick={handleClickUppercase}>Convert</button>
            </div>
        </div>
    </div>
  )
}
