import React from 'react';



export default function DownloadSection() {
  return (
    <div className="container flex items-center justify-center  p-6 mb-6 lg:mt-14 md:py-16 lg:py-20 font-sans">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 lg:max-w-7xl lg:mx-auto">
        
        {/* Left Content */}
        <div className="max-w-2xl text-center  sm:text-left space-y-8 lg:w-[55%] xl:w-[88%] g:pr-6 lg:self-start">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight">
            Your Greatest Assets is your Earning Potential.
          </h1>
          <p className="text-black/80 text-sm md:text-base  leading-relaxed">
Access your trading account anytime, anywhere. Trade online seamlessly on web, mobile, and desktop platforms, ensuring flexibility and convenience for all traders.          </p>
          <button className="bg-[#00130d] text-white font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-sm">
            Download now
          </button>
        </div>

        {/* Right Download Cards */}
        <div className="w-full max-w-3xl space-y-4 flex flex-col items-center lg:w-[85%] lg:items-stretch">
          
          {/* Android Card */}
          <div className="w-full lg:w-[83%] lg:ml-8 lg:ml-18 xl:ml-16 bg-gradient-to-t from-[#001D30]/10 to-[#001D30] p-[1px] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-full bg-amber-50 xl:gap-30 gap-2 md:gap-80 lg:gap-8 rounded-[calc(1rem-1px)] p-4 lg:px-6 lg:py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-100 p-2">
                  <img src="/mt5-logo.png" alt="MT5" className="object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2 lg:gap-6">
                    <span className="text-black text-lg lg:text-2xl">↓</span>
                    <h3 className="font-bold lg:font-semibold text-black text-[12px] md:text-base lg:text-base">Download MT5 for Android</h3>
                  </div>
                  <p className="text-[10px] lg:text-xs text-gray-500 pl-5 lg:pl-10">Joined by 20,000+ traders</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xs md:text-xl lg:text-2xl">★★★★★</span>
                <span className="text-xs lg:text-2xl md:text-xl  font-semibold text-gray-700">4.9</span>
              </div>
            </div>
          </div>

          {/* Desktop Card (Featured - Larger on Desktop) */}
          <div className="w-full bg-gradient-to-t from-[#001D30]/10 to-[#001D30] p-[2px] rounded-2xl shadow-md lg:shadow-lg transform hover:scale-[1.02] transition-transform">
            <div className="w-full h-full bg-amber-50 xl:gap-65 gap-2 md:gap-90 lg:gap-14 rounded-[calc(1rem-2px)] p-4 lg:px-6 lg:py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl flex items-center justify-center border border-gray-100 p-2">
                  <img src="/mt5-logo.png" alt="MT5" className="object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2 lg:gap-6">
                    <span className="text-black text-lg lg:text-2xl">↓</span>
                    <h3 className="font-bold lg:font-semibold text-black text-[12px] md:text-base lg:text-lg">Get MT5 for Desktop</h3>
                  </div>
                  <p className="text-[10px] lg:text-xs text-gray-500 pl-5 lg:pl-10">Trusted by 40,000+ traders</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xs md:text-xl lg:text-2xl">★★★★★</span>
                <span className="text-xs md:text-xl lg:text-2xl font-semibold text-gray-700">5</span>
              </div>
            </div>
          </div>

          {/* iPhone Card */}
          <div className="w-full lg:w-[88%] lg:mr-8 xl:mr-16 lg:ml-6 bg-gradient-to-t from-[#001D30]/10 to-[#001D30] p-[1px] rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full h-full bg-amber-50 xl:gap-30 gap-2 md:gap-80 lg:gap-8 rounded-[calc(1rem-1px)] p-4 lg:px-6 lg:py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-100 p-2">
                  <img src="/mt5-logo.png" alt="MT5" className="object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2 lg:gap-6">
                    <span className="text-black text-lg lg:text-2xl">↓</span>
                    <h3 className="font-bold lg:font-semibold text-black text-[12px] md:text-base lg:text-base">Download MT5 for iPhone</h3>
                  </div>
                  <p className="text-[10px] lg:text-xs text-gray-500 pl-5 lg:pl-10">Trusted by 15,000+ traders</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xs md:text-xl lg:text-2xl">★★★★★</span>
                <span className="text-xs lg:text-2xl md:text-xl font-semibold text-gray-700">5</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
