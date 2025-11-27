import { FEATURES } from "../constants";

function Features() {
    return (
        <div className="flex flex-col justify-center items-center mt-12 py-16 w-full h-auto">
            <h2 className="drop-shadow-lg mb-6 font-montreal font-medium text-6xl">
                Cork's Natural Advantages
            </h2>

            <div className="gap-12 grid md:grid-cols-3 mx-auto px-4 py-6 max-w-6xl">
                {FEATURES.map(({ Icon, title, text }) => (
                    <div className="flex flex-col justify-center items-center gap-2 hover:shadow-md p-6 rounded-xl h-48 text-xl text-center">
                        <Icon size={48} />
                        <h3 className="font-semibold">{title}</h3>
                        <p className="mt-0.5 text-gray-700">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
