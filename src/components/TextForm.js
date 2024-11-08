import React, {useState} from 'react'


/*Hooks (This helps in using class features without adding class in it)*/

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handlelowClick = ()=>{
        // console.log("lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopyClick = () =>{
        // let text = document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success");
    }
        
    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the value
    // setText ("new text"); //CORRECT WAY TO CHANGE THE STATE.
    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 className='my-4'>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}}
            id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to lowercase</button>
            <button disabled={text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0 } className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}MINUTES READ</p>
            <h3>PREVIEW</h3>
            <p>{text.length>0?text:"Enter Something in the Box above to preview here."}</p>
        </div>
        </>
    )
}
