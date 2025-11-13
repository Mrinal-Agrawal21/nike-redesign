import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/splide/css/core';
import { HashtagIcon, HeartIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
import { truncate } from "lodash";

const Stories = ({ story: { title, news } }) => {
    const splideRef = useRef(null);
    
    // Auto-rotate every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (splideRef.current) {
                splideRef.current.go('+1');
            }
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    const splideOptions = {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        gap: '2rem',
        pagination: false,
        arrows: false,
        autoplay: false, // We'll handle autoplay with our own interval
        interval: 3000,
        speed: 1000,
        pauseOnHover: true,
        drag: true,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
            640: { perPage: 1 },
        },
    };

    const goNext = () => {
        if (splideRef.current) {
            splideRef.current.go('+1');
        }
    };

    const goPrev = () => {
        if (splideRef.current) {
            splideRef.current.go('-1');
        }
    };

    return (
        <div className="nike-container mb-16 relative">
            <div className="flex items-center justify-between mb-6">
                <Title title={title} />
                <div className="flex space-x-3">
                    <button 
                        onClick={goPrev}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        aria-label="Previous slide"
                    >
                        <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
                    </button>
                    <button 
                        onClick={goNext}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        aria-label="Next slide"
                    >
                        <ChevronRightIcon className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>
            
            <div className="relative">
                <Splide 
                    options={splideOptions} 
                    hasTrack={false}
                    ref={splideRef}
                    className="relative"
                >
                    <SplideTrack>
                        {news.map((val, i) => (
                            <SplideSlide key={i} className="mb-8">
                                <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 h-full flex flex-col">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={val.img}
                                            alt={val.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <div className="text-white">
                                                <div className="flex items-center space-x-4 mb-2">
                                                    <span className="flex items-center text-sm">
                                                        <HeartIcon className="w-4 h-4 mr-1 text-red-500" />
                                                        {val.like}
                                                    </span>
                                                    <span className="flex items-center text-sm">
                                                        <ClockIcon className="w-4 h-4 mr-1" />
                                                        {val.time}
                                                    </span>
                                                    <span className="flex items-center text-sm text-blue-400">
                                                        <HashtagIcon className="w-4 h-4 mr-1" />
                                                        {val.by}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                            {val.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                                            {val.text}
                                        </p>
                                        <div className="mt-auto">
                                            <a 
                                                href={val.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-block w-full text-center bg-black text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                                            >
                                                {val.btn || 'Read More'}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                    
                    {/* Custom pagination */}
                    <div className="splide__arrows flex justify-center mt-6 space-x-2">
                        {news.map((_, index) => (
                            <button 
                                key={index}
                                className="splide__pagination__custom w-2 h-2 rounded-full bg-gray-300 focus:outline-none"
                                onClick={() => splideRef.current?.go(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </Splide>
            </div>
        </div>
    );
};

export default Stories;
