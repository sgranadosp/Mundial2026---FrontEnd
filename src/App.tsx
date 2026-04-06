import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <Router>
      <div style={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<LogIn />} /> {/* Página principal */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
