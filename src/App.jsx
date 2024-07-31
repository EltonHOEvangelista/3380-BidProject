//App.jsx
import React from "react";
import {Route, Routes} from 'react-router-dom';

// App components
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddVehicle from "./components/AddVehicle";
import Bid from "./components/Bid";

function App() {

  return ( 
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addvehicle" element={<AddVehicle />} />
          <Route path="/bid/:vin" element={<Bid />} />
        </Routes>
        <Footer />
      </div>
  )
}

export default App
