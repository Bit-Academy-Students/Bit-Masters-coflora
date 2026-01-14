import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import type { ProductCardProps } from "../types";

function ProductCard({
    link,
    img,
    title,
    description,
    chips,
    outerDivClass,
    imgClass,
    linkClass,
}: ProductCardProps) {
    return (
        <div
            className={`flex flex-col gap-12 mx-auto rounded-xl w-full ${outerDivClass}`}
        >
            <Link
                to={link}
                className={`group flex flex-col items-center shadow-lg ${linkClass} card-border rounded-xl h-full overflow-hidden cursor-pointer card-bg`}
            >
                <img
                    src={img}
                    alt="coating"
                    className={`w-full aspect-[4/3] object-cover ${imgClass}`}
                />
                <div className="flex flex-col justify-center px-6 pt-6 pb-2 w-full h-full">
                    <h2 className="mb-4 font-bold text-3xl">{title}</h2>
                    <p className="mb-6 text-gray-700">{description}</p>

                    <div id="chips" className="flex flex-wrap gap-2">
                        {chips.map((chip, index) => (
                            <Chip
                                key={index}
                                label={chip}
                                variant="outlined"
                                size="small"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-end mr-3 p-2 w-full">
                    <button className="group flex items-center gap-1 font-medium text-gray-900 text-sm cursor-pointer">
                        View Product
                        <span className="transition-transform group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
