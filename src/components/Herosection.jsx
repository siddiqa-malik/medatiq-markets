import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";


export const Hero = () => {
  const [traders, setTraders] = useState([]);

  useEffect(() => {
    fetch("/traders.json")
      .then((res) => res.json())
      .then((data) => {
        setTraders(data.weekly.slice(0, 4));
      })
      .catch((err) => console.error("Error loading traders:", err));
  }, []);

  return (
    <section style={
      {}
    } className=" relative w-full h-auto pt-30 flex mt-5 md:mt-30 items-start lg:items-center overflow-hidden mb-15 sm:mb-35">
      
      {/* Hero background gradient */}
      


      {/* Content Container */}
      <div className="relative  w-full max-w-5x1 mx-auto px-4 sm:px-6 lg:px-8 text-black flex flex-col justify-center items-center ">
        <div className="relative  w-full max-w-5xl mx-auto text-center  flex  justify-center items-center sm:items-start gap-10 mb-5 sm:mb-15 lg:mb-15">
        <div className="max-w-2xl sm:max-w-full space-y-5 sm:space-y-6">
          
          <h1 className="text-5xl md:text-5xl mb-10 lg:text-7xl font-medium bg-gradient-to-r from-black to-amber-500 bg-clip-text text-transparent">
           Trade with Confidence
 <br />
          <span className="block text-center">Built on Transparency</span> 
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl font-normal  leading-relaxed max-w-full">
           <span className="block text-center ">Unlock new opportunities with MEDATIQ Markets, a cutting-edge trading platform that empowers you to trade forex, gold, silver, and more. Join our community of traders and start achieving your financial goals today.</span>
          </p>
</div>  </div>    
      
      
       

<div className="flex  flex-col sm:flex-row  items-center">
<button 
              onClick={() => alert("Welcome to your Premier vehicles profile!")}
              className=" px-9 py-3 text-xl bg-[#001D30] text-white/80 hover:text-white border border-balck/80 rounded-full cursor-pointer"
            >
              Start now
            </button>
        

    <div className="flex items-center gap-4  p-4">
      {/* Overlapping Circles Container */}
      <div className="flex items-center -space-x-7 isolation-auto">
        {traders.map((trader, index) => (
          <div
            key={trader.rank}
            className="relative"
            style={{ zIndex: index + 1 }}
          >
            <img
              src={trader.image}
              alt={trader.name}
              className="w-12 h-12 rounded-full border-[3px] border-white object-cover shadow-sm bg-gray-200"
            />
          </div>
        ))}
      </div>

      {/* Right Side Text */}
      <div className="flex items-center text-md sm:text-lg font-medium tracking-tight">
        <span className="text-[#F1A638] font-bold mr-1.5">5M+</span>
        <span className="text-[#1A1A1A]">Trusted Traders</span>
      </div>
    </div>


    
    </div></div>
       
     
    </section>
  );
};
