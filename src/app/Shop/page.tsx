import React from 'react'
import { SlidersHorizontal } from 'lucide-react';
import { HiOutlineViewGrid } from "react-icons/hi";
import { RxDividerVertical } from "react-icons/rx";
import { BsViewList } from "react-icons/bs";
import Image from 'next/image';
import { FaAngleRight } from "react-icons/fa6";
import Header from '@/components/Header';
import Link from 'next/link';
import { products } from '@/Products';

const ShopPage = () => {
  return (
    <div>
      {/*Section ! */}
      <Header />
      <div className="bg-[url('/shopImages/Rectangle-1.png')] bg-cover bg-center w-full h-52 flex flex-col justify-center items-center">
        <div className='flex flex-col items-center'>
          <Image src="/shopImages/Meubel House_Logos-05.png" alt='logo' width={34} height={34} loading='lazy' />
          <h1 className='font-semibold text-[38px]'>Shop</h1>
        </div>
        <div className='flex text-sm gap-1 mt-1'>
          <p className='font-semibold'>Home</p>
          <FaAngleRight className='mt-1' />
          <p>Shop</p>
        </div>
      </div>

      {/* section 2 */}
      <section className="flex flex-col md:gap-0 gap-6 items-center md:flex-row justify-evenly w-full h-[80px] bg-[#FAF4F4] mt-10">
        <div className="flex items-center gap-3">
          <SlidersHorizontal size={18} />
          <h6>Filter</h6>
          <HiOutlineViewGrid size={16} className='ml-3' />
          <BsViewList size={18} className='ml-3' />
          <RxDividerVertical size={30} />
          <p className="text-sm">Showing 1-16 of 32 results</p>
        </div>
        <div className="flex items-center gap-3">
          <h6 className="text-[16px]">Show</h6>
          <button className="bg-white text-[#9F9F9F] w-[46px] h-[46px]">16</button>
          <h3 className="text-[16px] ml-4">Sort by</h3>
          <button className="bg-white text-[#9F9F9F] w-[152px] h-[46px]">Default</button>
        </div>
      </section>

      {/* Products Section 3*/}
      <main className="pl-14 py-6">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index:number) => (
            <Link href={`/Shop/${index + 1}`} key={product.id}>
              <Image
                src={product.image}
                alt={product.name}
                width={240}
                height={240}
                className="rounded-lg" />
              <h4 className="text-2xl font-semibold mt-4">{product.name}</h4>
              <p className="text-2xl font-bold text-black pt-2">{product.price}</p>
            </Link>
          ))}
        </div>

        {/* pages div */}
        <section className='text-center pt-20 pb-8'>
          <div className='flex justify-center gap-6 text-sm'>
            <div className="w-10 h-10 bg-[#FBEBB5] flex items-center justify-center rounded-md hover:bg-blue-400 hover:text-white">1</div>
            <div className="w-10 h-10 bg-[#FFF9E5] flex items-center justify-center rounded-md hover:bg-blue-400 hover:text-white">2</div>
            <div className="w-10 h-10 bg-[#FFF9E5] flex items-center justify-center rounded-md hover:bg-blue-400 hover:text-white">3</div>
            <div className="w-16 h-10 bg-[#FFF9E5] flex items-center justify-center rounded-md hover:bg-blue-400 hover:text-white">Next</div>
          </div>
        </section>
      </main>

      {/* Section 4 */}
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

export default ShopPage