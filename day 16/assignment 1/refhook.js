import { useEffect, useState, useRef } from "react";

export default function Refhook() {
    let x = useRef();
    let y = 100;
    let [N1, setN1] = useState(" ");
    useEffect(() => {
        x.current++;
    }, [])
    return (
        <div>
            <input type="text" onChange={(e) => {

                x.current = e.target.value;
                y++;
                setN1(e.target.value);
            }}></input>

            <p>
                x={x.current}
                <br></br>
                y={y}
            </p>


        </div >
    )
}