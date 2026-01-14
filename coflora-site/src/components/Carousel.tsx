import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { CarouselProps } from "../types";

function Carousel({ title, element, images, classesOuterDiv }: CarouselProps) {
    return (
        <>
            <div
                className={`relative h-[55vh] max-w-full sm:h-[65vh] xl:h-[65vh] overflow-x-hidden ${classesOuterDiv}`}
            >
                <div className="z-10 absolute inset-0 flex flex-col justify-center items-center bg-black/30 max-w-full pointer-events-none">
                    <div className="flex flex-col justify-start gap-4 ml-0 sm:ml-20 w-full max-w-full">
                        <div className="flex flex-col items-center sm:items-start w-full sm:w-180 max-w-full">
                            <h1 className="drop-shadow-lg px-8 sm:px-0 font-headers font-medium text-white text-4xl sm:text-6xl sm:text-left text-center">
                                {title}
                            </h1>
                            {element}
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
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                className="w-full h-full object-cover"
                            ></img>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Carousel;
