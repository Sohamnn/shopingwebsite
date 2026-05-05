// import { useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// const myElement = <h1>I Love JSX!</h1>;

// createRoot(document.getElementById('root')).render(
//   myElement
// );

// import Vehicle from './vehicle.jsx';

// createRoot(document.getElementById('root')).render(
//   <Vehicle />
// )



// createRoot(document.getElementById('sanny')).render(
//   <h1>Hello Sanny! This is an react app example</h1>
// )

// function Car() {
//   const myfunc = () => {
//     alert('Hello World');
//   };
//   return (
//     <button onClick={myfunc}>Click me</button>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Car />
// );

     



// function Car(props){
//   return (
    
//      <h1>My Car is {props.carinfo.name} {props.carinfo.model} and manufactured in {props.carinfo.year}</h1> 
//     // <h2>my car is {props.carin[0]} {props.carin[1]} and manufactured in {props.carin[2]}</h2>
    
//   );
// }

// function Garage(){
//   return (
//     <>
//     <h1>who lives in the garage</h1>
//     <Car brand="Ford" />
//     <Car brand="BMW" />
//     </>
//   );
// }
// const carin= ['ford', 'mustang', '1989'];

// const carinfo = 

// {name: "Ford",
//   model: "Mustang",
//   year: "1989"
// };

// createRoot(document.getElementById('root')).render(
//   <Car carinfo={carinfo} />
// )

// createRoot(document.getElementById('root')).render(
//   <Vehicle />
// )                   

// function Football() {
//   const shoot = () => {
//     alert("great shot");
//   }


// return (
//   <button onClick={shoot}>Take a shoot</button>
//   );
// }



// function Mycars() {
//   const cars = ["Ford", "BMW", "Audi"];
//   return(
//     <>
//     <ul>
//       {cars.map((cars) => <li>my car is {cars}</li>)}
//     </ul>
//     </>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Mycars />
// )

// createRoot(document.getElementById('root')).render(
//   <Football />
// )

// createRoot(document.getElementById('root')).render(
//   <Car carin={carin} />
// )


// function Myform(){
//   const [name, setName] =useState('');

//   function handelchange(e){
//     setName(e.target.value);
//   }
//     function Handelsubmit(e){
//       e.prevantDefault();
//       alert('name');
//     }
  
//   return (
//     <form onSubmit={Handelsubmit}>
//       <label> Enter your Name
//       <input type="text"
//       value={name}
//       onChange={handelchange}
//        />
//        </label>
//        <p>current value: {name}</p>
//        <input type="submit" />
//     </form>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <Myform />
// )




// function Home() {
//   return
//     <h1>Home Page</h1>;
//   }

// function About(){
//   return
//     <h1>About Page</h1>;
// }

// function contact(){
//   return    
//     <h1>Contact Page </h1>;
// }

// function App() {
//   return (
//       <BrowserRouter>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>
//         <Routes>
//           <route path="/" element={<Home />} />
//           <route path="/about" element={<About />} />
//           <route path="/contact" element={<contact />} />
//         </Routes>
//       </BrowserRouter>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <App />
// )


// import React from "react";
// import {Link} from "react-router-dom";

//   const navbar = () => {
//     return (
//       <nav className="nav-wrapper">
//         <div className="container">
//           <Link to="/" className="brand-logo">Sohping</Link>

//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </div>
//       </nav>
//     )
//   }
// export default navbar;


// import React from "react";
// import ReactDom from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom"

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )

// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./context/CartContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);