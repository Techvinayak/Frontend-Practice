import React, { useCallback, useState } from "react";
const unction = new Set();

const CallBackFunc = () => {
    const [cnt, setCnt] = useState(0);
    const [num, setNum] = useState(0);

    const increCnt = useCallback(
        () => setCnt((prevcnt) => prevcnt + 1)
        , []);

    const decreCnt = useCallback(
        () => setCnt((prevcnt) => prevcnt - 1)
        , []);
    // const incNum = useCallback(
    //     () => setNum((prevnum) => prevnum + 1)
    //     , []);

    return (
        <div>
            <h2>Without using dependecies in callback hook</h2>
            <button onClick={increCnt}>Increase Counter</button>
            <button onClick={decreCnt}>Decrease Counter</button>
            {/* <button onClick={incNum}>Increase Number</button> */}

            <h1>Count : {cnt}</h1>
            {/* <h1>Number : {num}</h1> */}
            <h2>Set Size  : {funcSet.size}</h2>
        </div>
    );
};

export default CallBackFunc;