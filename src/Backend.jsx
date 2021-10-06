import React, {useState } from "react"; 
import Frontend from "./Frontend";
import "./index.css";
import data from "./seeds/seed";
const Backend=()=>{
    const [initial,final]=useState(0);
    const [num,finalnum]=useState(0);
    const generate=()=>{
        final(Math.floor((Math.random() * 10)))
        finalnum(num+50)
        setTimeout(()=>{
            document.querySelector(".score").style.transition = "0.5s";
            document.querySelector(".score").style.color = "#00ff00";
        },0)
    }
    const oops=()=>{
        finalnum(0)
        setTimeout(()=>{
            document.querySelector(".score").style.transition = "0.5s";
            document.querySelector(".score").style.color = "red";
        },0)
    }
    return(<>
    <p className="score">score:-{num}</p>
    <Frontend question={data[initial].language.split("\n")} option={data[initial].options} correct={generate} wrong={oops} ></Frontend>
    </>)   
}
export default Backend;