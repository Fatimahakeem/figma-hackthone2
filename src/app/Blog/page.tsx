import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Header from '@/components/Header';

const BlogPage = () => {
  return (
    <div>
      {/* Section 1 */}
      <Header />
      <div className="bg-[url('/shopImages/Rectangle-1.png')] bg-cover bg-center w-full h-52 flex flex-col justify-center items-center">
        <div className='flex flex-col items-center'>
          <Image src="/shopImages/Meubel House_Logos-05.png" alt='logo' width={34} height={34} loading='lazy' />
          <h1 className='font-semibold text-[38px]'>Blog</h1>
        </div>
        <div className='flex text-sm gap-1 mt-1'>
          <p className='font-semibold'>Home</p>
          <FaAngleRight className='mt-1' />
          <p>Blog</p>
        </div>
      </div>
      {/* Section 2 */}
        <div className='w-full flex flex-col lg:flex-row justify-center gap-6 lg:gap-12 py-14'>
            {/* left */}
          <div className='w-full lg:w-[45%] px-6 lg:px-0'>
            <div>  {/* Image 1 */}
              <Image src={"/shopImages/Rectangle.png"} alt="laptop" width={550} height={480}/>
              <div className='mt-4 flex gap-6'>
                <div className='flex items-center gap-2'>
                  <FaUser className='text-[#9F9F9F]' />
                   <p className='text-[16px] text-[#9F9F9F]'>Admin</p>
                </div>
                <div className='flex gap-2'>
                  <FaCalendar className=' text-[#9F9F9F] mt-1' />
                  <p className='text-[16px] text-[#9F9F9F]'>14 Oct 2022</p>
                </div>
                <div className='flex items-center gap-2'>
                  <FaTag className='text-[#9F9F9F] mt-1' />
                  <p className='text-[16px] text-[#9F9F9F]'>wood</p>
                </div>
              </div>
              <h1 className='font-medium text-2xl mt-2'>Going all-in with millennial design</h1>
              <p className='text-sm mt-2 font-normal text-justify text-[#9F9F9F] mr-8'>Lorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.Mus mauris vitae ultricies leo integer malesuada nunc.
                In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
                ultrices mi tempus imperdiet.Libero enim sed faucibus turpis in.Cursus mattis molestie
                a iaculis at erat.Nibh cras pulvinar mattis nunc sed blandit libero.Pellentesque elit 
                ullamcorper dignissim cras tincidunt.Pharetra et ultrices neque ornare aenean
                euismod elementum.</p>
              <Link href={"#"} className='font-semibold underline underline-offset-8'>Read more</Link>
            </div> {/* image 1 close */}
             
            <div className='mt-10'>  {/* Image 2 */}
              <Image src={"/shopImages/Rectangle 68 (1).png"} alt="laptop" width={550} height={480}/>
              <div className='mt-4 flex gap-6'>
                <div className='flex items-center gap-2'>
                  <FaUser className='text-[#9F9F9F]' />
                   <p className='text-[16px] text-[#9F9F9F]'>Admin</p>
                </div>
                <div className='flex gap-2'>
                  <FaCalendar className=' text-[#9F9F9F] mt-1' />
                  <p className='text-[16px] text-[#9F9F9F]'>14 Oct 2022</p>
                </div>
                <div className='flex items-center gap-2'>
                  <FaTag className='text-[#9F9F9F] mt-1' />
                  <p className='text-[16px] text-[#9F9F9F]'>wood</p>
                </div>
              </div>
              <h1 className='font-medium text-2xl mt-2'>Going all-in with millennial design</h1>
              <p className='text-sm mt-2 font-normal text-justify text-[#9F9F9F] mr-8'>Lorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.Mus mauris vitae ultricies leo integer malesuada nunc.
                In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
                ultrices mi tempus imperdiet.Libero enim sed faucibus turpis in.Cursus mattis molestie
                a iaculis at erat.Nibh cras pulvinar mattis nunc sed blandit libero.Pellentesque elit 
                ullamcorper dignissim cras tincidunt.Pharetra et ultrices neque ornare aenean
                euismod elementum.</p>
              <Link href={"#"} className='font-semibold underline underline-offset-8'>Read more</Link>
            </div> {/* image 2close */}
             
            <div className='mt-10 mb-6'>  {/* Image 3 */}
              <Image src={"/shopImages/Rectangle 68 (2).png"} alt="laptop" width={550} height={480}/>
              <div className='mt-4 flex gap-6'>
                <div className='flex items-center gap-2'>
                  <FaUser className='text-[#9F9F9F]' />
                   <p className='text-[16px] text-[#9F9F9F]'>Admin</p>
                </div>
                <div className='flex gap-2'>
                  <FaCalendar className=' text-[#9F9F9F] mt-1' />
                  <p className='text-[16px] text-[#9F9F9F]'>14 Oct 2022</p>
                </div>
                <div className='flex items-center gap-2'>
                  <FaTag className='text-[#9F9F9F] mt-1' />
                  <p className='text-[16px] text-[#9F9F9F]'>wood</p>
                </div>
              </div>
              <h1 className='font-medium text-2xl mt-2'>Going all-in with millennial design</h1>
              <p className='text-sm mt-2 font-normal text-justify text-[#9F9F9F] mr-8'>Lorem ipsum 
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.Mus mauris vitae ultricies leo integer malesuada nunc.
                In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at
                ultrices mi tempus imperdiet.Libero enim sed faucibus turpis in.Cursus mattis molestie
                a iaculis at erat.Nibh cras pulvinar mattis nunc sed blandit libero.Pellentesque elit 
                ullamcorper dignissim cras tincidunt.Pharetra et ultrices neque ornare aenean
                euismod elementum.</p>
              <Link href={"#"} className='font-semibold underline underline-offset-8'>Read more</Link>
            </div> {/* image 3close */}
      </div> {/* section close */}

          {/* Right */}
      <div className='w-full lg:w-[30%]'>
          <div className='w-[90%] lg:w-72 h-12 ml-4 border border-black rounded-lg flex items-center justify-end'>
           <IoSearch size={24} className='mr-2' />
          </div>
          <div className='ml-12'>
            <h1 className='font-semibold text-3xl mt-6'>Categories</h1>
            <div className='flex justify-between mt-4'>
              <p className='text-[16px] text-[#9F9F9F]'>Crafts</p>
              <p className='text-[#9F9F9F] mr-14'>2</p>
            </div>

            <div className='flex justify-between mt-4'>
              <p className='text-[16px] text-[#9F9F9F]'>Design</p>
              <p className='text-[#9F9F9F] mr-14'>8</p>
            </div>

            <div className='flex justify-between mt-4'>
              <p className='text-[16px] text-[#9F9F9F]'>Homemade</p>
              <p className='text-[#9F9F9F] mr-14'>7</p>
            </div>

            <div className='flex justify-between mt-4'>
              <p className='text-[16px] text-[#9F9F9F]'>Interior</p>
              <p className='text-[#9F9F9F] mr-14'>1</p>
            </div>

            <div className='flex justify-between mt-4'>
              <p className='text-[16px] text-[#9F9F9F]'>Wood</p>
              <p className='text-[#9F9F9F] mr-14'>6</p>
            </div>
          </div>
           {/* 2nd column of right section */}
        <div>
           <h1 className='font-semibold text-3xl mt-12 ml-12'>Recent Posts</h1>
           {/* 1st image */}
           <div className='flex mt-8'>
             <Image src={"/shopImages/Notepad.png"} alt="Notepad" width={150} height={140} className='ml-12'/>
             <div className='ml-4 mt-3'>
              <p className='text=[16px]'>Going all-in with millennial design</p>
              <p className='text-sm text-[#9F9F9F] mt-1'>03 Aug 2022</p>
             </div>
           </div>

           {/* 2nd image */}
           <div className='flex mt-8'>
             <Image src={"/shopImages/readmore.png"} alt="Notepad" width={150} height={140} className='ml-12'/>
             <div className='ml-4 mt-3'>
              <p className='text=[16px]'>Exploring new ways of decorating</p>
              <p className='text-sm text-[#9F9F9F] mt-1'>03 Aug 2022</p>
             </div>
           </div>

           {/* 3rd image */}
           <div className='flex mt-8'>
             <Image src={"/shopImages/screen.png"} alt="Notepad" width={180} height={80} className='ml-12'/>
             <div className='ml-4 mt-3'>
              <p className='text=[16px]'>Handmade pieces that took time to make</p>
              <p className='text-sm text-[#9F9F9F] mt-1'>03 Aug 2022</p>
             </div>
           </div>

           {/* 4th image */}
           <div className='flex mt-8'>
             <Image src={"/shopImages/mobile.png"} alt="Notepad" width={130} height={100} className='ml-12'/>
             <div className='ml-4 mt-3'>
              <p className='text=[16px]'>Modern Home in Milan</p>
              <p className='text-sm text-[#9F9F9F] mt-1'>03 Aug 2022</p>
             </div>
           </div>

           {/* 5th image */}
           <div className='flex mt-8'>
             <Image src={"/shopImages/tea.png"} alt="Notepad" width={120} height={100} className='ml-12'/>
             <div className='ml-4 mt-3'>
              <p className='text=[16px]'>Colorful office redesign</p>
              <p className='text-sm text-[#9F9F9F] mt-1'>03 Aug 2022</p>
             </div>
           </div>
        </div>
        </div> {/* right section close */}
      </div> {/* main section 2 div close */}

      <div className='flex justify-center gap-6 text-sm'>
        <div className="w-10 h-10 bg-[#FBEBB5] flex items-center justify-center rounded-md hover:bg-blue-400 hover:text-white">1</div>
        <div className="w-10 h-10 bg-[#FFF9E5] flex items-center justify-center rounded-md hover:bg-blue-400 hover:text-white">2</div>
        <div className="w-10 h-10 bg-[#FFF9E5] flex items-center justify-center rounded-md hover:bg-blue-400 hover:text-white">3</div>
        <div className="w-16 h-10 bg-[#FFF9E5] flex items-center justify-center rounded-md hover:bg-blue-400 hover:text-white">Next</div>
      </div>
        
        {/* last section */}
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

export default BlogPage
