import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NewPassword } from "./components/ResetPassword/NewPassword/NewPassword";
import { ResetPassword } from "./components/ResetPassword/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/ResetPassword" element={<ResetPassword />} />
        <Route exact path="/NewPassword" element={<NewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
