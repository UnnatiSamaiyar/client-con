import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contactpage from "./pages/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  path="/" element={<Contactpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
