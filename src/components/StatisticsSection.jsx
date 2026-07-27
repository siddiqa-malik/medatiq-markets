import StatisticsChart from "./StatisticsChart";
import {stats} from "../assets/Data/statisticsData"

const StatisticsSection = () => {

  


  return (

    <section className="px-4 md:px-8 py-8 lg:py-16">


<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center">

        {/* LEFT CONTENT */}

        <div>


          <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight lg:mt-0">
            Real-Time Platform Statistics
          </h2>

          <p className="mt-6 text-black/80 leading-8 max-w-lg lg:max-w-2xl">
            Monitor total trade volume and executions in the last 24 hours.
            Get a real-time view of live market activity on the platform.
            All statistics update dynamically and can easily be connected
            with an API in the future.
          </p>

        </div>

      



        {/* Chart */}

        <div className="w-full lg:pl-4">

          <StatisticsChart />

        </div>

</div>
    


    </section>

  );
};


export default StatisticsSection;