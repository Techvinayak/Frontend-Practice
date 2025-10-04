import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Calculation from './Calculation';
import reportWebVitals from './reportWebVitals';
// import Factorial from './Factorial';
// import Circle from './Circle';
// import Square from './Square';
// import Rectangle from './Rectangle';
// import Case from './Case';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Factorial num="5" />
  //   <Calculation num1="7" num2="6"/>
  //   <Rectangle Length="45" Breadth="12" />
  //   <Circle Radius="7" />
  //   <Square Side="9" />
  //   <Case />
  // </React.StrictMode>
  <App />
);

reportWebVitals();
