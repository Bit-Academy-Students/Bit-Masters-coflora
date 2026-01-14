import contact from "../assets/images/contact1.jpg";

const Contact = () => {
    return (
        <div className="bg-white mx-auto mt-10 mb-10 p-8 rounded-xl w-screen">
            <main className="flex flex-wrap min-[426px]:flex-nowrap justify-center items-center gap-20 min-[769px]:gap-60 w-full">
                <div className="justify-self-center">
                    <img
                        src={contact}
                        className="h-[500px] object-cover aspect-[4/3]"
                        alt="Phone Icon"
                    />
                </div>
                <form className="space-y-5 w-[300px] h-[500px]">
                    <h1 className="mb-8 pb-3 border-blue-500 border-b-2 font-semibold text-gray-800 text-3xl text-center">
                        Contact Us
                    </h1>

                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 font-bold text-gray-600"
                        >
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="p-3 border border-gray-300 focus:border-blue-500 rounded-md outline-none focus:ring-2 focus:ring-blue-300 w-full text-lg transition"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 font-bold text-gray-600"
                        >
                            E-mailadres:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="p-3 border border-gray-300 focus:border-blue-500 rounded-md outline-none focus:ring-2 focus:ring-blue-300 w-full text-lg transition"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 font-bold text-gray-600"
                        >
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="p-3 border border-gray-300 focus:border-blue-500 rounded-md outline-none focus:ring-2 focus:ring-blue-300 w-full text-lg transition resize-y"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 p-4 rounded-md w-full font-bold text-white text-xl transition"
                    >
                        Send
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Contact;
