import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faHeartPulse, faBowlFood, faTruckPlane, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: "Education", listings: 80, icon: faSchool },
  { name: "Healthcare", listings: 120, icon: faHeartPulse },
  { name: "Eat & Foods", listings: 78, icon: faBowlFood },
  { name: "Transportation", listings: 90, icon: faTruckPlane },
  { name: "IT & Software", listings: 210, icon: faLaptopCode },
];

const CategoryCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable automatic sliding
        autoplaySpeed: 2000, // Set speed of sliding (in milliseconds)
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
            <div className="container w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 mx-auto px-4">
                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <div className='bg-gray-200 h-[180px] w-[250px] '>
                        <div key={index} className="bg-white shadow-md p-4 rounded-lg relative h-[180px] w-[220px] flex items-center justify-center">
                            <div className="flex flex-col my-auto items-center justify-center">
                                <div className="flex items-center justify-center mb-4">
                                    <FontAwesomeIcon icon={category.icon} className={`${category.icon} text-red-600 text-3xl`} />
                                </div>
                                <h4 className="text-lg font-semibold text-center">{category.name}</h4>
                                <p className="text-center bg-slate-200 text-xs py-1 px-2 rounded-xl text-gray-500">{category.listings} Listings</p>
                            </div>
                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default CategoryCarousel;
