'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'lucide-react';
import { FaAngleRight } from "react-icons/fa6";
import { RiDeleteBin7Fill } from "react-icons/ri";
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

const Cartpage = () => {

  const router = useRouter(); 
  return (
    <div>
      {/* Section 1 */}
      <Header />
      <div className="bg-[url('/shopImages/Rectangle-1.png')] bg-cover bg-center w-full h-52 flex flex-col justify-center items-center">
        <div className='flex flex-col items-center'>
          <Image src="/shopImages/Meubel House_Logos-05.png" alt='logo' width={34} height={34} loading='lazy' />
          <h1 className='font-semibold text-[38px]'>Cart</h1>
        </div>
        <div className='flex text-sm gap-1 mt-1'>
          <p className='font-semibold'>Home</p>
          <FaAngleRight className='mt-1' />
          <p>Cart</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className='w-full flex justify-center items-center'>
        <div className='w-[95%] lg:w-[90%] xl:w-[80%] flex justify-center gap-8 my-14 md:flex-row flex-col items-center '>
          {/* Left side*/}
          <div className='xl:relative bottom-16'>
            <div className="bg-[#FFF9E5] flex justify-center items-center gap-12 h-10 font-semibold">
              <div>
                <button className="hover:bg-amber-100 hover:underline mr-20">Product</button>
                <button className="hover:bg-amber-100 hover:underline">Price</button>
              </div>
              <div>
                <button className="hover:bg-amber-100 hover:underline mr-10 ml-10">Quantity</button>
                <button className="hover:bg-amber-100 hover:underline">Subtotal</button>
              </div>
            </div>

            {/* Image and Rs. */}
            <div className='mt-8 flex sm:flex-row flex-col items-center'>
              <Image src={"/shopImages/Asgaard Sofa.png"} alt="Sofa" height={100} width={120}
                className='bg-yellow-100 border rounded-lg' />
              <div className='flex ml-6 gap-6 sm:flex-row flex-col items-center'>
                <p className='text-[#9F9F9F]'>Asgaard sofa</p>
                <p className='text-[#9F9F9F]'>Rs. 250,000.00</p>
                <div className='h-8 w-8 border rounder-lg ml-5 text-center'>1</div>
                <p className='text-[#9F9F9F]'>Rs. 250,000.00</p>
                <RiDeleteBin7Fill className='text-[#FBEBB5] h-7 w-5' />
              </div>
            </div>
          </div>
          {/*Right */}
          <div className='w-4/5 md:w-[30%] bg-[#FFF9E5] text-center pb-16'>
            <h1 className='font-bold text-4xl md:text-2xl xl:text-3xl mt-5'>Cart Totals</h1>
            <div className='mt-16'>
              <p className='text-[#9F9F9F] text-xl md:text-[12px] xl:text-[16px] pl-24'>Rs. 250,000.00</p>
              <div className='flex justify-center gap-14 mt-4'>
                <p className='text-xl md:text-sm xl:text-lg text-black'>Total</p>
                <p className='text-xl md:text-sm xl:text-lg text-[#B88E2F]'>Rs. 250,000.00</p>
              </div>
              <button onClick={()=> router.push('/Checkout')} className='mt-8 border rounded-lg h-10 w-32'>Check Out</button>
            </div>

          </div>
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

export default Cartpage