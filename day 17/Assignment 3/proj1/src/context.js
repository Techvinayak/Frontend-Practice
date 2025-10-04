import React, { createContext, useContext }
    from "react";

const Context = createContext();


const element5 = () => {
    const context = useContext(Context);// retrive data from Context 
    return <div>{context.data}</div>;
};




const Element4 = () => {
    return < element5 />;
};

const Element3 = () => {
    return <Element4 />;
};

const Element2 = () => {
    return <Element3 />;
};

const Element = () => {
    return <Element2 />;
};







export default function AppContext() {
    return (
        <Context.Provider
            value={{ data: "This is the data from Context" }}>
            <Child />
        </Context.Provider>
    );
};