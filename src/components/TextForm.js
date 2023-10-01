import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Alert from './Alert';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [alert, setalert] = useState(null);
    const showalert = (message, type) => {
        setalert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setalert(null);
        }, 2000);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText2 = text.toLowerCase();
        setText(newText2);
    }
    const handleClearClick = () => {
        let newText3 = "";
        setText(newText3);
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        showalert("Copied to clipboard", "success");
    }
    const handleSpaceClick = () => {
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
            if (toogle.innerHTML === "Speak") {
                window.speechSynthesis.cancel()
            }
        }
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
            <div style={{position:'absolute',top:'55px',left:'0',width:'100%'}}>
                <Alert alert={alert} />
            </div>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3 my-4">
                    <textarea className="form-control" id="mybox" value={text} rows="10" onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-danger mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
                <button disabled={text.length === 0} type="button" className="btn btn-success mx-1 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
                <button disabled={text.length === 0} type="button" className="btn btn-danger mx-1 my-1" onClick={handleSpaceClick}>Remove Extra Space</button>
                <button disabled={text.length === 0} style={{ width: '90px' }} type="submit" onClick={speak} className="btn btn-warning mx-2 my-1" id="toggle">Speak</button>
            </div>
            <div className="container my-5">
                <h2>Your Text Summary</h2>
                <p>Word Count : {text.split(/\s/).filter((element) => { return element.length !== 0 }).length}</p>
                <p>Character Count : {text.length}</p>
                <p>Reading Time: {0.008 * text.split(" ").length} mins</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Your text in the box to preview here :)"}</p>
            </div>
        </>
    )
}

// default props
TextForm.defaultProps = {
    heading: "TextUtils is here to help. Analyze your Text here for free",
    SubHeading: "TextArea",
}

// props
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}