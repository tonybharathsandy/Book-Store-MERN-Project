import React from 'react'
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../Redux/features/book/bookApi';

function Recommended() {

         const {data : book = []}  = useFetchAllBooksQuery();

        let recommendedBooks = book ? book.slice(8, 18):[];

  return (
    <div className='p-4'>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Recommended For You</h2>

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
     {recommendedBooks.map((item, index) => (
         <SwiperSlide key={index}>
             <BookCard book={item} />
         </SwiperSlide>
     ))}
 </Swiper>

    </div>


  )
}

export default Recommended