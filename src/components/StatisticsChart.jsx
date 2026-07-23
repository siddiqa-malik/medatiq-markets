import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {data} from "../assets/Data/statisticsData"


export default function StatisticsChart() {
  return (
    <div className=" sm:max-w-4xl h-auto  mx-auto p-4 sm:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm font-sans">
      {/* Header Section */}
      <div className="mb-3 sm:mb-4">
        <h2 className="text-gray-600 text-sm sm:text-lg font-medium">Today's Trade Execution Summary</h2>
        <div className="flex items-center gap-2 sm:gap-3 mt-1">
          <span className="text-2xl sm:text-3xl font-bold text-gray-900">12,546</span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            ↑ Up 12% from yesterday
          </span>
        </div>
      </div>

      {/* Metrics Labels / Legends */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 border-b border-gray-100 pb-3 sm:pb-4">
        <div>
          <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm text-gray-500 mb-1">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded bg-emerald-600 inline-block"></span>
            Total trade volume
          </div>
          <span className="text-xs sm:text-xl font-bold text-gray-800">$7,546</span>
        </div>
        <div>
          <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm text-gray-500 mb-1">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded bg-amber-500 inline-block"></span>
            Deposit
          </div>
          <span className="text-xs sm:text-xl font-bold text-gray-800">$5,634</span>
        </div>
        <div>
          <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm text-gray-500 mb-1">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded bg-indigo-900 inline-block"></span>
            Withdraw
          </div>
          <span className="text-xs sm:text-xl font-bold text-gray-800">$3,129</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="w-full h-44 sm:h-72">
        <ResponsiveContainer width="100%" h="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              {/* Gradients for smooth background fading */}
              <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#059669" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#059669" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorDeposit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.05}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorWithdraw" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#312e81" stopOpacity={0.05}/>
                <stop offset="95%" stopColor="#312e81" stopOpacity={0}/>
              </linearGradient>
            </defs>

            {/* Grid lines styling */}
            <CartesianGrid vertical={false} stroke="#f3f4f6" />
            
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              dy={10}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              domain={[0, 10000]}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            
            <Tooltip formatter={(value) => [`$${value}`, '']} />

            {/* Area Lines matching the design colors */}
            <Area 
              type="monotone" 
              dataKey="volume" 
              stroke="#059669" 
              strokeWidth={2} 
              fillOpacity={1} 
              fill="url(#colorVolume)" 
            />
            <Area 
              type="monotone" 
              dataKey="deposit" 
              stroke="#f59e0b" 
              strokeWidth={2} 
              fillOpacity={1} 
              fill="url(#colorDeposit)" 
            />
            <Area 
              type="monotone" 
              dataKey="withdraw" 
              stroke="#312e81" 
              strokeWidth={2} 
              fillOpacity={1} 
              fill="url(#colorWithdraw)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
