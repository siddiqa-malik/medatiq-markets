import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import bgImage from "../assets/bgImage.png";
import Rectangle5 from "../assets/Rectangle 5.png";
import Rectangle6 from "../assets/Rectangle 6.png";
import Rectangle7 from "../assets/Rectangle 7.png";
import tradingImg from "../assets/tradingimg.webp";

import 'swiper/css';
import 'swiper/css/pagination';


function TradingSection() {

  const [activeIndex, setActiveIndex] = useState(0);


  const tradingCards = [
    {
      id: 1,
      title: "Forex Trading",
      image: Rectangle5,
    },
    {
      id: 2,
      title: "Gold Trading",
      image: Rectangle6,
    },
    {
      id: 3,
      title: "Silver Trading",
      image: Rectangle7,
    },
    {
      id: 4,
      title: "Commodities",
      image: tradingImg,
    },
    {
      id: 5,
      title: "Crypto Trading",
      image: Rectangle5,
    },
    {
      id: 6,
      title: "Indices Trading",
      image: Rectangle6,
    },
  ];


  return (

    <section
      className="
      relative
      
      w-full
      bg-cover
      bg-center
      flex
      items-center
      py-2
      overflow-hidden
      "
      style={{
        backgroundImage:`url(${bgImage})`
      }}
    >


      <div className="absolute inset-0 bg-black/75 z-0"></div>



      <div
        className="
        relative
        z-10
        w-full
        max-w-[1400px]
        
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-1
        gap-15
        "
      >


        {/* CONTENT */}

        <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left mt-30 text-white sm:ml-5 sm:ml-0 space-y-6 lg:max-w-7xl">

          <h2 className="
          text-3xl
          md:text-5xl
          font-bold
          leading-tight
          ">
            Comprehensive Trading Solutions For All
          </h2>


          <p className="
          text-gray-300
          text-base
          md:text-2xl
          max-w-7xl
          ">
            Access global markets including forex, gold, silver, and commodities powered by MT5 advanced tools, secure execution, and real-time trading insights.
          </p>


          <button
          className="
          bg-white
          text-black
          w-fit
          xl:px-18
          px-9

          xl:py-4
          sm:py-4
          py-3

          rounded-full
          font-semibold
          "
          >
            View all
          </button>


        </div>





        {/* SLIDER */}

        <div className="w-full lg:w-[68%] xl:w-[77%] lg:ml-auto py-10 mb-15 lg:justify-self-end relative px-4 xl:px-10 overflow-hidden trading-slider">


          <style>
            {`

            .trading-slider .swiper-slide{
              transition: transform .5s ease, opacity .5s ease;
              transform:scale(.85);
              opacity:.7;
            }


            .trading-slider .swiper-slide-active{
              transform:scale(1.02);
              opacity:1;
              z-index:10;
            }


            .trading-slider .swiper{
              overflow:visible;
            }


            .trading-slider .swiper-pagination-bullet{
              background:white;
            }


            `}
          </style>



          <Swiper

            modules={[Pagination,Autoplay]}

            spaceBetween={16}

            loop={true}

            slidesPerView={1.8}

            autoplay={{
              delay:3000,
              disableOnInteraction:false
            }}


            onSlideChange={(swiper)=>{

              setActiveIndex(swiper.realIndex);

            }}


            pagination={{
              clickable:true
            }}


            breakpoints={{

              480:{
                slidesPerView:2,
                spaceBetween:12
              },


              768:{
                slidesPerView:2.5,
                spaceBetween:14
              },


              1024:{
                slidesPerView:3,
                spaceBetween:2
              }


            }}


            className="pb-20 !overflow-visible"

          >



          {
            tradingCards.map((card,index)=>(


              <SwiperSlide key={card.id}>


                <div

                className={`
                
                trading-card
                relative
                group
                aspect-[3/4]
                max-h-[45vh]
                rounded-[24px]
                overflow-hidden
                transition-all
                duration-300
                shadow-2xl
                cursor-pointer
                

                ${
                  activeIndex === index
                  ?
                  "border-2 border-white"
                  :
                  "border-2 border-transparent"
                }

                `}

                >


                  <img
                  src={card.image}
                  alt={card.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                  "
                  />



                  <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                  "
                  />



                  <div
                  className="
                  absolute
                  bottom-6
                  left-0
                  right-0
                  text-center
                  "
                  >

                    <h3
                    className="
                    text-white
                    font-medium
                    text-lg
                    md:text-xl
                    "
                    >
                      {card.title}
                    </h3>

                  </div>



                </div>



              </SwiperSlide>


            ))
          }



          </Swiper>



        </div>


      </div>


    </section>


  );

}


export default TradingSection;