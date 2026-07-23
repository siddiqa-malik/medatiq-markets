import React from 'react';
import domain from "../assets/Domain.png"
import analytics from "../assets/analytics.png"

// Card ka reuseable data array
const features = [
  {
    icon: "/path-to-your-icon1.svg", // Apne icon ka path yahan dalein
    title: "Advanced MT5 Trading Tools & Analytics",
    description: "Gain professional charting tools, real-time analysis, and MT5 indicators to support informed trading decisions across forex, gold, and silver with precision and clarity."
  },
  {
    icon: "/path-to-your-icon2.svg",
    title: "Secure & Transparent Trading Environment",
    description: "Your funds and data are protected by advanced security. MEDATIQ ensures transparent trading with strong risk management and competitive pricing."
  },
  {
    icon: "/path-to-your-icon3.svg",
    title: "Ultra-low Latency Execution",
    description: "Enjoy ultra-fast order execution, reducing slippage and boosting efficiency. Trade forex instantly with zero delays or performance lags."
  },
  {
    icon: "/path-to-your-icon4.svg",
    title: "Global Access – Trade from Anywhere",
    description: "Access MEDATIQ Markets via MT5 on desktop, mobile, or web browser. Your positions across all markets sync in real time across every device."
  }
];

 function FeaturesSection() {
  return (
    <section className=" container py-16 px-4  mx-auto font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Key Features of MEDATIQ Markets
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Access professional analytics and trading tools within a secure, transparent environment with ultra-low latency execution and global access to forex, gold, silver, and more, anytime, anywhere.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col  items-center text-center p-2 border border-black/45 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Icon Wrapper */}
            <div className="w-13 h-13 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 mb-6">
              <img src={feature.icon} alt={feature.title} className="w-7 h-7 object-contain" />
            </div>
            
            {/* Content */}
            <h3 className="text-gray-900 w-[200px] font-semibold text-base mb-3 min-h-[30px] flex items-center justify-center">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-xs w-[300px] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default  FeaturesSection;