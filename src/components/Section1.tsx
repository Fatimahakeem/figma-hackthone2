import React from 'react'
import Image from 'next/image'

const Section1 = () => {
  return (
    <div  className="w-full h-auto bg-[#FBEBB5] flex flex-col lg:flex-row justify-center items-center">

   {/* Text Section */}
   <div className="flex flex-col items-center md:items-start">
     <h1 className="mt-6 font-medium text-[28px] leading-tight text-center md:text-[60px]">Rocket Single
       <br /> Seater</h1>
     <button className="mt-6 text-base font-medium underline underline-offset-8 hover:text-blue-400 md:text-lg md:ml-24">Shop Now</button>
   </div>

{/* Image Section */}
    <div>
      <Image src="/Single-Seater.png" alt="Sofa" width={700} height={650} loading="lazy" />
    </div>
 </div>
 
  );
}
export default Section1
