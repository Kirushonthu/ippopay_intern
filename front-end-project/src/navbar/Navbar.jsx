import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Stripe</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/developers">Developers</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/Signin">Sign in</Link></li>
        <li className="cbutton"><Link to="/Contact">Contact Sales</Link></li>         
      </ul>
    </nav>
  );
}

export default Navbar;
