import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Image from 'next/image';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import Header from '@/components/Header';
const Contactpage = () => {
  return (
    <div>
      {/* section 1 */}
      <Header />
      <div className="bg-[url('/shopImages/Rectangle-1.png')] bg-cover bg-center w-full h-52 flex flex-col justify-center items-center">
        <div className='flex flex-col items-center'>
          <Image src="/shopImages/Meubel House_Logos-05.png" alt='logo' width={34} height={34} loading='lazy' />
          <h1 className='font-semibold text-[38px]'>Contact</h1>
        </div>
        <div className='flex text-sm gap-1 mt-1'>
          <p className='font-semibold'>Home</p>
          <FaAngleRight className='mt-1' />
          <p>Contact</p>
        </div>
      </div>

      {/* section 3 get in touch */}
      <div className='flex flex-col justify-center items-center mt-12'>
        <h1 className='font-semibold text-2xl sm:text-3xl'>Get In Touch With Us</h1>
        <p className='text-sm text-[#9F9F9F] px-8 sm:px-0 mt-4 sm:mt-0 text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>

      {/* contact us */}
      <div className='flex md:flex-row flex-col items-center justify-center gap-12'>
        <section className='md:w-[35%] w-screen flex flex-col items-center'>
          {/* section 1 */}
          <div className='mt-14'>
            <div className='flex items-center gap-5'>
              <FaLocationDot size={16} />
              <h1 className='font-semibold text-2xl'>Address</h1>
            </div>
            <p className='text-sm ml-9'>236 5th SE Avenue, New <br />York NY10000, United <br /> States</p>
          </div>

          {/* section 2 */}
          <div className='mt-6'>
            <div className='flex items-center gap-5'>
              <FaPhoneAlt size={16} />
              <h1 className='font-semibold text-2xl'>Phone</h1>
            </div>
            <p className='text-sm ml-9'>Mobile: +(84) 546-6789 <br />
              Hotline: +(84) 456-6789</p>
          </div>

          {/* Section 3 */}
          <div className='mt-6'>
            <div className='flex items-center gap-4'>
              <MdWatchLater size={18} />
              <h1 className='font-semibold text-2xl'>Working Time</h1>
            </div>
            <p className='text-sm ml-9'>Monday-Friday: 9:00 - <br />  22:00
              <br />Saturday-Sunday: 9:00 - <br />21:00</p>
          </div>
        </section>

        {/* form */}

        <section className='md:w-[40%] w-screen pl-8'>
          <div className='md:ms-0 ms-8 mt-16'>
            <p className='pb-4 font-medium text-lg'>Your name</p>
            <input type="text" placeholder="Abc" className='border border-[#9F9F9F] rounded-lg w-[80%] h-12 text-sm pl-5' />
          </div>

          <div className='md:ms-0 ms-8 mt-4'>
            <p className='pb-4 font-medium text-lg'>Email address</p>
            <input type="text" placeholder="Abc@def.com" className='border border-[#9F9F9F] rounded-lg w-[80%] h-12 text-sm pl-5' />
          </div>

          <div className='md:ms-0 ms-8 mt-4'>
            <p className='pb-4 font-medium text-lg'>Subject</p>
            <input type="text" placeholder="This is an optional" className='border border-[#9F9F9F] rounded-lg w-[80%] h-12 text-sm pl-5' />
          </div>

          <div className='md:ms-0 ms-8 mt-4'>
            <p className='pb-4 font-medium text-lg'>Message</p>
            <textarea placeholder='Hi! i’d like to ask about'
              className='border border-[#9F9F9F] rounded-lg w-[80%] h-24 text-sm pl-5 pt-4'>
            </textarea>
          </div>

          <button className='border border-black rounded-lg text-sm text-center h-8 w-[72%] lg:w-44 mt-8 lg:mt-4 mb-8 ml-8 md:ml-0'>Submit</button>
        </section>
      </div>

      {/* last Section */}
      <section className="bg-[#FAF4F4] flex md:flex-row flex-col items-center gap-8 md:gap-0 py-16 justify-evenly">
        <div className="flex flex-col">
          <h2 className="text-black font-medium text-2xl lg:text-3xl">Free Delivery</h2>
          <p className="text-sm xl:text-lg text-[#9F9F9f]">For all orders over $50, consectetur <br /> adipim scing elit.</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-black font-medium text-2xl lg:text-3xl">90 Days Return</h2>
          <p className="text-sm xl:text-lg text-[#9F9F9f]">If goods have problems, consectetur <br /> adipim scing elit..</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-black text-2xl lg:text-3xl font-medium">Secure Payments</h2>
          <p className="text-sm xl:text-lg text-[#9F9F9F]">100% secure payments, consectetur <br /> adipim scing elit.</p>
        </div>
      </section>
    </div>

  );
}

export default Contactpage