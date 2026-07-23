import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import bgImage from "../assets/bgImage.png"

// Swiper styles ko import karein
import 'swiper/css';
import 'swiper/css/pagination';

 function TradingSection() {
  // Cards ka data array
  const tradingCards = [
    {
      id: 1,
      title: "Forex Trading",
      image: "https://unsplash.com", // Apni image se replace karein
    },
    {
      id: 2,
      title: "Gold Trading",
      image: "https://unsplash.com",
    },
    {
      id: 3,
      title: "Silver Trading",
      image: "https://unsplash.com",
    },
    {
      id: 4,
      title: "Commodities",
      image: "https://unsplash.com",
    },
  ];

  return (
    <section 
      className="relative min-h-[600px] lg:h-[85vh] w-full bg-cover bg-center flex items-center py-16 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }} // Main background image (tablet/dashboard wali)
    >
      {/* Dark Overlay taake text aur cards bilkul clear dikhein */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* Main Grid Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-1 gap-8 items-center">
        
        {/* Left Side Content (Heading, Paragraph, Button) */}
        <div className=" flex flex-col justify-center text-white space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Comprehensive Trading Solutions For All
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed">
            Access global markets including forex, gold, silver, and commodities powered by MT5 advanced tools, secure execution, and real-time trading insights.
          </p>
          <div>
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 text-sm shadow-lg">
              View all
            </button>
          </div>
        </div>

        {/* Right Side Cards Slider (Swiper) */}
        <div className=" w-full relative trading-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ 
              clickable: true,
              dynamicBullets: false
            }}
            breakpoints={{
              480: { slidesPerView: 1.8 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 2.3 },
            }}
            className="pb-16" // Pagination dots ke liye space
          >
            {tradingCards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="relative group aspect-[3/4] rounded-[24px] overflow-hidden border-2 border-transparent hover:border-white transition-all duration-300 shadow-2xl cursor-pointer">
                  {/* Card Background Image */}
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Card Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Card Title */}
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <h3 className="text-white font-medium text-lg md:text-xl tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default TradingSection;