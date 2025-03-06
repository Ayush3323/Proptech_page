import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Subpage from "./components/Subpage/Subpage";
import Propertypage from "./components/Otherpages/Propertypage.jsx"
import ContactPage from "./components/Otherpages/ContactPage.jsx";
import About from "./components/Otherpages/About.jsx";
import PropertyListings from "./components/Builderpage/PropertyListings.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Secondpage/:id" element={<Subpage />} />
        <Route path="/Property" element={<Propertypage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/prop" element={<PropertyListings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
