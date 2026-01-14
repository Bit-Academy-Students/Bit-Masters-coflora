import { img2 } from "../assets/images/index";
import { img3 } from "../assets/images/index";
import { eco } from "../assets/images/index";
import { trees } from "../assets/images/index";

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center bg-white pt-16 pb-24 w-full min-h-screen">
            <div className="flex flex-col items-center gap-8 bg-neutral-50 shadow-lg p-8 card-border rounded-xl w-full max-w-3xl">
                <h2 className="mb-2 font-montreal font-semibold text-black text-3xl">
                    Who and Why
                </h2>
                <p className="font-montreal text-black text-lg text-center">
                    We are a team of like-minded nature and art appreciators,
                    united to offer unique products to the world. Our expertise
                    spans Environmental Sciences, Sustainability, Climatology,
                    fashion, design, and the arts. Here, co-creating with
                    nature—and its flora—becomes possible, bringing all our
                    knowledge and creativity into harmony for the good of all.
                    CoFlora brings together care for nature and innovative
                    design and art.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
                    <img
                        src={eco}
                        className="rounded-full w-[100px] h-[100px] object-cover"
                        style={{ clipPath: "circle()" }}
                        alt="eco"
                    />
                    <img
                        src={trees}
                        className="rounded-full w-[200px] h-[200px] object-cover"
                        style={{ clipPath: "circle()" }}
                        alt="trees"
                    />
                    <img
                        src={img2}
                        className="rounded-full w-[150px] h-[150px] object-cover"
                        style={{ clipPath: "circle()" }}
                        alt="nature"
                    />
                    <img
                        src={img3}
                        className="rounded-full w-[50px] h-[50px] object-cover"
                        style={{ clipPath: "circle()" }}
                        alt="art"
                    />
                </div>
            </div>
        </div>
    );
}