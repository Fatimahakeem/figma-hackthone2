import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa6";

const Checkoutpage = () => {
  return (
   <div>
     <Header />
     {/* section 1 */}
     <div className="bg-[url('/shopImages/Rectangle-1.png')] bg-cover bg-center w-full h-52 flex flex-col justify-center items-center">
       <div className='flex flex-col items-center'>
         <Image src="/shopImages/Meubel House_Logos-05.png" alt='logo' width={34} height={34} loading='lazy' />
         <h1 className='font-semibold text-[38px]'>Checkout</h1>
       </div>
       <div className='flex text-sm gap-1 mt-1'>
         <p className='font-semibold'>Home</p>
         <FaAngleRight className='mt-1' />
         <p>checkout</p>
       </div>
     </div>

     {/* section 2 */}
     <div className='w-full flex flex-col lg:flex-row justify-center'>
          {/* left */}
        <div className='w-full lg:w-[36%] py-12'>
          <h1 className='font-semibold text-4xl ml-4 lg:ml-6'>Billing details</h1>
          <div className='flex flex-col lg:flex-row gap-6 mt-8 mx-4 lg:ml-6 '>
            <div>
              <p className='font-medium'>First Name</p>
              <input type="text" className='border-2 rounded-lg h-12 w-full lg:w-44 mt-5 '/>
            </div>
            <div>
              <p className='font-medium'>Last Name</p>
              <input type="text" className='border-2 rounded-lg h-12 mt-5 w-full lg:w-44'/>
            </div>
          </div>

          <div className='mt-8 mx-4 lg:ml-6'>
            <p className='font-medium'>company Name (optional)</p>
            <input type="text" className='border-2 rounded-lg h-12 mt-5 w-full lg:w-96'/>
          </div>

          <div className='mt-8 mx-4 lg:ml-6'>
            <p className='font-medium'>Country / Region</p>
            <input type="text" className='border-2 rounded-lg h-12 mt-5 w-full lg:w-96'/>
          </div>

          <div className='mt-8 mx-4 lg:ml-6'>
            <p className='font-medium'>Street address</p>
            <input type="text" className='border-2 rounded-lg h-12 mt-5 w-full lg:w-96'/>
          </div>

          <div className='mt-8 mx-4 lg:ml-6'>
            <p className='font-medium'>Town / City</p>
            <input type="text" className='border-2 rounded-lg h-12 mt-5 w-full lg:w-96'/>
          </div>

          <div className='mt-8 mx-4 lg:ml-6'>
            <p className='font-medium'>Province</p>
            <input type="text" className='border-2 rounded-lg h-12 mt-5 w-full lg:w-96'/>
          </div>

          <div className='mt-8 mx-4 lg:ml-6'>
            <p className='font-medium'>ZIP Code</p>
            <input type="text" className='border-2 rounded-lg h-12 mt-5 w-full lg:w-96'/>
          </div>

          <div className='mt-8 mx-4 lg:ml-6'>
            <p className='font-medium'>Phone</p>
            <input type="text" className='border-2 rounded-lg h-12 mt-5 w-full lg:w-96'/>
          </div>

          <div className='mt-8 mx-4 lg:ml-6'>
            <p className='font-medium'>Email address</p>
            <input type="text" className='border-2 rounded-lg h-12 mt-5 w-full lg:w-96'/>
          </div>

          <div className='mt-8 mx-4 lg:ml-6'>
            <input type="text" placeholder='Additional information' className='border-2 rounded-lg h-12 mt-5 text-sm pl-6 w-full lg:w-96'/>
          </div>
       </div>

        {/* rightt */}
        <div  className='w-full lg:w-[30%] mt-12 lg:mt-14 px-3 lg:mx-0'>
          <div className='font-semibold text-2xl lg:text-3xl flex justify-between'>
            <h1>Product</h1>
            <h1>Subtotal</h1>
          </div>
          <div className='mt-2 flex justify-between'>
            <div className='flex gap-2'>
             <p className='text-[#9F9F9F]'>Asgaard Sofa</p>
             <p className='text-sm'>x 1</p>
            </div>
            <p >Rs. 250,000.00</p>
          </div>

          <div className='mt-2 flex justify-between'>
            <p>Subtotal</p>
            <p>Rs. 250,000.00</p>
          </div>

          <div className='mt-2 flex justify-between border-b-2 pb-4'>
            <p>Total</p>
            <p className='text-[#B88E2F] text-lg'>Rs. 250,000.00</p>
          </div>

         <div>
           <div className='flex gap-3 mt-3'>
            <div className='bg-black h-4 w-4 border rounded-full mt-2'></div>
            <h1 className='font-medium text-lg'>Direct Bank Transfer</h1>
           </div>
           <p className='text-[#9F9F9F] text-justify'>Make your payment directly into our bank account. Please use your Order ID as the payment reference.
             Your order will not be shipped until the funds have cleared in our account.</p>
           <div className='flex gap-3 mt-3'>
             <input type="radio"  name="option" checked/>
             <p className='text-[#9F9F9F]'>Direct Bank Transfer</p>
           </div>

           <div className='flex gap-3 mt-2'>
            <input type="radio" name="option"/>
            <p className='text-[#9F9F9F]'>Cash On Delivery</p>
           </div>

           <p className='mt-3 text-justify'>Your personal data will be used to support your experience throughout this website, 
            to manage access to your account, and for other purposes described in our <b>privacy policy.</b>
           </p>
         </div>
         <button className='border border-black h-10 w-[90%] lg:w-48 rounded-lg mt-6 mx-3 lg:mx-28 mb-6'>Place Order</button>
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

export default Checkoutpage
