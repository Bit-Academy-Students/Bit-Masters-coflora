import Button from "./Button";

function CallToArms() {
    return (
        <div className="flex flex-col justify-center items-center gap-6 mt-12 mb-48 w-full h-auto">
            <h2 className="drop-shadow-lg font-montreal font-medium text-6xl">
                Still curious?
            </h2>

            <h3 className="pb-1 font-medium text-gray-800 text-3xl">
                Discover our mission, our materials, and why we believe cork is
                the future.
            </h3>

            <Button href={"/about"} text={"Learn more"} />
        </div>
    );
}

export default CallToArms;
