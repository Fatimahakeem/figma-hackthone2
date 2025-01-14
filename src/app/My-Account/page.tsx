import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6";
import Header from '@/components/Header';

const Accountpage = () => {
  return (
    <div>
      {/*Sectin 1 */}
      <Header />
      <div className="bg-[url('/shopImages/Rectangle-1.png')] bg-cover bg-center w-full h-52 flex flex-col justify-center items-center">
        <div className='flex flex-col items-center'>
          <Image src="/shopImages/Meubel House_Logos-05.png" alt='logo' width={34} height={34} loading='lazy' />
          <h1 className='font-semibold text-[38px]'>My Account</h1>
        </div>
        <div className='flex text-sm gap-1 mt-1'>
          <p className='font-semibold'>Home</p>
          <FaAngleRight className='mt-1' />
          <p>My account</p>
        </div>
      </div>

      {/*Section 2 */}
      <div className='flex md:flex-row flex-col items-center justify-center gap-2'>
        {/* login */}
        <div className='w-full md:w-[40%] mt-6 px-12 md:px-0 md:pl-32 md:py-20'>
          <h1 className='font-bold text-3xl mt-4'>Log in</h1>
          <form>
            <div className='mt-5'>
              <p className='pb-3 text-lg font-semibold'>User name or email address</p>
              <input type="email" className='border border-[#9F9F9F] rounded-md h-12 w-[80%]' />
            </div>

            <div className='mt-5'>
              <p className='pb-3 text-lg font-semibold'>Password</p>
              <input type="password" className='border border-[#9F9F9F] rounded-md h-12 w-[80%]' />
            </div>

            <div className='mt-6 flex gap-3'>
              <input type="checkbox" className='h-5 w-5' />
              <p className=' text-sm font-semibold'>Remember me</p>
            </div>

            <div className='mt-6 flex gap-3'>
              <button className='border border-black rounded-xl h-12 w-48'>Login</button>
              <p className="text-sm mt-4">Lost Your Password?</p>
            </div>
          </form>
        </div>

        {/* register */}
        <div className='md:w-[40%] md:mt-6 px-12 md:px-0 md:pl-32 py-20'>
          <h1 className='font-bold text-3xl mt-4'>Register</h1>
          <form>
            <div className='mt-5'>
              <p className='text-lg pb-3 font-semibold'>Email address</p>
              <input type="Email" className='border border-[#9F9F9F] rounded-md h-12 w-[80%]' />
            </div>

            <div>
              <p className='text-[16px] mt-5 leading-tight'>A link to set a new password will be sent to your email address.</p>
              <p className='text-[16px] mt-2 text-justify leading-tight'>Your personal data will be used to support your experience throughout this website, to manage access to your account,
                and for other purposes described in our privacy policy.</p>
            </div>

            <button className='border border-black rounded-xl h-12 w-48 mt-8'>Register</button>
          </form>
        </div>
      </div>

      {/* Section 3 */}
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
  )
}

export default Accountpage