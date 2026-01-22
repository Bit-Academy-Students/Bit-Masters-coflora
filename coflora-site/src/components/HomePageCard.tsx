import type { HomePageCardProps } from "../types";
import Button from "./Button";
import { Link } from "react-router-dom";

function HomePageCard({ img, name, text }: HomePageCardProps) {

        const filter =
            name === "Contractors"
                ? "contractor"
                : name === "Designers"
                ? "designer"
                : "all";

        return (
            <Link
                to={`/products?filter=${filter}`}
                className="flex flex-col gap-12 mx-auto lg:mt-12"
            >
                <div className="flex md:flex-row flex-col items-center shadow-lg card-border rounded-xl h-full overflow-hidden card-bg">
                    <img
                        src={img}
                        alt={name}
                        className="w-full md:w-1/2 md:h-full object-cover aspect-[4/3]"
                    />
                    <div className="flex flex-col justify-center p-4 md:p-12 w-full md:w-1/2 h-full">
                        <h2 className="mb-4 font-bold text-3xl">{name}</h2>
                        <p className="mb-6 text-gray-700">{text}</p>

                        <Button
                            href={"/products"}
                            text={`View Products`}
                            buttonClasses="h-[56px]"
                            height={"h-12"}
                        />
                    </div>
                </div>
            </Link>
        );
}

export default HomePageCard;
