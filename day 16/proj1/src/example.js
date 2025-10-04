import { getByDisplayValue } from "@testing-library/dom";
import { useEffect, useState } from "react";

export default function Table() {

    let [count, setCount] = useState(0);

    useEffect(() => {
        // You can add side effects here if needed
    }, [count]);

    function handler() {
        setCount(prev => prev + 1); // Avoid direct mutation
    }

    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Index no.</th>
                            <th>Counter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{count}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <button onClick={handler}>Click here</button>
            </div>
        </>
    );
}
