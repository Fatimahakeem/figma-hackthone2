import React from 'react'
import Image from 'next/image'

const Section3 = () => {
  return (
    <section className="bg-white text-black py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Top Picks For You</h2>
        <p className="text-gray-500 text-sm md:text-lg mb-8">Find a bright ideal to suit your taste with our great 
          selection of suspension, floor, and table lights.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Product 1 */}
      <div className="text-center">
        <Image src="/Mask-group1.png" alt="Product 1" width={250} height={280} className="object-contain mx-auto"/>
        <h3 className="text-sm md:text-base font-semibold mt-2">
          Trenton modular sofa_3</h3>
        <p className="text-base md:text-lg font-bold">Rs. 25,000.00</p>
      </div>
      {/* Product 2 */}
      <div className="text-center">
        <Image src="/Mask-group2.png" alt="Product 2" width={250} height={250} className="object-contain mx-auto "/>
        <h3 className="text-sm md:text-base font-semibold mt-2">Granite dining table with dining chai</h3>
        <p className="text-base md:text-lg font-bold">Rs. 25,000.00</p>
      </div>
      {/* Product 3 */}
      <div className="text-center">
        <Image src="/Mask-group3.png" alt="Product 3" width={250} height={250} className="object-contain mx-auto" />
        <h3 className="text-sm md:text-base font-semibold mt-2"> Outdoor bar table and stoo</h3>
        <p className="text-base md:text-lg font-bold">Rs. 25,000.00</p>
      </div>
      {/* Product 4 */}
      <div className="text-center">
        <Image src="/Mask-group4.png" alt="Product 4" width={250} height={250} className="object-contain mx-auto" />
        <h3 className="text-sm md:text-base font-semibold mt-2">Plain console with teak mirro</h3>
        <p className="text-base md:text-lg font-bold">Rs. 25,000.00</p>
      </div>
    </div>
    <div className="mt-6">
      <a href="#" className="text-center underline text-sm md:text-base">View More</a>
    </div>
  </div>
</section>


  );
}

export default Section3