
"use client"
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative max-w-full bg-[#0D0D0D] h-[90px]">
      <div className="absolute max-w-full mt-[15px] bg-[#0D0D0D] w-full flex-wrap flex justify-between items-center px-4 sm:px-8 h-[32px]">
        {/* Logo */}
        <div className="max-w-[109px]">
          <h2 className="font-helvetica font-bold text-[20px] sm:text-[24px] text-[#ffffff]">
            Food<span className="text-[#FF9F0D]">Luck</span>
          </h2>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden sm:flex max-w-[508px]">
          <ul className="flex gap-2 sm:gap-4">
            <li className="font-bold font-helvetica text-[#FF9F0D] text-[14px] sm:text-[16px]">
              <Link href="/">Home</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/about">About</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="font-normal font-helvetica text-[#ffffff] text-[14px] sm:text-[16px]">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Menu and Icons */}
        <div className="flex gap-3 sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <FiAlignJustify
                size="24px"
                className="text-[#ffffff] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </SheetTrigger>
            <SheetContent side="left" open={isOpen} onClose={() => setIsOpen(false)}>
              <SheetHeader>
                <SheetTitle className="font-bold text-xl text-[#FF9F0D]">
                  FoodLuck Menu
                </SheetTitle>
              </SheetHeader>
              <ul className="space-y-4">
                <li className="text-[#ffffff] text-lg">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-[#ffffff] text-lg">
                  <Link href="/menu">Menu</Link>
                </li>
                <li className="text-[#ffffff] text-lg">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="text-[#ffffff] text-lg">
                  <Link href="/pages">Pages</Link>
                </li>
                <li className="text-[#ffffff] text-lg">
                  <Link href="/about">About</Link>
                </li>
                <li className="text-[#ffffff] text-lg">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="text-[#ffffff] text-lg">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>

          {/* Search Icon */}
          <IoIosSearch size="20px" className="text-[#ffffff] sm:text-[24px]" />
          {/* User Icon */}
          <Link href="/signup">
            <LuUserRound size="20px" className="text-[#ffffff] sm:text-[24px]" />
          </Link>
          {/* Shopping Bag Icon */}
          <Link href="/cart">
            <HiOutlineShoppingBag size="20px" className="text-[#ffffff] sm:text-[24px]" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
