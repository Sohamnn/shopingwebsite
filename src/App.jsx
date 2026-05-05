// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }
// export default App;

// import { Routes, Route} from "react-router-dom";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import ProductDetails from "./pages/ProductDetails";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/product/:id" element={<ProductDetails />} />
//     </Routes>
//     </>
//   );
// }

// export default App;




import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Checkout from "./pages/Checkout"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout /> } />


      </Routes>
    </>
  );
}

export default App;


// function App() {
//   return (
//   <>
//   <Navbar />
//   <h1>App is working 🚀</h1>
//   </>
//   )
// }

// export default App;