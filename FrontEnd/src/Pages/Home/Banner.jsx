import React from "react";
import banner from "../../assets/banner.png";

function Banner() {
  return (
    <section className="bg-gray-900 text-white h-[60vh] flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 h-full">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold leading-tight">
              New Releases This Week 📖
            </h1>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              Discover a world of stories, knowledge, and imagination at our **Book Store**.  
              Whether you're a passionate reader, a student, or simply looking for your next adventure,  
              we offer books across all genres—from timeless classics to the latest bestsellers.
            </p>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src={banner} 
              alt="New Book Releases" 
              className="rounded-lg shadow-2xl w-7/10 max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
