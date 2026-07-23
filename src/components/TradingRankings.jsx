import React, { useEffect, useState } from "react";

const TradingRankings = () => {
  const [leaderboard, setLeaderboard] = useState(null);
  const [activeTab, setActiveTab] = useState("weekly");

  useEffect(() => {
    fetch("/traders.json")
      .then((res) => res.json())
      .then((data) => {
        setLeaderboard(data);
      })
      .catch((err) => console.error("Error loading traders:", err));
  }, []);

  if (!leaderboard) {
    return (
      <section className="bg-[#021d30] min-h-screen flex items-center justify-center text-white">
        Loading...
      </section>
    );
  }

  const currentTraders = leaderboard[activeTab];

  return (
    <section className="bg-[#021d30] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            {activeTab === "weekly"
              ? "Weekly Trading Performance Rankings"
              : "Monthly Trading Performance Rankings"}
          </h2>

          <p className="mt-4 text-gray-400 max-w-4xl mx-auto text-sm md:text-base">
            A real-time view of top-performing traders on the MEDATIQ
            platform, ranked by Return on Investment (ROI), Profit and trading
            volume across all asset classes including forex, cryptocurrency,
            gold, and silver.
          </p>

          {/* Toggle */}
          <div className="flex justify-center gap-8 mt-10">

            {/* <div className="flex  border border-gray-500 rounded-full overflow-hidden"> */}

              <button
                onClick={() => setActiveTab("weekly")}
                className={`px-8 py-3 text-sm font-medium rounded-full transition-all duration-300
                ${
                  activeTab === "weekly"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10 border border-white"
                }`}
              >
                Weekly
              </button>

              <button
                onClick={() => setActiveTab("monthly")}
                className={`px-8 py-3 text-sm font-medium rounded-full transition-all duration-300
                ${
                  activeTab === "monthly"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10 border border-white"
                }`}
              >
                Monthly
              </button>

            </div>

          {/* </div> */}
        </div>

        {/* Table */}

        <div className="mt-12 overflow-x-auto border border-gray-600 rounded-xl">

          <table className="w-full min-w-[900px]">

            {/* Head */}

            <thead className="bg-white/5">

              <tr className="text-gray-300 text-sm">

                <th className="py-4 px-6 text-left">Rank</th>

                <th className="py-4 px-6 text-left">
                  Trader Alias
                </th>

                <th className="py-4 px-6 text-left">
                  ROI (%)
                </th>

                <th className="py-4 px-6 text-left">
                  Profit (USDT)
                </th>

                <th className="py-4 px-6 text-left">
                  Volume (USDT)
                </th>

                <th className="py-4 px-6 text-left">
                  Country
                </th>

                <th className="py-4 px-6 text-left">
                  Time Period
                </th>

              </tr>

            </thead>

            {/* Body */}

            <tbody>

              {currentTraders.map((trader) => (

                <tr
                  key={trader.rank}
                  className="border-t border-gray-700 hover:bg-white/5 transition"
                >

                  <td className="py-5 px-6 text-gray-300">
                    {trader.rank}
                  </td>

                  <td className="py-5 px-6">

                    <div className="flex items-center gap-3">

                      <img
                        src={trader.image}
                        alt={trader.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      <span className="font-medium">
                        {trader.name}
                      </span>

                    </div>

                  </td>

                  <td className="py-5 px-6 text-green-400 font-semibold">
                    {trader.roi}
                  </td>

                  <td className="py-5 px-6">
                    {trader.profit}
                  </td>

                  <td className="py-5 px-6">
                    {trader.volume}
                  </td>

                  <td className="py-5 px-6">

                    <div className="flex items-center gap-2">

                      <span>{trader.flag}</span>

                      <span>{trader.country}</span>

                    </div>

                  </td>

                  <td className="py-5 px-6 capitalize">
                    {activeTab}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
};

export default TradingRankings;