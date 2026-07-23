import React from "react";
import { Download } from "lucide-react";


const DownloadCard = ({data}) => {


return (

<div
className="
w-full
h-24
border
border-[#122c42]
rounded-xl
bg-[#fff8eb]
flex
items-center
justify-between
px-5
"
>


<div className="flex items-center gap-4">


<img
src={data.image}
className="
w-10
h-10
object-contain
"
/>


<Download size={20}/>


<div>

<h3 className="
text-black
text-sm
font-medium
">
{data.title}
</h3>


<p className="
text-gray-400
text-xs
">
{data.subtitle}
</p>

</div>


</div>



<div className="text-yellow-500 text-sm">

★★★★★

<span className="text-black ml-2">
{data.rating}
</span>

</div>



</div>

)

}


export default DownloadCard;