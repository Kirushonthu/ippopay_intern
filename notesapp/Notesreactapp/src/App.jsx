import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/header/Header"
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import About from "./pages/About";
import AddNote from "./pages/AddNote"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/addnote" element={<AddNote />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;