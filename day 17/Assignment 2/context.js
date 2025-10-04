import React, { createContext, useContext }
    from "react";

const Context = createContext();


const Element5 = () => {
    const context = useContext(Context);
    return <div>{context.data}</div>;
};




const Element4 = () => {
    return < Element5 />;
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
            value={{ data: "We used Context for this " }}>
            <Child />
        </Context.Provider>
    );
};