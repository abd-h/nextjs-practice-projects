'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';


export default function ChangingText() {
    const changingHeaderText = ['Free delivery over £175', 'Easy return/exchange', 'Book a store appointment', '10% student discount'];

    const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

    useEffect(() => {
        const interValid = setInterval(() => {

            setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % changingHeaderText.length)
            
        }, 3000);

        return () => clearInterval(interValid);
    },[changingHeaderText.length])
    
    return (
      <li className=" w-full  ">
        <Link className="hover:underline tracking-[0.2rem] text-[0.63rem] font-bold" href="#">
          {" "}
          {changingHeaderText[currentHeadingIndex]}{" "}
        </Link>
      </li>
    );
}