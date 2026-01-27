import Loginform from "./form/Loginform" 
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Products from "./pages/Products"
import Solutions from "./pages/Solutions"
import Developers from "./pages/Developers"
import Resources from "./pages/Resources"
import Pricing from "./pages/Pricing"
import Signin from "./pages/Signin"
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Loginform/>}/>
        <Route path="/Products" element={<Products/>} />
        <Route path="/Solutions" element={<Solutions/>} />
        <Route path="/Developers" element={<Developers/>}/>
        <Route path="/Resources" element={<Resources/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Signin" element={<Signin/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
