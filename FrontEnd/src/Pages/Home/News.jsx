import React from 'react'

import news1 from '../../assets/news/news-1.png'
import news2 from '../../assets/news/news-2.png'        
import news3 from '../../assets/news/news-3.png'
import news4 from '../../assets/news/news-4.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function News() {

    const news = [
        {
            "id": 1,
            "title": "Global Climate Summit Calls for Urgent Action",
            "description": "World leaders gather at the Global Climate Summit to discuss urgent strategies to combat climate change, focusing on reducing carbon emissions and fostering renewable energy solutions.",
            "image": news1
        },
        {
            "id": 2,
            "title": "Breakthrough in AI Technology Announced",
            "description": "A major breakthrough in artificial intelligence has been announced by researchers, with new advancements promising to revolutionize industries from healthcare to finance.",
            "image": news2
        },
        {
            "id": 3,
            "title": "New Space Mission Aims to Explore Distant Galaxies",
            "description": "NASA has unveiled plans for a new space mission that will aim to explore distant galaxies, with hopes of uncovering insights into the origins of the universe.",
            "image": news3
        },
        {
            "id": 4,
            "title": "Stock Markets Reach Record Highs Amid Economic Recovery",
            "description": "Global stock markets have reached record highs as signs of economic recovery continue to emerge following the challenges posed by the global pandemic.",
            "image": news4
        },
        {
            "id": 5,
            "title": "Innovative New Smartphone Released by Leading Tech Company",
            "description": "A leading tech company has released its latest smartphone model, featuring cutting-edge technology, improved battery life, and a sleek new design.",
            "image": news2
        }
    ]

  return (
    <>
        <div className='p-4'>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">News</h2>
        
             {/* Swiper Carousel */}
             <Swiper
             navigation={true}  // Enable navigation buttons
             modules={[Navigation]} // Remove Pagination module
             className="mySwiper mt-6"
             breakpoints={{
                 320: { slidesPerView: 1, spaceBetween: 10 },  // Mobile
                 640: { slidesPerView: 2, spaceBetween: 20 },  // Tablets
                 1024: { slidesPerView: 2, spaceBetween: 30 }  // Desktop
             }}
         >    
             {news.map((item, index) => (
                 <SwiperSlide key={index}>
                        <div className="bg-white shadow-md rounded-lg m-auto p-4 w-full max-w-2xl flex flex-row justify-between gap-10 items-center ">
                        <div>
                        <h2 className="text-xl font-semibold text-gray-800 mt-3">{item.title}</h2>
                        <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                        </div>
                        <div>
                            <img src={item.image} alt={item.title} className="w-100 h-40 object-cover rounded-lg" />       
                        </div>
                        </div>
                 </SwiperSlide>
             ))}
         </Swiper>
        
            </div>
    </>
  )
}

export default News