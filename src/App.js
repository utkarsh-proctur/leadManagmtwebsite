import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Hero from "./components/HeroSection/HeroSection";
import RegistrationForm from "./components/AdmissionForm/AdmissionForm";
import "./App.css";
import Courses from "./components/OfferedCourses/OfferedCourses";
import Admissionprocess from "./components/Admissionprocess/Admissionprocess";
import Admissionform from "./components/AdmissionForm/AdmissionForm";
import Process from "./components/Process/Process";
import Campus from "./components/Campus/Campus";
import Footer from "./components/Footer/Footer";
import Recruiters from "./components/Recruiters/Recruiters";
import Instruction from "./components/Instructions";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Courses />
        <Admissionprocess />
        <Instruction />
        <Process />

        <Campus />
        <Recruiters />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
