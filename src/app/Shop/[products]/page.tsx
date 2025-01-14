'use client'
import React from 'react'
import Link from 'next/link';
import { products as data } from '@/Products';
import Image from 'next/image';
import Header from '@/components/Header';
import { FaAngleRight } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useRouter } from 'next/navigation';

const ProductPage = ({ params }: { params: { products: string } }) => {
  const { products } = params;
  const dynamicProduct = data[Number(products)];
  console.log(dynamicProduct);

  const productData = [
    { id: 1, name: "Trenton modular sofa_3", price: "Rs.25,000.00", image: "/shopImages/Mask-group1.png" },
    { id: 2, name: "Granite dining table with dining chair ", price: "Rs.25,000.00", image: "/shopImages/Mask-group2.png" },
    { id: 3, name: "Outdoor bar table and stool", price: "Rs.25,000.00", image: "/shopImages/Mask-group3.png" },
    { id: 4, name: "Plain console with teak mirror", price: "Rs.25,000.00", image: "/shopImages/Mask-group4.png" },
  ];

  return (
    <div>
      <Header />
      {/* 2nd header */}
      <div className='flex items-center text-sm gap-3 h-[50px] pl-20' >
        <p className='text-[#9F9F9F]'>Home</p>
        <FaAngleRight className='mt-1' />
        <p className='text-[#9F9F9F]'>Shop</p>
        <FaAngleRight className='mt-1' />
        <RxDividerVertical size={30} className='text-[#9F9F9F]' />
        <p>Asgaard Sofa</p>
      </div>

      {/* 1st section */}
      <div className='my-8 flex flex-col md:flex-row pl-5 md:pl-20'>
        {/* left */}
        <div className='flex flex-col items-center md:items-start'>
          <Image src={"/Mask group (1).png"} alt="Sofa" height={80} width={80}
            className='bg-[#FFF9E5] border rounded-lg mt-4' />
          <Image src={"/Mask group.png"} alt="Sofa" height={80} width={80}
            className='bg-[#FFF9E5] border rounded-lg mt-4' />
          <Image src={"/Mask group (2).png"} alt="Sofa" height={80} width={80}
            className='bg-[#FFF9E5] border rounded-lg mt-4' />
          <div className=' flex items-center border rounded-lg mt-4 h-[80px] w-[80px] bg-[#FFF9E5]'>
            <Image src={"/Maya sofa three seater (1) 1.png"} alt="Sofa"
            height={100} width={100} /></div>
        </div> {/* 1 */}

        {/* mid */}
        <div className='bg-[#FFF9E5] border rounded-lg flex items-center justify-center w-[90%] md:w-[370px] h-full md:h-[440px] mt-8 md:mt-4 ml-10'>
          <Image src={dynamicProduct.image} alt='None' width={600} height={600} />
        </div> {/* 2 */}

        {/* right */}
        <div className='pt-10 md:pt-6 ml-6 md:pl-20'>
          <h1 className="text-2xl md:text-4xl font-semibold">{dynamicProduct.name}</h1>
          <h1 className="text-lg md:text-xl font-semibold text-[#9F9F9F] mt-2">{dynamicProduct.price}</h1>
          <div className='flex mt-3'>
            <Image src={"/Group 88.png"} alt="star" height={60} width={90} loading="lazy" />
            <RxDividerVertical size={30} className='text-[#9F9F9F] ' />
            <p className='text-sm text-[#9F9F9F] mt-1'>5 Customer Review</p>
          </div>
          <p className='text-sm pt-3'>Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact,
            stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended
            highs for a sound.
          </p>
          <div className='mt-6'>
            <p>size</p>
            <div className='mt-3'>
              <button className='rounded-md w-8 h-8 bg-[#FBEBB5]'>L</button>
              <button className='rounded-md w-8 h-8 bg-[#FAF4F4] ml-4'>XL</button>
              <button className='rounded-md w-8 h-8 bg-[#FAF4F4] ml-4'>XS</button>
            </div>
            <div className='mt-6'>
              <p>Color</p>
              <div className='mt-3 flex gap-4'>
                <div className='rounded-full bg-[#816DFA] w-8 h-8'></div>
                <div className='rounded-full bg-black w-8 h-8'></div>
                <div className='rounded-full bg-[#CDBA7B] w-8 h-8'></div>
              </div>
            </div>
          </div>

          <div className='flex mt-6'>
            <div className='flex justify-between items-center w-28 h-12 border-2 rounded-lg'>
              <p className='ml-2'>-</p>
              <p>1</p>
              <p className='mr-2'>+</p>
            </div>
            <button className='w-44 h-12 border-2 border-black rounded-lg ml-4'>Add To Cart</button>
          </div>

          <hr className='mt-10' />

          <div className='flex gap-4 text-[#9F9F9F] mt-6'>
            <div>
              <p>SKU</p>
              <p className='mt-2'>Category</p>
              <p className='mt-2'>Tags</p>
              <p className='mt-2'>Share</p>
            </div>

            <div>
              <p>:</p>
              <p className='mt-2'>:</p>
              <p className='mt-2'>:</p>
              <p className='mt-2'>:</p>
            </div>

            <div>
              <p>SS001</p>
              <p className='mt-2'>Sofas</p>
              <p className='mt-2'>Sofa, Chair, Home, Shop</p>
              <div className='flex mt-3'>
                <FaFacebook size={20} className='text-black' />
                <FaLinkedin size={20} className='text-black ml-6' />
                <AiFillTwitterCircle size={22} className='text-black ml-6' />
                <img src='/vector.png' alt='heart' className='ml-16 md:ml-28 h-7 w-5' />
              </div>
            </div>
          </div>
        </div> {/* right */}
      </div>

      <hr />

      {/* 2nd section  */}
      <div className='mt-10 mb-8'>
        <div className='text-sm md:text-lg text-[#9F9F9F] flex justify-center gap-4 md:gap-8 px-8 md:px-0'>
          <p className='text-black font-semibold'>Description</p>
          <p>Additional Information</p>
          <p>Reviews [5]</p>
        </div>
        <div className='flex flex-col items-center px-8 lg:px-12'>
        <p className='text-sm text-[#9F9F9F] mt-8 text-justify'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
          stereo speaker takes the unmistakable look and <br /> sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p className='text-sm text-[#9F9F9F] mt-6 text-justify'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br />
          speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br />
          and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls<br />
          to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-6 mt-8 justify-center items-center'>
          <Image src={"/Group 107.png"} alt='sofa' width={450} height={250} className='pl-4 md:pl-0'/>
          <Image src={"/Group 106.png"} alt="Sofa" width={450} height={250} className='pl-4 md:pl-0'/>
        </div>
      </div>
      <hr/>

      {/* last section */}

<div className='mt-8 mb-20'> 
  <h1 className='text-center text-3xl font-semibold'>Related Products</h1>
<main className="pl-14 py-6">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {productData.map((product, index:number) => (
            <Link href={`/Shop/${index}`} key={product.id}>
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
</main>

<Link href={"/Shop"}><p className='text-center mt-8 font-semibold underline underline-offset-8'>View more</p></Link>
</div>







    </div>


  )
}

export default ProductPage