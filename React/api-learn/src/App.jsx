import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Form from "./componets/login-page/Form";
import Footer from "./home/Footer";
import Header from "./home/Header";
import Recipe from "./home/Recipe";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Services from "./componets/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  return (
    <BrowserRouter>


      {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} />}

      <Routes>

        <Route
          path="/"
          element={
            isLoggedIn ? <Recipe /> : <Form setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/" />} />
        <Route path="/services" element={isLoggedIn ? <Services /> : <Navigate to="/" />} />

      </Routes>

      {isLoggedIn && <Footer />}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />


    </BrowserRouter>
  );
}

export default App;
