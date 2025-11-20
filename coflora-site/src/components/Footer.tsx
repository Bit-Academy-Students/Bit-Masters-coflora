import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="flex items-center min-[425px]:w-full min-[320px]:flex-col flex-wrap min-[425px]:flex-row justify-evenly h-auto bg-amber-200">
            <Link to="/" className="w-[270px] min-[425px]:w-[50vw] min-[435px]:w-[150px] aspect-video object-contain"><img src="https://coflora.org/wp-content/uploads/2022/08/coflora_original_black.png"></img></Link>
            <div className="container-contact relative min-[320px]:w-[250px] min-[320px]:py-7 text-sm">
                <div className="py-2">Innovative Eco Solution for Interior, Exterior and events</div>
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="tel py-2">023 234 0424</div>
                        <div className="email py-2">askcork@coflora.org</div>
                    </div>

                    <img className="w-8 mt-5 h-8 object-contain" src="../../public/Instagram.png" alt="Instagram of Co-Flora" />
                </div>
            </div>
            <div className="flex gap-5 text-left justify-start min-[320px]:w-[320px]">
                <div className="flex flex-col">
                    <Link className="py-2 px-10" to="/">Home</Link>
                    <Link className="py-2 px-10" to="/samples">Samples</Link>
                    <Link className="py-2 px-10" to="/about">About</Link>
                    <Link className="py-2 px-10" to="/contact">Contact</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;