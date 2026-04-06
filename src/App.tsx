import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Página principal */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
