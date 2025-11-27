import type { HomePageCardProps } from "../types";
import Button from "./Button";

function HomePageCard({ img, name, text }: HomePageCardProps) {
    return (
        <div className="flex flex-col gap-12 mx-auto pt-12">
            <div className="flex md:flex-row flex-col items-center shadow-lg card-border rounded-xl h-full overflow-hidden card-bg">
                <img
                    src={img}
                    alt={name}
                    className="w-full md:w-1/2 h-64 md:h-full object-cover"
                />
                <div className="flex flex-col justify-center p-6 md:p-12 w-full md:w-1/2 h-full">
                    <h2 className="mb-4 font-bold text-3xl">For {name}</h2>
                    <p className="mb-6 text-gray-700">{text}</p>

                    <Button href={"/builders"} text={`Go to ${name}`} />
                </div>
            </div>
        </div>
    );
}

export default HomePageCard;
