import { useAuth } from "../context/AuthContext"
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className="navbar">
        <div className="logo">
            <Link to="/">
            <span className="logo-icon">📖</span>
            <span className="logo-text">Book<span className="logo-accent">Library</span></span>

            </Link>

        </div>

        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/profile">Profile</Link></li>

        </ul>
        {isLoggedIn ? (
        <Link to="/profile">
        <button className= "login-btn">👤 Profile</button>
        </Link>
      
    
  ) : (
    <Link to="/login">
    <button className="login-btn">Login</button>
    </Link>
  )}
  </nav>
  )
}


export default Navbar;
