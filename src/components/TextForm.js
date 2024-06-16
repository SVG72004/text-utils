import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");

    const handleOnchangeText = (event) => {
        setText(event.target.value);
    }

    const handleClickUppercase = () => {
        var type = document.getElementById('type').value;

        var newText;
        if (type === 'lower') {
            newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase successfully.", "success");
        } else if (type === 'upper') {
            newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase successfully.", "success");
        } else if (type === 'localLower') {
            newText = text.toLocaleLowerCase();
            setText(newText);
            props.showAlert("Converted to locallower successfully.", "success");
        } else if (type === 'localUpper') {
            newText = text.toLocaleUpperCase();
            setText(newText);
            props.showAlert("Converted to localupper successfully.", "success");
        } else if (type === 'removeExtraSpace') {
            newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Removed extra spaces successfully..", "success");
        } else {
            newText = text;
            setText(newText);
            props.showAlert("Not any operations.", "warning");
        }
    }

    return (
        <>
        <div className="container my-5">
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
                            <option value="removeExtraSpace">Remove Extra Space</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-outline-primary" onClick={handleClickUppercase}>Convert</button>
                    </div>
                </div>

                <div className="my-3">
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").length} words and {text.length} characters.</p>
                    <h3 className='mt-3'>Preview</h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
        </>
  )
}
