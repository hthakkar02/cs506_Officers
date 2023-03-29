import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/LandingPage";
import StudentLogin from "./components/StudentLogin";
import MentorLogin from "./components/MentorLogin";
import MentorSignup from "./components/MentorSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studentSignupChnage" element={<StudentLogin />} />
        <Route path="/mentorLogin" element={<MentorLogin />} />
        <Route path="/mentorSignup" element={<MentorSignup />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
