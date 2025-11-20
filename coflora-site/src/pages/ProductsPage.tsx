import { PRODUCTS } from "../products";
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";
import { FURNITURE, LIGHTS } from "../products";

function ProductsPage() {
    return (
        <div className="flex flex-col justify-center items-center py-12 w-full h-auto">
            <header>
                <h2 className="drop-shadow-lg font-montreal font-medium text-6xl">
                    Explore our products
                </h2>
            </header>

            <div
                id="heroContainer"
                className="gap-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto max-w-7xl"
            >
                {PRODUCTS.map((product) => (
                    <ProductCard
                        key={product.id}
                        link={product.link}
                        img={product.img}
                        title={product.title}
                        description={product.description}
                        chips={product.chips}
                        linkClass="hover:scale-[1.01] transition-all duration-200 hover:shadow-xl"
                    />
                ))}
            </div>
            <div className="flex gap-8 max-w-7xl">
                <ProductCarousel products={FURNITURE} delay={3000} />
                <ProductCarousel products={LIGHTS} delay={5000} />
            </div>
        </div>
    );
}

export default ProductsPage;
