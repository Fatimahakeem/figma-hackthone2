import React from 'react'
import Link from 'next/link'
import { IoHeartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

const Header = (props: { bgColor?: string }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center ${props.bgColor === "skin" ? "bg-[#FBEBB5]" : "bg-white"} p-4 md:p-6`}>
      {/* Navigation Links */}
      <div className="w-full md:w-auto flex justify-center md:flex-1 gap-6 md:gap-[75px] items-center mb-4 md:mb-0">
        <Link href="/" className="font-[500] text-[14px] md:text-[16px] leading-[24px]">Home</Link>
        <Link href="/Shop" className="font-[500] text-[14px] md:text-[16px] leading-[24px]">Shop</Link>
        <Link href="/Blog" className="font-[500] text-[14px] md:text-[16px] leading-[24px]">Blog</Link>
        <Link href="/Contact" className="font-[500] text-[14px] md:text-[16px] leading-[24px]">Contact</Link>
      </div>

      {/* Icons Section */}
      <div className="flex justify-center md:justify-end gap-4 md:gap-[20px] items-center md:flex-none pr-8">
        <Link href="/My-Account"><FaRegUser className="text-[18px] md:text-[20px]" /></Link>
        <IoSearchOutline className="text-[20px] md:text-[24px]" />
        <IoHeartOutline className="text-[20px] md:text-[24px]" />
        <Link href="/Cart"><IoCartOutline className="text-[20px] md:text-[24px]" /></Link>
      </div>
    </div>

  );
}




export default Header