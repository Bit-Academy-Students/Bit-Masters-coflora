import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { img, img1, img2, img3, img4 } from "../assets/images";
import { scrollToElement } from "../utilities";

function Carousel() {
    return (
        <>
            <div className="relative w-full h-[65vh] xl:h-[65vh]">
                <div className="z-10 absolute inset-0 flex flex-col justify-center items-center bg-black/30 pointer-events-none">
                    <div className="flex flex-col justify-start gap-4 ml-20 w-full">
                        <div className="flex flex-col items-start w-180">
                            <h1 className="drop-shadow-lg font-headers font-medium text-white text-6xl md:text-6xl text-left">
                                Sustainable Cork Materials for Architecture,
                                Design & Product Making.
                            </h1>
                            <button
                                onClick={() => scrollToElement("CustomerCards")}
                                className="group inline-flex z-50 relative justify-center items-center bg-neutral-100 mt-4 mr-12 py-1 pr-14 pl-6 rounded-full w-50 h-[calc(48px+8px)] font-medium hover:cursor-pointer pointer-events-auto"
                            >
                                <span className="z-20 pr-2">
                                    Explore solutions
                                </span>
                                <div className="inline-flex right-1 absolute justify-end items-center bg-neutral-300 rounded-full w-12 group-hover:w-[calc(100%-8px)] h-12 transition-[width]">
                                    <div className="flex justify-center items-center mt-1 mr-3.5 text-black">
                                        <svg
                                            className="w-5 h-5 animate-bounce"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <Swiper
                    direction={"horizontal"}
                    slidesPerView={1}
                    loop={true}
                    speed={1500}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="z-0 w-full h-full mySwiper"
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

export default Carousel;
