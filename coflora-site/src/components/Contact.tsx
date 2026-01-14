import contact from "../assets/images/contact1.jpg";
import Button from "./Button";

const Contact = () => {
    return (
        <div className="flex flex-col items-center bg-white pt-16 pb-24 w-full min-h-screen">
            <div className="flex xl:flex-row flex-col items-stretch gap-12 shadow-lg p-8 card-border rounded-xl w-full max-w-6xl card-bg">
                <div className="flex flex-col flex-1 items-center w-full xl:w-1/2">
                    <img
                        src={contact}
                        className="mb-6 rounded-xl w-full object-cover aspect-[4/3]"
                        alt="Phone Icon"
                    />
                    <div className="flex flex-col flex-1 justify-center bg-neutral-50 shadow p-6 rounded-xl font-montreal text-black text-lg text-center">
                        <h2 className="mb-2 font-montreal font-semibold text-black text-2xl">
                            The Story of Cork
                        </h2>
                        <p className="text-black">
                            Harvesting cork is an ancient craft that can only be
                            performed by skilled experts. This process not only
                            leaves the tree unharmed—it actually benefits the
                            cork oak. Stripping the bark enhances the tree’s
                            ability to absorb carbon dioxide. In fact, the seven
                            million acres of cork forest around the
                            Mediterranean offset 20 million tons of CO
                            <sub>2</sub> each year.
                        </p>
                    </div>
                </div>
                <form className="flex flex-col flex-1 justify-center space-y-5 bg-neutral-50 shadow p-8 card-border rounded-xl w-full xl:w-1/2 text-black">
                    <h1 className="mb-8 pb-3 border-gray-200 border-b-2 font-montreal font-semibold text-black text-3xl text-center">
                        Contact Us
                    </h1>
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 font-bold text-black"
                        >
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="bg-white p-3 border border-gray-300 focus:border-gray-500 rounded-md outline-none focus:ring-2 focus:ring-gray-200 w-full text-black text-lg transition"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 font-bold text-black"
                        >
                            E-mailadres:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="bg-white p-3 border border-gray-300 focus:border-gray-500 rounded-md outline-none focus:ring-2 focus:ring-gray-200 w-full text-black text-lg transition"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 font-bold text-black"
                        >
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="bg-white p-3 border border-gray-300 focus:border-gray-500 rounded-md outline-none focus:ring-2 focus:ring-gray-200 w-full text-black text-lg transition resize-y"
                        ></textarea>
                    </div>
                    <Button
                        text="Send"
                        buttonClasses="w-full h-[48px] mt-2"
                        height="h-12"
                    />
                </form>
            </div>
        </div>
    );
};

export default Contact;