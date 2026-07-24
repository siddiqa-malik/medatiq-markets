import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily W.",
      rating: "4.9",
      img: "https://i.pravatar.cc/150?img=32",
      text:
        "I've seen remarkable growth in my trading portfolio since I joined Medatiq Markets. Their platform is intuitive, and the support team is exceptional!",
    },
    {
      id: 2,
      name: "Lauren L.",
      rating: "5.0",
      img: "https://i.pravatar.cc/150?img=12",
      text:
        "Medatiq Market's analytics tool is a game-changer. It helps me understand market trends and optimize my trading strategy.",
    },
    {
      id: 3,
      name: "Michael T.",
      rating: "4.9",
      img: "https://i.pravatar.cc/150?img=18",
      text:
        "Medatiq Markets boosted my trading confidence with expert insights and advanced tools to achieve my goals.",
    },
    {
      id: 4,
      name: "Sophia M.",
      rating: "5.0",
      img: "https://i.pravatar.cc/150?img=48",
      text:
        "Has revolutionized my trading with cutting-edge tools and expert analysis. Highly recommended for beginners!",
    },
    {
      id: 5,
      name: "David R.",
      rating: "5.0",
      img: "https://i.pravatar.cc/150?img=55",
      text:
        "Excellent trading platform with reliable support and amazing market insights.",
    },
  ];

  // Embla setup: loop enabled
  // containScroll: false — yeh zaroori hai, warna trimSnaps behavior
  // loop ke sath conflict karta hai aur end par khali space dikhata hai
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
    containScroll: false,
  });

  const [prevEnabled, setPrevEnabled] = useState(true);
  const [nextEnabled, setNextEnabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((api) => {
    setPrevEnabled(api.canScrollPrev());
    setNextEnabled(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Previous Arrow
  const PrevArrow = ({ onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
      absolute
      left-0
      md:left-5
      top-1/2
      -translate-y-1/2
      z-10
      w-10
      h-10
      md:w-12
      md:h-12
      bg-white
      rounded-full
      border
      border-gray-200
      shadow-md
      flex
      items-center
      justify-center
      disabled:opacity-40
      "
    >
      ❮
    </button>
  );

  const NextArrow = ({ onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
      absolute
      right-0
      md:right-5
      top-1/2
      -translate-y-1/2
      z-10
      w-10
      h-10
      md:w-12
      md:h-12
      bg-white
      rounded-full
      border
      border-gray-200
      shadow-md
      flex
      items-center
      justify-center
      disabled:opacity-40
      "
    >
      ❯
    </button>
  );

  return (
    <section
      className="
      w-full
      
      py-10
      md:py-16
      overflow-x-hidden
      "
    >
      {/* Heading Section */}
      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        text-center
        mb-10
        md:mb-14
        "
      >
        <h2
          className="
          text-3xl
          md:text-5xl
          font-bold
          text-[#0D1B2A]
          "
        >
          Trading Success Stories
        </h2>

        <p
          className="
          mt-4
          text-gray-500
          text-sm
          md:text-base
          max-w-3xl
          mx-auto
          leading-relaxed
          "
        >
          Hear from our satisfied clients who've achieved success with
          MEDATIQ Market's expert insights and advanced trading tools.
        </p>
      </div>

      <div
        className="
        relative
        w-full
        mx-auto
        
        "
      >
        <div
          className="
          overflow-hidden
          lg:px-[10%]
          xl:px-[14%]
          "
          ref={emblaRef}
        >
          <div className="flex">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="
                px-2
                flex-[0_0_100%]
                sm:flex-[0_0_50%]
                lg:flex-[0_0_50%]
                "
              >
                <div
                  className="
                  bg-white
                  border
                  border-gray-200
                  rounded-[28px]
                  p-6
                  md:p-8
                  min-h-[260px]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-lg
                  "
                >
                  {/* Profile Section */}
                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    mb-6
                    "
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="
                      w-14
                      h-14
                      rounded-full
                      object-cover
                      border
                      border-gray-100
                      "
                    />

                    <div>
                      <h3
                        className="
                        text-lg
                        font-bold
                        text-[#0D1B2A]
                        "
                      >
                        {item.name}
                      </h3>

                      <div
                        className="
                        flex
                        items-center
                        gap-2
                        mt-1
                        "
                      >
                        <div
                          className="
                          flex
                          text-yellow-400
                          text-sm
                          "
                        >
                          ★★★★★
                        </div>

                        <span
                          className="
                          text-sm
                          text-gray-500
                          font-medium
                          "
                        >
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p
                    className="
                    text-gray-600
                    text-sm
                    md:text-base
                    leading-7
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PrevArrow onClick={scrollPrev} disabled={!prevEnabled} />
        <NextArrow onClick={scrollNext} disabled={!nextEnabled} />
      </div>

      {/* Write Review Button */}
      <div
        className="
        mt-10
        md:mt-14
        flex
        justify-center
        "
      >
        <button
          className="
          bg-[#021826]
          hover:bg-[#06314a]
          text-white
          font-semibold
          px-8
          py-3.5
          rounded-full
          text-sm
          transition
          duration-300
          shadow-md
          "
        >
          Write a Review
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;