import Button from "./Button";
import { Link } from "react-router-dom";

function CallToAction() {
    return (
        <div className="flex flex-col justify-center items-center gap-6 mt-12 mb-24 sm:mb-48 w-full h-auto text-center">
            <h2 className="drop-shadow-lg font-montreal font-medium text-6xl">
                Still curious?
            </h2>

            <h3 className="mx-10 lg:mx-0 pb-1 font-medium text-gray-800 text-3xl">
                Discover our mission, our materials, and why we believe cork is
                the future.
            </h3>

            <Link to="/about">
                <Button
                    href={"/about"}
                    text={"Learn more"}
                    buttonClasses="h-[56px]"
                    height="h-12"
                />
            </Link>
        </div>
    );
}

export default CallToAction;
