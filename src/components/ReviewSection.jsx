import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user1 from '../assets/user-1.png';
import user2 from '../assets/user-2.png';
import user3 from '../assets/user-3.png';
import user4 from '../assets/user-4.png';
import { faSchool, faHeartPulse, faBowlFood, faTruckPlane, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const reviews = [
    {
        id: 1,
        name: "Manju",
        subtitle: "Free Lancer-- Best Swear electronics",
        service: "Home Appliances Repair & Services",
        image: user1,
        review: "Swear electronics offer best price and quality service.",
    },
    {
        id: 2,
        name: "Vasumathi",
        subtitle: "C. Selvamony",
        service: "Educational Consultants",
        image: user2,
        review:
            "ACS is one of the best consultants if you persue your education overseas.",
    },
    {
        id: 3,
        name: "Abi",
        subtitle: "Hetal",
        service: "Art Schools",
        image: user3,
        review:
            "Ms. Hetal is very professional in teaching like explains from basic to advance.",
    },
    {
        id: 4,
        name: "Mitesh",
        subtitle: "Vallalar Homecare Services",
        service: "Domestic Help Services",
        image: user4,
        review:
            "Communication 5/5 responsiveness 5/5 good price 5/5 ontime services 5/5 Service Quality.",
    },
];

const ReviewSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="bg-gray-200 py-16">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold">Featured</h2>
                <h3 className="text-4xl font-bold text-gray-700">
                    Our User <span className="text-red-500">Reviews</span>
                </h3>
            </div>
            <div className="container w-11/12 md:w-10/12 lg:w-8/12 xl:w-8/12 mx-auto px-4">
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div className='bg-gray-200 h-[250px] w-[300px] '>
                            <div key={index} className="bg-white shadow-md p-4 rounded-lg relative h-[250px] w-[295px] flex flex-col items-center justify-center">
                                <div className="flex flex-col my-auto items-center justify-center p-3">
                                    <img
                                        src={review.image}
                                        className="w-16 h-16 rounded-full mb-3 border-4 border-gray-300 object-cover"
                                        alt={review.name}
                                    />
                                    <h4 className="text-lg font-bold">
                                        {review.name}
                                    </h4>
                                    <span className="text-xs text-red-500">
                                        {review.subtitle}
                                    </span>
                                    <div className='text-xs text-gray-500'>{review.service}</div>
                                </div>
                                {/* <br /> */}
                                <p className='text-sm '>{review.review}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default ReviewSection;