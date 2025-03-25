"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function PopupOffer() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isPopupClosed = localStorage.getItem("popupClosed");

    if (!isPopupClosed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);

    // Store in localStorage that user closed the popup;
    localStorage.setItem("popupClosed", "true");
  };

  if (!showPopup) return localStorage.removeItem("popupClosed");

  return (
    <div className=" fixed inset-0 flex items-center bg-transparent z-50">
      <div className="w-[50rem] h-[40rem] bg-white m-auto relative bg-[url(https://brxcdn.com/uk1-app-storage/26dca828-bc6f-11ef-ae2e-ea1876b3e721/media/original/26a8c33e-d4dc-11ef-8505-22763c41d2c7)] bg-cover">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 py-5 px-2 text-xl capitalize font-thin leading-[1px]"
        >
          ✕
        </button>

        {/* Content*/}
        <div className="flex flex-col gap-4 w-full absolute top-[30%] left-1/2">
          <div className='flex flex-col items-center max-w-[20rem] gap-3'>
            <h2 className="text-3xl font-[900] text-center">
              Sign up to receive <br /> 10% off{" "}
            </h2>
            <p className='relative text-xl'>Your first order <span className='top-0'>*</span></p>
          </div>
          <form className="max-w-[40%] flex flex-col">
            {" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required
              className="placeholder:text-black placeholder:tracking-wider w-full max-w-full p-[10px] resize-y border-[1px] border-[black]"
            />
                      <button type="submit" className='py-2 w-[12rem] bg-black text-white border-black font-bold mx-auto my-4 uppercase '>Get My 10% OFF</button>
                      <p className='text-sm my-8 text-center tracking-wider font-[600]'>*When you spend £50 or more. See <Link className='underline placeholder:font-bold text-[black]' href='#' >terms and conditions</Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
}
