import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Header({ setIsLoggedIn }) {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("accessToken");

    toast.success("Logged out successfully");

    setIsLoggedIn(false);
  
  navigate("/");
}
return (
  <header className="flex justify-between bg-blue-800 p-4">
    <h1 className="text-4xl font-bold text-white">Foody</h1>

    <nav>
      <ul className="flex gap-10 m-2 text-white items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <button
          onClick={handleLogout}
          type="button"
          className="bg-white hover:bg-gray-400 text-black text-xl rounded-2xl px-3 py-1 shadow-md transition"
        >
          Log out
        </button>
      </ul>
    </nav>
  </header>
);
}

export default Header;
