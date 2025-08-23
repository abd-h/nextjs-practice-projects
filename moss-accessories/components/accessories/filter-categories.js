"use client";
import { useState } from "react";

export default function FilterCategory({ name, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return(
    <div className="mb-4 border-b pb-2 last:border-b-0 last:pb-0">
      <button
        onClick={toggleOpen}
        className=" flex justify-between items-center w-full text-left text-lg font-semibold hover:text-blue-600 focus:outline-none"
      >
        <span>{name} </span>
        {isOpen ? (
          // Minus icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          // Plus icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {isOpen && (
        <ul className="mt-2 space-y-1 ml-4">
          {options.map((option, index) => (
            <li key={option}>
                  <label className='flex items-center text-gray-700 cursor-pointer '>
                  <input type='checkbox' className='form-checkbox h-4 w-4 text-black rounded' /><span className="ml-2">{option} </span>
                  </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
