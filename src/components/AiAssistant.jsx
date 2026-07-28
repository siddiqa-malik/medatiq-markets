import React from 'react';
import laptop from "../assets/laptop.png"
function AIAssistantSection() {
  return (
    <section className=" py-16 px-4 container  mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image Column */}
        <div className="flex justify-center order-2 lg:order-1">
          <img 
            src={laptop} // Apni laptop image ka path yahan dalein
            alt="Intelligent Trading Assistant Interface" 
            className="w-full max-w-xl h-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Right Side: Content Column */}
        <div className="flex flex-col space-y-6 order-1 lg:order-2 text-center sm:text-left max-w-xl mx-auto lg:mx-0">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
            Meet Your 24/7 Intelligent Trading Assistant
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Never trade alone. Ask anything, anytime, your intelligent assistant delivers instant answers, live market updates, and seamless trading support across forex, gold, and silver.
          </p>
          
          {/* Action Button */}
          <div className="pt-2">
            <button className="bg-[#031b2e] hover:bg-[#062944] text-white font-medium text-sm py-3 px-6 rounded-full shadow-sm transition-colors duration-200">
              Chat now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
export default AIAssistantSection;
