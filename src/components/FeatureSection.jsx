import React from 'react';

import ficon1 from "../assets/ficon1.png"
import ficon2 from "../assets/ficon2.png"
import ficon3 from "../assets/ficon3.png"
import ficon4 from "../assets/ficon4.png"

// Card ka reuseable data array
const features = [
  {
    icon: ficon1,
    title: "Advanced MT5 Trading Tools & Analytics",
    description: "Gain professional charting tools, real-time analysis, and MT5 indicators to support informed trading decisions across forex, gold, and silver with precision and clarity."
  },
  {
    icon: ficon2,
    title: "Secure & Transparent Trading Environment",
    description: "Your funds and data are protected by advanced security. MEDATIQ ensures transparent trading with strong risk management and competitive pricing."
  },
  {
    icon: ficon3,
    title: "Ultra-low Latency Execution",
    description: "Enjoy ultra-fast order execution, reducing slippage and boosting efficiency. Trade forex instantly with zero delays or performance lags."
  },
  {
    icon: ficon4,
    title: "Global Access – Trade from Anywhere",
    description: "Access MEDATIQ Markets via MT5 on desktop, mobile, or web browser. Your positions across all markets sync in real time across every device."
  }
];

 function FeaturesSection() {
  return (
    <section className="container py-16 px-4 mx-auto font-sans lg:py-14 lg:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <h2 className="text-3xl lg:text-5xl font-semibold text-black mb-4">
          Key Features of MEDATIQ Markets
        </h2>
        <p className="text-black/80 text-sm lg:text-md ">
          Access professional analytics and trading tools within a secure, transparent environment with ultra-low latency execution and global access to forex, gold, silver, and more, anytime, anywhere.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-2 lg:p-9 border border-black/45 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 lg:min-h-[280px] lg:justify-center"
          >
            {/* Icon Wrapper */}
            <div className="w-13 h-13 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 mb-6\">
              <img src={feature.icon} alt={feature.title} className="w-7 h-7 object-contain" />
            </div>
            
            {/* Content */}
            <h3 className="text-black w-[200px] lg:w-full font-semibold mb-3 text-base flex items-center justify-center">
              {feature.title}
            </h3>
            <p className="text-black/80 text-xs w-[200px] lg:w-full leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default  FeaturesSection;