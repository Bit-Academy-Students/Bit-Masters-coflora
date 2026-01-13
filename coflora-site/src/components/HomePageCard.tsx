import type { HomePageCardProps } from "../types";
import Button from "./Button";
import { Link } from "react-router-dom";

function HomePageCard({ img, name, text }: HomePageCardProps) {
    return (
        <Link to={"/products"} className="flex flex-col gap-12 mx-auto pt-12">
            <div className="flex md:flex-row flex-col items-center shadow-lg card-border rounded-xl h-full overflow-hidden card-bg">
                <img
                    src={img}
                    alt={name}
                    className="w-full md:w-1/2 h-64 md:h-full object-cover"
                />
                <div className="flex flex-col justify-center p-6 md:p-12 w-full md:w-1/2 h-full">
                    <h2 className="mb-4 font-bold text-3xl">For {name}</h2>
                    <p className="mb-6 text-gray-700">{text}</p>
<<<<<<< HEAD

                    <Button href={"/products"} text={`Go to ${name}`} />
=======
                    <a href="/builders" className="">
                        <button className="group inline-flex relative justify-center items-center bg-gray-800 py-1 pr-14 pl-6 rounded-full h-14 font-medium text-neutral-50 hover:cursor-pointer">
                            <span className="z-10 pr-2">Go to {name}</span>
                            <div className="inline-flex right-1 absolute justify-end items-center bg-gray-700 rounded-full w-12 group-hover:w-[calc(100%-8px)] h-12 transition-[width]">
                                <div className="flex justify-center items-center mr-3.5">
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-neutral-50"
                                    >
                                        <path
                                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </a>
>>>>>>> About
                </div>
            </div>
        </Link>
    );
}

export default HomePageCard;
