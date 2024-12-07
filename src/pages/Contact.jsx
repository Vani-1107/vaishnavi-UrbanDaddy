const Contact = () => {
    return (
        <div>
            <div className="w-full h-[150px] bg-gray-600 flex items-center">
                <div className="pl-24">
                    <h1 className="text-3xl font-bold text-white">Our Articles</h1>
                    <p className="text-white italic text-xs">See Our Latest Articles & News</p>
                </div>
            </div>

            <div className="bg-gray-50 min-h-screen p-6">
                <div className="max-w-5xl mx-auto">
                    {/* Contact Information Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <i className="fas fa-shopping-cart text-blue-600 text-3xl mb-4"></i>
                            <h3 className="font-semibold text-lg">Contact Sales</h3>
                            <p>sales@rikadahelp.co.uk</p>
                            <p>+01 215 245 6258</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <i className="fas fa-user text-blue-600 text-3xl mb-4"></i>
                            <h3 className="font-semibold text-lg">Contact Support</h3>
                            <p>support@rikadahelp.co.uk</p>
                            <p>+01 215 245 6258</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                            <i className="fas fa-comments text-blue-600 text-3xl mb-4"></i>
                            <h3 className="font-semibold text-lg">Start Live Chat</h3>
                            <button className="text-green-600 font-semibold">Live Chat</button>
                        </div>
                    </div>

                    {/* Contact Form and Map */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Form */}
                        <form className="bg-white p-6 rounded-lg shadow-md">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Subject"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Description"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md shadow hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-300"
                            >
                                Submit Request
                            </button>
                        </form>

                        {/* Map */}
                        <div className="rounded-lg shadow-md overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27459.272639395457!2d76.780631382544!3d30.73331480550371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedc87dfcb24b%3A0x1cb5d29b5c4de89e!2sICICI%20Bank%20Sector%2034%2C%20Chandigarh-Branch%20%26%20ATM!5e0!3m2!1sen!2sin!4v1670601948743!5m2!1sen!2sin"
                                style={{ border: 0, width: "100%", height: "400px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;