import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Subpage from "./components/Subpage/Subpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Secondpage/:id" element={<Subpage />} />
      </Routes>
    </Router>
  );
}

export default App;
