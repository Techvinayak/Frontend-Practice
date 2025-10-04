import { getByDisplayValue } from "@testing-library/dom";
import { useEffect, useState } from "react";

export default function Practicetable() {

    let [count, setCount] = useState(0);

    useEffect(() => {

    }, [count]);


    function handler() {
        setCount(count + 1);
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>
                <table style={{ borderCollapse: 'collapse', width: '300px', textAlign: 'center', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Index no.</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Counter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{count}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{count}</td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={handler}
                    style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Click here
                </button>
            </div>
        </>
    )
}   
