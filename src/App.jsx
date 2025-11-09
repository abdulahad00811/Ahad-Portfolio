import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Navbar/pages/Home";
import About from "./Component/Navbar/pages/About";
import Projects from "./Component/Navbar/pages/Projects";
import Contact from "./Component/Navbar/pages/Contact";
import Footer from "./Component/Navbar/pages/Footer";
import FollowPopup from "./Component/Navbar/pages/FollowPopup";
// import AdminPanel from "./Component/Navbar/pages/AdminPanel";

const App = () => {
  const [modalType, setModalType] = useState(null); // future modals ke liye agar chahiye toh
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // future use

  const closeModal = () => setModalType(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar onLoginClick={() => setModalType("login")} />
            <Home />
            <Projects />
            <About />
            <Contact /> 
            <Footer />
            <FollowPopup />
          </>
        }
      />
      {/* <Route path="/admin" element={<AdminPanel />} /> */}
    </Routes>
  );
};

export default App;
