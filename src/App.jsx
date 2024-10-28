import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./Pages/StudentList.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Navbar from "./Components/Navigationbar.jsx";
import StudentRegistration from "./Pages/StudentRegistration.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/registration" element={<StudentRegistration />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
