const Contact = () => {
    return (
        <div className="mx-auto mt-10 mb-10 p-8 bg-white rounded-xl w-screen">

            <main className="flex w-full flex-wrap min-[426px]:flex-nowrap gap-20 min-[769px]:gap-60 justify-center items-center">
                <div className="justify-self-center">
                    <img src="/phone.jpg" className="w-[350px]" alt="Phone Icon" />
                </div>
                <form className="space-y-5 w-[300px]">
                    <h1 className="text-center text-gray-800 mb-8 pb-3 border-b-2 border-blue-500 text-3xl font-semibold">
                        Contact Us
                    </h1>

                    <div>
                        <label htmlFor="name" className="block mb-2 font-bold text-gray-600">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 font-bold text-gray-600">
                            E-mailadres:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 font-bold text-gray-600">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full p-3 border border-gray-300 rounded-md text-lg resize-y focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-4 bg-blue-600 text-white rounded-md text-xl font-bold hover:bg-blue-700 transition"
                    >
                        Send
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Contact;
