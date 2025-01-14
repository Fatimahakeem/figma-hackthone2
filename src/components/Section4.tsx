import React from 'react'
import Image from 'next/image'

const Section4 = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center bg-[#FFF9E5] p-4">
  {/* Image Section */}
      <div className="flex justify-center mb-6 md:mb-0">
        <Image src="/Sofa-2.png" alt="sofa" width={600} height={500} loading="lazy" className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] h-auto"/>
      </div>

  {/* Text Section */}
      <div className="flex flex-col justify-center items-center md:ml-10 text-center md:text-left">
        <p className="text-sm md:text-base">New Arrivals</p>
        <h1 className="font-bold text-2xl sm:text-3xl leading-tight">Asgaard sofa</h1>
      <button className="mt-6 p-2 border border-black w-[140px] h-[40px] text-sm flex items-center justify-center">Order No</button>
    </div>
</div>

  )
}

export default Section4