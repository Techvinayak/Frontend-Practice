import './App.css';
import React from "react";
import {
  BrowserRouter, Routes, Route, NavLink
  , Link,

} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import LoginDemo from '../DemoLogin/Login';

//import CallBackFunc from './Callback';
// import Login from './Assignment4';

// import GetData from './pracaxios';
// import Refhook from './refhook';
// import Practicetable from './assignment3';
// import Functional from './assignment1';
// import Table from './assignment3';
// import Usehook from './useeffect';
// import Radio from './radio';
//import Radio1 from './radio1';
//import Data from './data';
// import Factorial1 from './Factorial1';
// import Methods from './predefine';
// import State from './dynamicview';
// import Calparent from './cal_parent';

function App() {
  return (
    <div className="App">
      {/* <State> </State> */}
      {/* <Methods> </Methods> */}
      {/* // <Calparent></Calparent> */}
      {/* <Factorial1 ></Factorial1> */}
      {/* <Data></Data> */}
      {/* <Data></Data> */}
      {/* <Radio></Radio> */}
      {/* <Usehook></Usehook> */}
      {/* <Practicetable></Practicetable> */}
      {/* <Functional></Functional> */}
      {/* <Refhook></Refhook> */}
      {/* <GetData></GetData> */}
      {/* <Login></Login> */}
      {/* <CallBackFunc></CallBackFunc>
      <AppContext></AppContext> */}

      <BrowserRouter>


        <nav
          style={{
            backgroundColor: "blue",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "20px",
              padding: "0",
              margin: "0",
            }}
          >
            <li>
              <NavLink to="/" style={linkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <Link to="/about" style={linkStyle}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" style={linkStyle}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" style={linkStyle}>
                Login
              </Link>
            </li>
          </ul>
        </nav>



        <div
          style={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >



          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginDemo />} />
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  );
}
const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
};

export default App;
