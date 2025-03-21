'use client'

import { useState, useEffect } from "react";

export default function PopupOffer() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check localStorage to see if user already closed the popup
    const isPopupClosed = localStorage.getItem("popupClosed");

    // Only show popup if it hasn't been closed before
    if (!isPopupClosed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
       
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    // Store in localStorage that user closed the popup
    localStorage.setItem("popupClosed", "true");
  };

  if (!showPopup) return localStorage.removeItem("popupClosed");

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          ✕
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get 10% off on your first order!
          </h2>
          <p className="mb-6">Sign up below to claim your discount</p>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get My 10% Off
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";

// export default function SignupPopup() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // Check if user has already dismissed the popup
//       const hasDismissed = localStorage.getItem("hasDismissedPopup");
//       if (!hasDismissed) {
//         setShowPopup(true);
//       }
//     }, 2000); // 20 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle email submission here
//     console.log("Email submitted:", email);
//     // Close popup
//     setShowPopup(false);
//     // Store dismissal in localStorage
//     localStorage.setItem("hasDismissedPopup", "true");
//   };

//   const handleClose = () => {
//     setShowPopup(false);
//     localStorage.setItem("hasDismissedPopup", "true");
//   };

//   // if (!showPopup) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-8 max-w-2xl h-[36rem] w-full mx-4 relative ">
//         {/* Close button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//         >
//           ×
//         </button>

//         {/* Content */}
//         <div className="text-center bg-[url(https://brxcdn.com/uk1-app-storage/26dca828-bc6f-11ef-ae2e-ea1876b3e721/media/original/26a8c33e-d4dc-11ef-8505-22763c41d2c7)] bg-cover max-w-[100vw] h-full ">
//           <h2 className="text-2xl font-bold mb-4">Welcome! 🎉</h2>
//           <p className="text-gray-600 mb-6">
//             Get 10% off on your first order when you sign up
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Claim My 10% Off
//             </button>
//           </form>

//           <p className="text-sm text-gray-500 mt-4">
//             By signing up, you agree to our Terms of Service
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
