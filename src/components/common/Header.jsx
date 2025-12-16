import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">OU MCA Notes</div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/semesters">Semesters</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
