import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { ProductCarouselProps } from "../types";
import type { SwiperOptions } from "swiper/types";

function ProductCarousel({
    products,
    delay,
    outerDivClass,
    slidesPerView,
    rounded,
    breakpoints,
}: ProductCarouselProps & { breakpoints?: SwiperOptions["breakpoints"] }) {
    return (
        <>
            <div className={`relative ${rounded} ${outerDivClass}`}>
                <Swiper
                    direction={"horizontal"}
                    slidesPerView={slidesPerView}
                    breakpoints={breakpoints}
                    spaceBetween={40}
                    loop={true}
                    speed={1250}
                    autoplay={{
                        delay: delay,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    mousewheel={true}
                    pagination={false}
                    modules={[Autoplay, Pagination]}
                    className={`z-0 w-full h-full mySwiper ${rounded}`}
                >
                    {products.map((item, idx) => {
                        const src = typeof item === "string" ? item : item.img;
                        return (
                            <SwiperSlide key={idx}>
                                <img
                                    src={src}
                                    className={`w-full lg:h-full aspect-[16/9] object-cover ${rounded}`}
                                    alt={`Product image ${idx + 1}`}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}

export default ProductCarousel;
