"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative max-w-full bg-[#0D0D0D] h-[90px]">
      <div className="absolute max-w-full mt-[15px] bg-[#0D0D0D] w-full flex-wrap flex justify-between items-center px-4 sm:px-8 h-[90px]">
        {/* Logo */}
        <div className="max-w-[109px]">
          <h2 className="font-helvetica font-bold text-[20px] sm:text-[24px] text-[#ffffff]">
            Food<span className="text-[#FF9F0D]">Luck</span>
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex max-w-[508px]">
          <ul className="flex gap-2 sm:gap-4">
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/blog", label: "Blog" },
              { href: "/pages", label: "Pages" },
              { href: "/about", label: "About" },
              { href: "/shop", label: "Shop" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li
                key={link.href}
                className={`font-helvetica text-[14px] sm:text-[16px] ${
                  link.href === "/" ? "font-bold text-[#FF9F0D]" : "font-normal text-[#ffffff]"
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons */}
        <div className="flex gap-3">
          <IoIosSearch size="20px" className="text-[#ffffff] sm:text-[24px]" />
          <Link href="/signup">
            <LuUserRound size="20px" className="text-[#ffffff] sm:text-[24px]" />
          </Link>
          <Link href="/cart">
            <HiOutlineShoppingBag size="20px" className="text-[#ffffff] sm:text-[24px]" />
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button>
                <FiAlignJustify size="24px" className="text-[#ffffff]" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#0D0D0D] text-[#ffffff]">
              <SheetHeader>
                <SheetTitle className="font-bold text-xl text-[#FF9F0D]">
                  FoodLuck Menu
                </SheetTitle>
              </SheetHeader>
              <ul className="space-y-4 mt-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/menu", label: "Menu" },
                  { href: "/blog", label: "Blog" },
                  { href: "/pages", label: "Pages" },
                  { href: "/about", label: "About" },
                  { href: "/shop", label: "Shop" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
