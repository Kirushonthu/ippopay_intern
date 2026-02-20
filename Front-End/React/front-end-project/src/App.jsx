import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Loginform from "./form/Loginform";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Loginform setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
        
          <Routes>
            <Route path="/home" element={<Home />} />
            
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
