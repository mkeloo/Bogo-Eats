import React, { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import '../index.css';
const Navbar = () => {
  const sidebarList = [
    {
      id: 1,
      name: 'Orders',
      icon: <TbTruckDelivery size={30} className="mr-4" />,
    },
    {
      id: 2,
      name: 'Favorites',
      icon: <MdFavorite size={30} className="mr-4" />,
    },
    {
      id: 3,
      name: 'Wallet',
      icon: <FaWallet size={30} className="mr-4" />,
    },
    {
      id: 4,
      name: 'Help',
      icon: <MdHelp size={30} className="mr-4" />,
    },
    {
      id: 5,
      name: 'Promotions',
      icon: <AiFillTag size={30} className="mr-4" />,
    },
    {
      id: 6,
      name: 'Best One',
      icon: <BsFillSaveFill size={30} className="mr-4" />,
    },
    {
      id: 7,
      name: 'Invite Friends',
      icon: <FaUserFriends size={30} className="mr-4" />,
    },
  ];

  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div onClick={() => setSidebar(!sidebar)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 link link-underline link-underline-black">
          <span className="font-serif font-semibold">BOGO </span>
          <span className="font-extrabold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={30} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods..."
        />
      </div>

      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 duration-300 hover:bg-white hover:text-black ease-in rounded-full">
        <BsFillCartFill
          size={25}
          className="mr-2 hover:text-black duration-300 ease-out"
        />
        Cart
      </button>

      {/* Mobile Menu */}

      {/* Overlay */}
      {sidebar ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ' '
      )}

      {/* Side Drawer Menu */}
      <div
        className={
          sidebar
            ? 'bg-white fixed w-[300px] h-screen z-10 top-0 left-0 duration-500 ease-in-out'
            : 'bg-white fixed w-[300px] h-screen z-10 top-0 left-[-100%] duration-500 ease-in-out'
        }
      >
        <AiOutlineClose
          onClick={() => setSidebar(!sidebar)}
          size={30}
          className="cursor-pointer absolute right-4 top-4  mt-1"
        />
        <h2 className="text-3xl p-4 ">
          <span className="font-serif font-semibold">BOGO</span>
          <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-8 text-black">
            {/* Populating List for Sidebar */}
            {sidebarList.map(({ id, name, icon }) => (
              <li
                key={id}
                // hover:translate-x-2 hover:scale-105 hover:border-indigo-800 hover:border-2 hover:rounded-md hover:border-spacing-2 hover:underline
                className="text-xl border-white border-y-2 border-t-2  py-5 flex duration-300 hover:border-black hover:border-y-2 hover:border-t-2 ease-in-out"
              >
                {icon} {name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
