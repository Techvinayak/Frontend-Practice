import { useState } from "react";
import Data1 from "./data1";
import "./ex2.css";

export default function Data() {
    let [n1, setN1] = useState(" ")
    let [n2, setN2] = useState(" ")
    let [res, setRe] = useState(" ")

    function changeResult(v) {
        setRe(v)
    }

    return <div className="outline">
        Name:<input type="text" onBlur={(e) => { setN1(e.target.value) }} />
        <br></br>
        Email:<input type="text" onBlur={(e) => { setN2(e.target.value) }} />
        <p><br></br>Name: {n1}<br></br> Email:{n2} <br></br>{res} </p>
        <Data1 f1={changeResult}
            name={n1} email={n2}></Data1>
    </div>

}

