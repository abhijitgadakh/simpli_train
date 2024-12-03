import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineAppstore, AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BsChatRight } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { BiChat, BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="bg-white text-gray-800 p-4 shadow-md">
      <div className="containe flex justify-between px-4 sm:px-8 md:px-16">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">SimpliTrain</span>
          <div className="relative">
            <svg
              className="absolute top-2.5 left-2.5 h-5 w-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="What would you like to learn?"
              className="bg-[#ddd] border border-transparent focus:border-black focus:bg-white focus:outline-none rounded-full pl-10 pr-4 py-2 w-80 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <Link
            to="/"
            className="flex flex-col items-center text-sm text-[#5F6368] font-medium hover:text-black"
          >
            <GoHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link
            to="/categories"
            className="flex flex-col items-center text-sm text-[#5F6368] font-medium hover:text-black"
          >
            <AiOutlineAppstore className="text-xl" />
            <span>Categories</span>
          </Link>
          <Link
            to="/chat"
            className="flex flex-col items-center text-sm text-[#5F6368] font-medium hover:text-black"
          >
            <BsChatRight className="text-xl" />
            <span>Chat</span>
          </Link>
          <Link
            to="/forum"
            className="flex flex-col items-center text-sm text-[#5F6368] font-medium hover:text-black"
          >
            <IoPeopleOutline className="text-xl" />
            <span>Forum</span>
          </Link>
          <Link
            to="/notifications"
            className="flex flex-col items-center text-sm text-[#5F6368] font-medium hover:text-black"
          >
            <AiOutlineBell className="text-xl" />
            <span>Notifications</span>
          </Link>

          {/* Custom Button */}
          <button className="flex items-center px-2 py-2 border rounded-full border-gray-300 font-medium text-[#5F6368] hover:text-black hover:border-black">
            <div className="h-7 w-7 bg-gray-300 rounded-full mr-2"></div>
            <BiMenu className="text-lg" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;