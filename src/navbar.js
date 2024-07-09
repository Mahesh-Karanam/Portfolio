import { Link } from 'react-router-dom';
import './navbar.css';
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
