import React, { useState } from 'react';
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../Redux/features/book/bookApi';

function TopSellers() {
    const [categories, setCategories] = useState("Choose a genre");
    
    const {data : book = []}  = useFetchAllBooksQuery();

    const topSellers = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

    const filteredData = categories === "Choose a genre"
        ? book
        : book.filter((item) => item.category.toLowerCase() === categories.toLowerCase());

    return (
        <div className="p-4">
            <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Top Sellers</h2>
                <div>
                    <select 
                        onChange={(e) => setCategories(e.target.value)} 
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {topSellers.map((seller, index) => (
                            <option key={index} value={seller}>{seller}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                navigation={true}  // Enable navigation buttons
                modules={[Navigation]} // Remove Pagination module
                className="mySwiper mt-6"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },  // Mobile
                    640: { slidesPerView: 2, spaceBetween: 20 },  // Tablets
                    1024: { slidesPerView: 3, spaceBetween: 30 }  // Desktop
                }}
            >    
                {filteredData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <BookCard book={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default TopSellers;
