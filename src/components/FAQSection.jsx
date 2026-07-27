import React, { useState } from "react";
import {faqData} from "../assets/Data/faqData";

const FAQSection = () => {
  // Sirf EK index track karte hain jo khula hai.
  // Naya item click hone par usi ko openIndex bana dete hain,
  // isliye pehla khud-ba-khud band ho jata hai (single-open logic).
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="container py-20 px-4  lg:px-6">
      <div className=" mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c1c24] mb-4">
            FAQ
          </h2>
          <p className="text-gray-600 text-sm md:text-xl leading-relaxed max-w-5xl mx-auto">
            Explore our FAQ section to find quick answers to common questions
            about trading, withdrawals, account setup, security, and more —
            so you can trade with confidence and ease.
          </p>
        </div>

        {/* Accordion - dynamically render hota hai faqData se */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#0c1c24] text-sm lg:text-lg md:text-base">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center text-3xl text-[#0c1c24] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer - height animate karne ke liye grid-rows trick */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-black/80 text-sm lg:text-lg leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 bg-[#021d30] rounded-3xl px-6 py-10 text-center lg:px-8 lg:py-12">
          <div className="flex justify-center -space-x-3 mb-5">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Support team member"
              className="w-10 h-10 rounded-full border-2 border-[#021d30] object-cover"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Support team member"
              className="w-10 h-10 rounded-full border-2 border-[#021d30] object-cover"
            />
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Support team member"
              className="w-10 h-10 rounded-full border-2 border-[#021d30] object-cover"
            />
          </div>

          <h3 className="text-white font-semibold text-lg md:text-xl mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-400 text-sm xl:text-lg mb-6">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>

          <button className="border border-white text-white text-sm xl:text-lg font-medium px-8 py-3 rounded-full hover:bg-white hover:text-[#021d30] transition-all duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;