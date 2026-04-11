import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import About from "./pages/About";
import AddNote from "./pages/AddNote";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup/Signup";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      {token && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            token ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addnote"
          element={
            <ProtectedRoute>
              <AddNote />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;