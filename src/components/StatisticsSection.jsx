import StatisticsChart from "./StatisticsChart";
import {stats} from "../assets/Data/statisticsData"

const StatisticsSection = () => {

  


  return (

    <section className=" px-4 md:px-8 py-8">


<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

        {/* LEFT CONTENT */}

        <div>


          <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#111827] leading-tight">
            Real-Time
            <br />
            Platform Statistics
          </h2>

          <p className="mt-6 text-[#6B7280] leading-8 max-w-lg">
            Monitor total trade volume and executions in the last 24 hours.
            Get a real-time view of live market activity on the platform.
            All statistics update dynamically and can easily be connected
            with an API in the future.
          </p>

        </div>

      



        {/* Chart */}

        <div className="w-full">

          <StatisticsChart />

        </div>

</div>
    


    </section>

  );
};


export default StatisticsSection;