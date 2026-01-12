import { useState } from 'react';
import { Link } from "react-router-dom";

const MailIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>;
const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"></path></svg>;
const LinkedInIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>;


function BurgerIcon({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
    const lineColor = "bg-gray-700";

    return (
        <button
            onClick={onClick}
            className="md:hidden flex flex-col cursor-pointer p-2 focus:outline-none z-50 transition duration-300"
            aria-label="Toggle Menu"
        >
            <div
                className={`w-7 h-0.5 ${lineColor} mb-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
            ></div>
            <div
                className={`w-7 h-0.5 ${lineColor} mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
            ></div>
            <div
                className={`w-7 h-0.5 ${lineColor} transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
            ></div>
        </button>
    );
}

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const corkAccent = "bg-yellow-700 hover:bg-yellow-800 text-white transition duration-300 shadow-md";

    return (
        <>
            <nav className="flex w-full shadow-md p-4 mx-auto items-center bg-white z-40 relative border-b border-gray-100">

                <div className="md:hidden order-1">
                    <BurgerIcon isOpen={isOpen} onClick={toggleMenu} />
                </div>

                <div className="grow flex justify-center md:justify-start order-2 md:order-1">
                    <Link to="/" className="shrink-0">
                        <img className="w-32 md:w-40" src="/logo.png" alt="CoFlora Logo" />
                    </Link>
                </div>

                <section className="hidden md:flex md:items-center order-2 space-x-8">
                    <Link to="/" className="text-gray-700 text-lg font-medium relative transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-700 hover:after:w-full hover:text-yellow-700">
                        Home
                    </Link>
                    <Link to="/producten" className="text-gray-700 text-lg font-medium relative transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-700 hover:after:w-full hover:text-yellow-700">
                        Products
                    </Link>
                    <Link to="/contact" className="text-gray-700 text-lg font-medium relative transition duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-700 hover:after:w-full hover:text-yellow-700">
                        Contact
                    </Link>

                    <Link
                        to="/sample-aanvraag"
                        className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${corkAccent}`}
                    >
                        Request a Sample
                    </Link>
                </section>

                <div className="md:hidden order-3 w-10">
                </div>

            </nav>

            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-50 transition-transform duration-500 ease-in-out z-30 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div className="flex flex-col  items-center pt-24 space-y-8 h-full pb-10 overflow-y-auto">

                    <Link to="/" className="text-3xl text-gray-800 p-7 hover:text-yellow-700 transition duration-300" onClick={toggleMenu}>Home</Link>
                    <Link to="/producten" className="text-3xl text-gray-800 p-7 hover:text-yellow-700 transition duration-300" onClick={toggleMenu}>Products</Link>
                    <Link to="/contact" className="text-3xl text-gray-800 p-7 hover:text-yellow-700 transition duration-300" onClick={toggleMenu}>Contact</Link>

                    <div className="w-20 h-0.5 bg-gray-300 my-4"></div>
                    <Link
                        to="/sample-aanvraag"
                        className={`px-6 py-3 rounded-xl text-lg font-bold ${corkAccent}`}
                        onClick={toggleMenu}
                    >
                        Request a Sample
                    </Link>

                    <div className="w-20 h-0.5 bg-gray-300 my-4"></div>

                    <div className="mt-10">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Follow us</h3>
                        <div className="flex space-x-6 text-gray-700">
                            <a href="mailto:info@coflora.nl" aria-label="E-mail" className="hover:text-yellow-700 transition"><MailIcon /></a>
                            <a href="https://linkedin.com/coflora" target="_blank" aria-label="LinkedIn" className="hover:text-yellow-700 transition"><LinkedInIcon /></a>
                            <a href="https://www.instagram.com/coflora_design/" target="_blank" aria-label="Instagram" className="hover:text-yellow-700 transition"><InstagramIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;