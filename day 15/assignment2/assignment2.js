import { getByDisplayValue } from "@testing-library/dom";
import { useEffect, useState } from "react";

export default function Usehook() {

    let [count, setCount] = useState(0);

    useEffect(() => {

    }, [count]);


    function handler() {
        setCount(count++);
    }

    return (
        <><div>
            <h1>Counter:{count}</h1>
            <br></br>
            <button onClick={handler}>Click here</button>
        </div >
        </>
    )
}   
