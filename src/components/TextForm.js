import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("Lowercase was clicked");
        let newText2 = text.toLowerCase();
        setText(newText2);
    }
    const handleClearClick = () => {
        let newText3 = "";
        setText(newText3);
    }
    const handleCopyClick = () => {
        // let newText4 = text.innerHTML;
        navigator.clipboard.writeText(text);
        props.ShowAlert("Copied to Clipboard","success");
    }
    const handleSpaceClick = () => {
        // let newText5 = text.split(" ").join("");
        // using regex
        // let newText5 = text.replace(/ /g, "");
        // setText(newText5);
        let newText5 = text.split(/[ ]+/);
        setText(newText5.join(" "));
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // setText = "Thanks for using me";
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3 my-4">
                    {/* <label for="mybox" className="form-label">{props.SubHeading}</label> */}
                    <textarea className="form-control" id="mybox" value={text} rows="10" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-danger" onClick={handleClearClick} >Clear Text</button>
                <button type="button" className="btn btn-success mx-3" onClick={handleCopyClick} >Copy to Clipboard</button>
                <button type="button" className="btn btn-danger" onClick={handleSpaceClick}>Remove Extra Space</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2" id="toggle">Speak</button>
            </div>
            <div className="container my-5">
                <h2>Your Text Summary</h2>
                <p>Word Count : {text.split(" ").length}</p>
                <p>Character Count : {text.length}</p>
                <p>Reading Time: {0.008 * text.split(" ").length} mins</p>

                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Your text in the box to preview here :)"}</p>
            </div>
        </>
    )
}

// default props
TextForm.defaultProps = {
    heading: "TextUtils is here to help. Analyze your Text here for free",
    SubHeading: "TextArea",
    // message: "Write Your Text here"
}

// props
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}