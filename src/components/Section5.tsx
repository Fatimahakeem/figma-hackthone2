import React from 'react'
import Image from 'next/image'

const Section5 = () => {
  return (
   <section className="bg-white text-black py-10">
     <div>
       <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center">Our Blog</h1>
       <p className="text-center text-sm sm:text-base md:text-lg mb-8">Find a bright idea to suit your taste with our great selection</p>
     </div>

     <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Blog Post 1 */}
      <div className="text-center">
        <Image src="/Rectangle-13.png" alt="Blog Post 1" width={230} height={250} className="object-contain mx-auto" />
        <p className="text-sm sm:text-base mt-2">Going all-in with millennial design</p>
        <a href="#" className="underline underline-offset-8 font-semibold text-sm sm:text-base mb-4 block">Read More</a>
        <div className="flex justify-center gap-3 text-xs sm:text-sm mt-3">
          <span>⏰ 5 mins</span>
          <span>📅 {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Blog Post 2 */}
      <div className="text-center">
        <Image src="/Rectangle-14.png" alt="Blog Post 2" width={230} height={250} className="object-contain mx-auto" />
        <p className="text-sm sm:text-base mt-2">Going all-in with millennial desig</p>
        <a href="#" className="underline underline-offset-8 font-semibold text-sm sm:text-base mb-4 block">Read More</a>
        <div className="flex justify-center gap-3 text-xs sm:text-sm mt-3">
          <span>⏰ 5 mins</span>
          <span>📅 {new Date().toLocaleDateString()}</span>
        </div>
       </div>

      {/* Blog Post 3 */}
       <div className="text-center">
         <Image src="/Rectangle-15.png" alt="Blog Post 3" width={230} height={250} className="object-contain mx-auto "/>
         <p className="text-sm sm:text-base mt-2">Going all-in with millennial desig</p>
         <a href="#" className="underline underline-offset-8 font-semibold text-sm sm:text-base mb-4 block">Read More</a>
         <div className="flex justify-center gap-3 text-xs sm:text-sm mt-3">
          <span>⏰ 5 mins</span>
          <span>📅 {new Date().toLocaleDateString()}</span>
         </div>
       </div>
    </div>

    {/* View All Posts Button */}
    <div className="text-center mt-8">
      <a href="/blog" className="underline underline-offset-8 text-sm sm:text-base font-semibold">View All Post</a>
    </div>
  </div>
</section>

  )
}

export default Section5