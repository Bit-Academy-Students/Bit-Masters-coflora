import { Link } from "react-router-dom";

function BurgerMenu() {


    return (
        <div className="burger-menu min-[320px]:flex min-[426px]:hidden flex flex-col cursor-pointer ml-4">
            <div className="line1 w-6 h-0.5 bg-gray-700 mb-1"></div>
            <div className="line2 w-6 h-0.5 bg-gray-700 mb-1"></div>
            <div className="line3 w-6 h-0.5 bg-gray-700"></div>
        </div>
    )
}

function Header() {
    return (
        <>
            <nav className="flex w-screen shadow-md p-4 mx-auto justify-center items-center">
                <BurgerMenu />
                <Link to="/"><img className="w-40" src="/logo.png" alt="CoFlora Logo" /></Link>
                <section id="overlay-content" className="links ml-40 min-[320px]:hidden min-[426px]:flex">
                    <Link to="/" className="mx-4 text-gray-700 hover:text-blue-500 transition">Home</Link>
                    <Link to="/about" className="mx-4 text-gray-700 hover:text-blue-500 transition">About</Link>
                    <Link to="/contact" className="mx-4 text-gray-700 hover:text-blue-500 transition">Contact</Link>
                </section>
            </nav>
        </>
    )
}
export default Header;
