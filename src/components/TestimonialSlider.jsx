import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const TestimonialSlider = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Emily W.",
      rating: "4.9",
      img: "https://i.pravatar.cc/150?img=32",
      text: "I've seen remarkable growth in my trading portfolio since I joined Medatiq Markets. Their platform is intuitive, and the support team is exceptional!",
    },
    {
      id: 2,
      name: "Lauren L.",
      rating: "5.0",
      img: "https://i.pravatar.cc/150?img=12",
      text: "Medatiq Market's analytics tool is a game-changer. It helps me understand market trends and optimize my trading strategy.",
    },
    {
      id: 3,
      name: "Michael T.",
      rating: "4.9",
      img: "https://i.pravatar.cc/150?img=18",
      text: "Medatiq Markets boosted my trading with expert insights and advanced tools to achieve my goals.",
    },
    {
      id: 4,
      name: "Sophia M.",
      rating: "5.0",
      img: "https://i.pravatar.cc/150?img=48",
      text: "Has revolutionized my trading with cutting-edge tools and expert analysis. Highly recommended for beginners!",
    },
    {
      id: 5,
      name: "David R.",
      rating: "5.0",
      img: "https://i.pravatar.cc/150?img=55",
      text: "Excellent trading platform with reliable support and amazing market insights.",
    },
  ];

  return (
    <section className="relative w-full  px-3 xl:px-0 py-8 sm:py-16 overflow-hidden lg:overflow-visible">
      <div className=" mx-auto  text-center mb-5 sm:mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0D1B2A]">
          Trading Success Stories
        </h2>

        <p className="mt-5 text-gray-500 max-w-3xl mx-auto">
          Hear from our satisfied clients who've achieved success with MEDATIQ
          Market's expert insights and advanced trading tools.
        </p>
      </div>

      <div className="relative w-full">
        {/* LEFT BUTTON */}

        <button
          onClick={() => swiperRef.current?.slidePrev()}
className="
    absolute
    left-1
    md:left-6
    top-1/2
    -translate-y-1/2
    z-50
    w-10
    h-10
    md:w-12
    md:h-12
    rounded-full
    bg-white
    shadow-md
    border
    border-gray-200
    flex
    items-center
    justify-center
  "        >
          <svg
            className="w-8 h-8"
            fill="black"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* RIGHT BUTTON */}

        <button
          onClick={() => swiperRef.current?.slideNext()}
 className="
    absolute
    right-1
    md:right-6
    top-1/2
    -translate-y-1/2
    z-50
    w-10
    h-10
    md:w-12
    md:h-12
    rounded-full
    bg-white
    shadow-md
    border
    border-gray-200
    flex
    items-center
    justify-center
  "
>        
          <svg
            className="w-8 h-8"
            fill="black"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        
  
  <Swiper
    onBeforeInit={(swiper) => {
      swiperRef.current = swiper;
    }}
    loop={true}
    centeredSlides={false}
    slidesPerView={1}
    spaceBetween={24}
    speed={600}
    className="!overflow-visible"
    breakpoints={{

      // Tablet
      768: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 2,
      },

      // Desktop
      1200: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 32,
      },

    }}
  > <div/>
          {" "}
          {testimonials.map((item) => (
            <SwiperSlide
              key={item.id}
              className="
                w-full
                md:w-auto
                lg:w-[520px]
                py-3
              "
            >
              <div
                className="
                  h-full
                  min-h-[260px]
                  bg-white
                  rounded-[32px]
                  border
                  border-gray-200
                  shadow-sm
                  p-8
                  flex
                  flex-col
                  justify-between
                  transition-all
                  duration-300
                  hover:shadow-lg
                "
              >
                {/* Profile */}

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold text-lg text-[#0D1B2A]">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-yellow-400 text-sm">★★★★★</div>

                      <span className="text-sm font-medium text-gray-500">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review */}

                <p className="text-gray-600 leading-7 text-[15px] flex-grow">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Review Button */}

      <div className="mt-4 sm:mt-14 flex justify-center">
        <button
          className="
            bg-[#021826]
            hover:bg-[#06314a]
            text-white
            px-8
            py-4
            rounded-full
            font-semibold
            transition
          "
        >
          Write a Review
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
