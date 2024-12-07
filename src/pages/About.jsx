import image from '../assets/one-stop.avif';
import ReviewSection from '../components/ReviewSection';

const About = () => {
    const steps = [
        {
            icon: "📍",
            title: "Find Interesting Place",
            description:
                "Promote your business on competitor listings by targeting high-intent mobile users.",
            bg: "bg-green-100",
            iconColor: "text-orange-500",
        },
        {
            icon: "👤",
            title: "Contact A Few Owners",
            description:
                "Promote your business on competitor listings by targeting high-intent website users.",
            bg: "bg-orange-100",
            iconColor: "text-orange-600",
        },
        {
            icon: "✳️",
            title: "Make A Reservation",
            description:
                "Showcase your product and service offerings to potential customers.",
            bg: "bg-blue-100",
            iconColor: "text-red-500",
        },
    ];

    return (
        <div className="bg-gray-100 pb-9">
            <div className="w-full h-[150px] bg-gray-600 flex items-center">
                <div className="pl-24">
                    <h1 className="text-3xl font-bold text-white">About Us</h1>
                    <p className="text-white italic text-xs">Search for Anything , Anywhere India's No.1 Local Search Engine.</p>
                </div>
            </div>

            <div className="w-[70%] mx-auto flex flex-col md:flex-row items-center py-12 px-4">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2 flex justify-center relative">
                    <img
                        src={image}
                        alt="Shopping Cart"
                        className="w-full h-auto rounded-lg"
                    />
                    {/* <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                            <i className="fas fa-play text-white text-2xl"></i>
                        </div>
                    </button> */}
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
                    <p className="text-green-500 font-medium uppercase text-sm mb-2">
                        Welcome To Urban Daddy
                    </p>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        One-Stop For All Local Businesses, Services, & Stores Nearby Across
                        India
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Welcome to Urban Daddy, your 'one-stop shop' where you are assisted
                        with day-to-day and exclusive planning and purchasing activities. We
                        take pride in our iconic customer support number, 1111222222, and the
                        fact that we own a strong hold on local business information pan
                        India.
                    </p>
                    <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300">
                        Read More
                    </button>
                </div>
            </div>
            <ReviewSection />

            {/* steps */}
            <div className="container w-[65%] mx-auto py-12 px-4 text-center">
                <div className="relative pb-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        <span className="text-gray-400 absolute -top-2 -z-10 text-5xl opacity-30">
                            Process
                        </span>
                        How It <span className="text-pink-500">Works</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center w-full md:w-1/3"
                        >
                            <div
                                className={`w-16 h-16 flex items-center justify-center rounded-full ${step.bg}`}
                            >
                                <span className={`text-3xl ${step.iconColor}`}>{step.icon}</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About;