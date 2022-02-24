
import React from "react";
import './App.css';
import Navbar from "./components/includes/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
function App() {
  return (
    
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
    
      <Routes>
      <Route path="/about" element={<About/>}/>
      </Routes>

      <Routes>
      <Route path="/product" element={<Products/>}/>
      </Routes>  
      
      <Routes>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
          </div>
      </Router>

   
  );
}

export default App;
