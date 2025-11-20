import { useState } from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <nav className="flex justify-around items-center bg-gray-800 p-4">
            <h2><Link to="/" className="text-white text-xl font-bold">Coflora</Link></h2>


            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                <div className="w-6 h-1 bg-white mb-1"></div>
                <div className="w-6 h-1 bg-white mb-1"></div>
                <div className="w-6 h-1 bg-white"></div>
            </div>

            <div><ul className={`md:flex md:items-center md:static absolute top-16 left-0 w-full bg-gray-800 md:bg-transparent transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0`}>
                <li className="md:ml-4 text-center border-b md:border-none border-gray-700">
                    <a href="https://coflora.org/" className="block text-white py-2 md:py-0" onClick={toggleMenu}>Home</a>
                </li>
                <li className="md:ml-4 text-center border-b md:border-none border-gray-700">
                    <Link to="/about" className="block text-white py-2 md:py-0" onClick={toggleMenu}>Products</Link>
                </li>
                <li className="md:ml-4 text-center border-b md:border-none border-gray-700">
                    <Link to="/catalogs" className="block text-white py-2 md:py-0" onClick={toggleMenu}>Catalogs</Link>
                </li>
                <li className="md:ml-4 text-center border-b md:border-none border-gray-700">
                    <Link to="/showcase" className="block text-white py-2 md:py-0" onClick={toggleMenu}>Showcase</Link>
                </li>
                <li className="md:ml-4 text-center">
                    <Link to="/contact" className="block text-white py-2 md:py-0" onClick={toggleMenu}>Contact</Link>
                </li>
            </ul></div>

        </nav>
    );
}

export default NavBar;