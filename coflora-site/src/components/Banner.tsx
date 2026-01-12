import Marquee3k from "marquee3000";
import { useEffect } from "react";
import { kurk1 } from "../assets/images";
import { FEATURES } from "../constants";
import type { BannerProps } from "../types";
import { scrollToElement } from "../utilities";

function Banner({ reverse }: BannerProps) {
    useEffect(() => {
        Marquee3k.init();
    }, []);

    return (
        <div
            className="bg-linear-to-r from-orange-200 via-yellow-200 to-red-200 shadow-xl mt-20 rounded-xl w-full h-18 overflow-hidden marquee3k"
            data-speed="0.75"
            data-reverse={reverse}
            style={{ backgroundImage: `url(${kurk1})` }}
        >
            <div className="inline-flex h-18 marquee3k__copy">
                <div className="flex text-brown-200">
                    {FEATURES.map(({ Icon, title }, index) => (
                        <div
                            key={index}
                            onClick={() => scrollToElement("featuresSection")}
                            className="flex justify-center items-center mx-10 h-18 font-semibold text-3xl text-center hover:scale-105 transition-transform"
                        >
                            <Icon size={32} classes="mr-2" />
                            {title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;
