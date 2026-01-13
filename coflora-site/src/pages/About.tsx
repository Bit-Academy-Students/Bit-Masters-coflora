import Header from "../components/Header";
import { img2 } from "../assets/images/index";
import { img3 } from "../assets/images/index";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <section className={`w-screen overflow-x-hidden h-screen object-left object-cover text-black`}>
                <Header></Header>
                <div className="relative flex w-full flex-wrap">
                    <div className="flex flex-wrap absolute w-[50vw] justify-center gap-10 p-10">
                        <div className="flex flex-col gap-7">
                            <h2 className="text-2xl">Who and Why</h2>
                            <p>WHO?
                                We are a team of like minded nature & art appreciators, that united to offer unique products to the world.

                                We have expertise in Environmental Sciences, Sustainability, Climatology as well as fashion, design and arts. Here, Co-creating with nature, with its Flora, becomes possible, and brings all our knowledge and creativity in harmony, for the good of all.

                                CoFlora brings together the care for nature and innovative design and art.
                            </p>
                        </div>
                        <div className="rounded-full flex flex-wrap">
                            <img src="/wood.jpg" className="w-[100px] h-[100px]" style={{ clipPath: "circle()" }} alt="wood" />
                            <img src="/phone.jpg" className="w-[200px] h-[200px]" style={{ clipPath: "circle()" }} alt="phone" />
                            <img src={img2} className="w-[150px] h-[150px]" style={{ clipPath: "circle()" }} alt="phone" />
                            <img src={img3} className="w-[50px] h-[50px]" style={{ clipPath: "circle()" }} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}