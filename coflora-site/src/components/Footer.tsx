import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="flex min-[425px]:flex-row min-[320px]:flex-col flex-wrap justify-evenly items-center min-[425px]:w-full h-auto">
            <Link
                to="/"
                className="w-[270px] min-[425px]:w-[50vw] min-[435px]:w-[150px] min-[768px]:w-[280px] object-contain aspect-[3/1] sm:aspect-video"
            >
                <img src="https://coflora.org/wp-content/uploads/2022/08/coflora_original_black.png"></img>
            </Link>
            <div className="relative min-[320px]:py-7 min-[320px]:w-[250px] text-sm container-contact">
                <div className="py-2">
                    Innovative Eco Solution for Interior, Exterior and events
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="py-2 tel">023 234 0424</div>
                        <div className="py-2 email">askcork@coflora.org</div>
                    </div>

                    {/* <img
                        className="mt-5 w-8 h-8 object-contain"
                        src="../../public/Instagram.png"
                        alt="Instagram of Co-Flora"
                    /> */}
                </div>
            </div>
            <div className="flex justify-start gap-5 min-[320px]:w-[320px] min-[768px]:w-auto text-left">
                <div className="flex flex-col">
                    <Link className="px-10 py-2" to="/">
                        Home
                    </Link>
                    <Link className="px-10 py-2" to="/samples">
                        Samples
                    </Link>
                    <Link className="px-10 py-2" to="/about">
                        About
                    </Link>
                    <Link className="px-10 py-2" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
