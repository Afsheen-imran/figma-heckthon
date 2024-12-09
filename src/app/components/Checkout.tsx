import React from "react";
import Image from "next/image";
interface Checkout {
  id: number;
  img: string;
  title: string;
  weg: string;
  price: string;
}

export default function CheckoutPage() {
  const data: Checkout[] = [
    {
      id: 1,
      img: "/images/chick.png",
      title: "Chicken Tikka Kabab",
      weg: "150 gm net",
      price: "$50",
    },
    {
      id: 2,
      img: "/images/chick.png",
      title: "Chicken Tikka Kabab",
      weg: "150 gm net",
      price: "$50",
    },
    {
      id: 3,
      img: "/images/chick.png",
      title: "Chicken Tikka Kabab",
      weg: "150 gm net",
      price: "$50",
    },
  ];

  const subtotal = 130;
  const discount = 0.25; // 25%
  const tax = 54.76;
  const total = subtotal - subtotal * discount + tax;

  return (
    <>
      <div className="bg-[url('/images/bg.png')] bg-cover bg-center flex justify-center items-center max-w-full h-[320px] md:h-[500px] lg:h-[600px]">
        <div className="text-center">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-helvetica text-[#FFFFFF] font-bold">
            Checkout Page
          </h1>
          <div className="flex justify-center items-center mt-4 gap-2">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal font-inter text-[#FFFFFF]">
              Home
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF]">
              &gt;
            </p>
            <span className="text-[16px] md:text-[18px] lg:text-[20px] text-[#FF9F0D]">
              Checkout
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <div className="grid gap-4">
                {/* Shipping address form fields */}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sameAsShipping"
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                  Same as shipping address
                </label>
              </div>
            </div>
          </div>
          <div className="px-8 py-8 h-auto rounded-lg border-2 border-gray-300">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-6">
              {data.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <div className="relative h-16 w-16">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.weg}</p>
                    <p className="text-sm text-gray-500">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-6 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Discount</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 px-6 py-3 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
              Place an order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
