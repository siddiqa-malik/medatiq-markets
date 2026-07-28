import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import {marketData} from "../assets/Data/marketData"


export function LiveMarketOverview() {
  return (
    <section className="bg-[#011625] text-white mb-8  py-16 px-4 font-sans">
      <div className="container mx-auto">
        {/* Header Content */}
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">Live Market Overview</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-4xl leading-relaxed">
            Maximize your trading potential with our advanced tools and expert insights. Achieve your goals with measurable performance and intuitive interfaces.
          </p>
        </div>

        {/* Currency Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {marketData.map((item, index) => (
            <div key={index} className="bg-white text-gray-900 p-5 rounded-2xl shadow-sm flex flex-col justify-between min-h-[170px]">
              
              {/* Top Row: Icon, Symbol, Tag, and Arrow */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={item.icon} alt={item.symbol} className="w-8 h-8 xl:w-10 xl:h-10 object-contain" />
                  <span className="font-semibold text-gray-800 text-sm">{item.symbol}</span>
                  <span className="text-[10px] bg-gray-800 text-white px-2 py-0.5 rounded font-medium opacity-80">
                    {item.label}
                  </span>
                </div>
                {/* Round Arrow Button */}
                <button className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                  <FiArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Row: Price, Percentage, and Mini Graph */}
              <div className="flex items-end justify-between mt-4">
                <div>
                  <div className="text-xl font-bold text-gray-950">{item.price}</div>
                  <div className="text-xs font-semibold text-emerald-600 mt-0.5">{item.change}</div>
                </div>
                {/* Sparkline / Mini Chart */}
                <div className="w-30 h-20 md:w-20 md:h-20 xl:w-30 xl:h-20 flex items-center justify-end">
                  <img src={item.chart} alt="trend" className="w-full h-full object-contain" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LiveMarketOverview;