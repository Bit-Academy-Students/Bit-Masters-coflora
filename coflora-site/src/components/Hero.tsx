import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { img, img1, img2, img3, img4 } from "../assets/images";
import Marquee3k from "marquee3000";
import { useEffect } from "react";
import logo from "../assets/logos/logo.png";

function Hero() {
    useEffect(() => {
        Marquee3k.init();
    }, []);

    return (
        <>
            <div className="relative w-full h-full">
                <div className="z-10 absolute inset-0 flex flex-col justify-center items-center bg-black/30 pointer-events-none">
                    <img
                        src={logo}
                        alt="Logo"
                        className="drop-shadow-lg mb-6 w-64"
                    />
                    <h1 className="drop-shadow-lg w-180 font-bold text-white text-4xl md:text-6xl text-center">
                        We provide sustainable creative solutions
                    </h1>
                </div>

                <Swiper
                    direction={"horizontal"}
                    slidesPerView={1}
                    // spaceBetween={30}
                    loop={true}
                    // mousewheel={true}
                    speed={1500}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Mousewheel, Pagination]}
                    className="z-0 w-full h-140 mySwiper"
                >
                    <SwiperSlide>
                        <img
                            src={img1}
                            className="w-full h-full object-cover"
                        ></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={img}
                            className="w-full h-full object-cover"
                        ></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={img2}
                            className="w-full h-full object-cover"
                        ></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={img3}
                            className="w-full h-full object-cover"
                        ></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={img4}
                            className="w-full h-full object-cover"
                        ></img>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Hero;
