import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Loginform from "./form/Loginform";
import Navbar from "./navbar/Navbar";

import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Developers from "./pages/Developers";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Signin from "./pages/Signin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <Loginform setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
