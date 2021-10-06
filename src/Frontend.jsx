import React from "react";
import "./index.css";
const Frontend=(props)=>{
    function check(e){
        const validate=e.target.value;
        if(validate=="true"){
            props.correct();    
        }
        else{
            props.wrong();
        }
    }
    return(<>
    <div className="container">
        <div className="question">
            {props.question.map(element=>(<p>{element}</p>))}
        </div>
        <div className="options">
            {props.option.map(opt=><button  onClick={check} value={opt.correct}>{opt.text}</button>)}
        </div>
    </div>
    </>);
}
export default Frontend;