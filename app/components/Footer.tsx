import { Button } from "@/components/ui/button";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-3xl font-bold">
            Shopi<span className="text-black">fy</span>
          </h1>
          <p className="text-sm mt-2 opacity-80">Your favorite online store</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-10 justify-center sm:justify-start">
          {/* ... (rest of the links remain the same) ... */}
           <div className="flex flex-col items-center sm:items-start gap-2">
             <h2 className="font-semibold text-lg text-black opacity-50">
               Company
             </h2>
             <Link href="/" className="hover:underline">
               About
             </Link>
             <Link href="/" className="hover:underline">
               Contact
             </Link>
             <Link href="/" className="hover:underline">
               Privacy Policy
             </Link>
           </div>
           <div className="flex flex-col items-center sm:items-start gap-2">
             <h2 className="font-semibold text-lg opacity-50 text-black">
               Categories
             </h2>
             <Link href="/Men" className="hover:underline">
               Men
             </Link>
             <Link href="/Women" className="hover:underline">
               Women
             </Link>
             <Link href="/Teens" className="hover:underline">
               Teens
             </Link>
             <Link href="/Electronics" className="hover:underline">
               Electronics
             </Link>
           </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center sm:items-start gap-3">
          {/* ... (rest of the newsletter section remains the same) ... */}
           <h2 className="font-semibold text-sm sm:text-lg">
             Subscribe to Our Newsletter
           </h2>
           <p className="text-xs sm:text-sm opacity-80">
             Get updates on our latest deals and offers.
           </p>
           <div className="flex w-full max-w-xs">
             <input
               type="email"
               placeholder="Enter your email"
               className="w-full p-2 text-xs sm:text-sm text-black rounded-lg mr-1 outline-none"
             />
             <Button className="opacity-80 bg-black rounded-lg text-white text-xs sm:text-sm hover:opacity-75 hover:bg-slate-800">
               Subscribe
             </Button>
           </div>
        </div>
      </div>
      <hr className="border-t border-white/20 mt-8" />

      {/* Social Media & Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm opacity-75">
       {/* ... (rest of the social media/copyright remains the same) ... */}
        <p>© {new Date().getFullYear()} Shopify. All rights reserved.</p>
        <div className="flex gap-4 text-lg mt-2 sm:mt-0">
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;