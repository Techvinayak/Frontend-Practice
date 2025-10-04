import React, { useState } from "react";

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", username, password);
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Login</h1>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">User Name:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter A User Name"
                        required
                    />
                    <br />
                    <label htmlFor="password">Enter Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </fieldset>

            {submitted && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Submitted Data:</h3>
                    <p>Username is: {username}</p>
                    <p>Password is: {password}</p>
                </div>
            )}
        </div>
    );
}
