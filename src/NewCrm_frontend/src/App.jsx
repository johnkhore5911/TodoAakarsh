import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Login } from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";
import { CreateLead } from "./Components/CreateLead";
import { CreateTask } from "./Components/CreateTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createlead" element={<CreateLead />} />
          <Route path="/createtask" element={<CreateTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
