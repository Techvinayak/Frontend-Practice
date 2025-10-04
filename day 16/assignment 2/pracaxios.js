import axios from "axios";
import { useState } from "react";

const GetData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [showTable, setShowTable] = useState(false);

    const fetchData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setData(response.data);
                setShowTable(true);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <button
                onClick={fetchData}
                style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "black",
                    padding: "20px"
                }}
            >
                Click to display
            </button>
            <br></br>
            {showTable && (
                <table
                    style={{
                        borderCollapse: "collapse",
                        width: "80%",
                        margin: "auto",
                        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    }}
                >
                    <thead>
                        <tr style={{ backgroundColor: "#f2f2f2" }}>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
                            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.id}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default GetData;
