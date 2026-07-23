import React from "react";
import DownloadCard from "./DownloadCard";
import {downloadData} from "../assets/Data/downloadData";


const DownloadSection =()=>{


return(

<section className="py-16 px-5">


<div
className="
container mx-auto grid lg:grid-cols-1 xl:grid-cols-2 gap-20 items-center">


{/* Left */}

<div>


<h1
className="text-3xl md:text-5xl font-semibold text-[#111827]">

Your Greatest Assets is your
<br/>
Earning Potential.

</h1>


<p className="mt-5 text-gray-600 max-w-lg leading-7">

Access your trading account anytime, anywhere.
Trade online seamlessly on web, mobile, and desktop
platforms, ensuring flexibility and convenience for all traders.

</p>


<button
className="
mt-8
bg-[#002337]
text-white
px-10
py-3
rounded-full
"
>

Download now

</button>


</div>




{/* Cards */}

<div
className="
xl:space-y-5
space-y-2
"
>



{
downloadData.map((item,index)=>(


<div
key={item.id}
className={`
${index===0 ? "lg:translate-x-15":""}
${index===1}? "w-2xl h-auto
${index===2 ? "lg:translate-x-5":""}
`}
>


<DownloadCard data={item}/>


</div>


))
}


</div>



</div>


</section>

)

}


export default DownloadSection;