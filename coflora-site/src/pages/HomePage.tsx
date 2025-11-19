import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <Link to="https://coflora.org/" className="nav-link-item">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-link-item">Products</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link-item">Catalogs</Link>
                </li>
                 <li>
                    <Link to="/contact" className="nav-link-item">Showcase</Link>
                </li>
                 <li>
                    <Link to="/contact" className="nav-link-item">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;