import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import ProductCard from "./ProductCard";
import type { ProductCarouselProps } from "../types";

function ProductCarousel({ products, delay }: ProductCarouselProps) {
    return (
        <>
            <div className="relative mb-30 w-1/2 h-[75vh]">
                <Swiper
                    direction={"horizontal"}
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    speed={1250}
                    autoplay={{
                        delay: delay,
                        disableOnInteraction: true,
                    }}
                    mousewheel={true}
                    pagination={true}
                    modules={[Autoplay, Pagination, Mousewheel]}
                    className="z-0 w-full h-full mySwiper"
                >
                    {products.map((product) => (
                        <SwiperSlide>
                            <ProductCard
                                key={product.id}
                                link={product.link}
                                img={product.img}
                                title={product.title}
                                description={product.description}
                                chips={product.chips}
                                outerDivClass="h-full"
                                imgClass="h-[50vh] object-scale-down"
                                linkClass="pt-6"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default ProductCarousel;
