import { PRODUCTS } from "../products";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";
import Button from "../components/Button";
import {
    home0,
    home1,
    home2,
    home3,
    home4,
    wallpaper0,
    wallpaper1,
    wallpaper2,
} from "../assets/images/projects";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

function ProductsPage() {
    const homes = [home0, home1, home2, home3, home4];
    const wallpapers = [wallpaper0, wallpaper1, wallpaper2];

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get("filter") || "all";
    const coatingId = "cork-coating";
    const wallpaperId = "cork-wallpaper";

    const filteredProducts = useMemo(() => {
        if (filter === "contractor") {
            return PRODUCTS.filter(
                (p) => p.id === coatingId || p.id === wallpaperId
            );
        }
        if (filter === "designer") {
            return PRODUCTS.filter((p) => p.id !== coatingId);
        }
        return PRODUCTS;
    }, [filter]);

    const showCoating = filteredProducts.some((p) => p.id === coatingId);
    const showWallpaper = filteredProducts.some((p) => p.id === wallpaperId);

    const filteredCards = filteredProducts.filter(
        (p) => p.id !== coatingId && p.id !== wallpaperId
    );

    return (
        <div className="flex flex-col justify-center items-center pt-8 pb-32 w-full h-auto">
            <div className="flex gap-4 bg-white/30 backdrop-blur-md mb-24 p-4 border border-white/40 rounded-xl">
                <button
                    className={`px-4 py-2 rounded ${
                        filter === "contractor"
                            ? "bg-gray-800 text-white"
                            : "bg-gray-200"
                    }`}
                    onClick={() => setSearchParams({ filter: "contractor" })}
                >
                    Contractor
                </button>
                <button
                    className={`px-4 py-2 rounded ${
                        filter === "designer"
                            ? "bg-gray-800 text-white"
                            : "bg-gray-200"
                    }`}
                    onClick={() => setSearchParams({ filter: "designer" })}
                >
                    Designer
                </button>
                <button
                    className={`px-4 py-2 rounded ${
                        filter === "all"
                            ? "bg-gray-800 text-white"
                            : "bg-gray-200"
                    }`}
                    onClick={() => setSearchParams({ filter: "all" })}
                >
                    Everyone
                </button>
            </div>

            {showCoating && (
                <>
                    <header className="flex lg:flex-row flex-col items-center mb-8 w-full max-w-7xl">
                        <h2 className="drop-shadow-lg mb-4 lg:mb-8 lg:ml-8 lg:w-1/2 font-montreal font-semibold text-5xl lg:text-6xl lg:text-left text-center">
                            Co-Flora Coating
                        </h2>
                        <p className="mx-8 lg:mx-24 lg:w-1/2 text-xl text-center lg:text-right">
                            A material choice that supports both buildings and
                            the planet. Our cork coating reduces environmental
                            impact while improving performance, and longevity
                            across architectural surfaces.
                        </p>
                    </header>
                    <div className="w-full text-center curved-carousel">
                        <ProductCarousel
                            outerDivClass="h-[45vh] w-full"
                            products={homes}
                            delay={3000}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        />
                    </div>
                    <Button
                        href={"/products/cork-coating"}
                        text={`View Product`}
                        buttonClasses="h-[48px] mt-8 mb-24"
                        height={"h-12"}
                    />
                </>
            )}

            {showWallpaper && (
                <>
                    <header className="flex lg:flex-row flex-col-reverse items-center mb-8 w-full max-w-7xl">
                        <p className="mx-8 lg:mx-24 lg:w-1/2 text-xl lg:text-left text-center">
                            A natural wall surface that benefits both people and
                            planet. Our cork wallpaper brings warmth, calm
                            acoustics, and sustainable performance into everyday
                            spaces.
                        </p>
                        <h2 className="drop-shadow-lg lg:mr-8 mb-4 lg:mb-8 lg:w-1/2 font-montreal font-semibold text-5xl lg:text-6xl lg:text-left text-center whitespace-wrap lg:whitespace-nowrap">
                            Co-Flora Wallpaper
                        </h2>
                    </header>
                    <div className="w-full text-center curved-carousel">
                        <ProductCarousel
                            outerDivClass="h-[45vh] w-full"
                            products={wallpapers}
                            delay={3000}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        />
                    </div>
                    <Button
                        href={"/products/cork-wallpaper"}
                        text={`View Product`}
                        buttonClasses="h-[48px] mt-8 mb-24"
                        height={"h-12"}
                    />
                </>
            )}

            <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-8 px-8 w-full max-w-7xl">
                {filteredCards.map((product) => (
                    <ProductCard
                        key={product.id}
                        link={product.link}
                        img={product.img}
                        title={product.title}
                        description={product.short}
                        chips={product.chips}
                        linkClass="hover:scale-[1.01] transition-all duration-200 hover:shadow-xl"
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
