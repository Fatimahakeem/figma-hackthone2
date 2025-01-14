import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (
    <div className="flex flex-wrap justify-center w-full h-auto bg-[#FAF4F4] p-4 md:h-[400px]">
  {/* First Item */}
      <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] mb-8 md:mb-0">
        <Image src="/chair.png" alt="chair" width={300} height={350} loading="lazy" className="ml-0 sm:ml-10 max-w-full"/>
        <div className="text-center sm:text-left mt-4 sm:ml-5">
          <h1 className="font-medium text-lg sm:text-2xl font-serif">Side table</h1>
          <p className="underline underline-offset-4 font-medium mt-2">view more</p>
        </div>
      </div>

  {/* Second Item */}
      <div className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%]">
        <Image src="/sofa.png" alt="chair" width={280} height={240} loading="lazy" className="ml-0 sm:ml-10 max-w-full"/>
        <div className="text-center sm:text-left mt-4 sm:ml-10">
          <h1 className="font-medium text-lg sm:text-2xl font-serif">Side table</h1>
          <p className="underline underline-offset-4 font-medium mt-2">view more</p>
        </div>
      </div>
    </div>

  )
}

export default Section2