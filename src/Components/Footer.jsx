import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitch, FaTwitter } from 'react-icons/fa';
import '../index.css';

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-400 py-8 px-2 border-t-2">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="flex items-center pb-8 m-[-4]">
          <h1 className="text-4xl sm:text-6xl  lg:text-6xl px-2 link link-underline link-underline-black ">
            <span className="font-serif font-semibold">BOGO </span>
            <span className="font-extrabold ">Eats</span>
          </h1>
        </div>
        <div className="flex flex-col gap-8 md:flex-row items-center justify-center w-full">
          {/* Social Icons */}

          <div className="w-3/4 md:w-1/2">
            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <div className="flex items-center justify-center rounded-md shadow-md shadow-orange-500 p-3 cursor-pointer hover:scale-110 duration-200 ease-in">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={35} />
                </a>
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-orange-500 p-3 cursor-pointer hover:scale-110 duration-200 ease-in">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={35} />
                </a>
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-orange-500 p-3 cursor-pointer hover:scale-110 duration-200 ease-in">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={35} />
                </a>
              </div>
              <div className="flex items-center justify-center rounded-md shadow-md shadow-orange-500 p-3 cursor-pointer hover:scale-110 duration-200 ease-in">
                <a
                  href="https://www.twitch.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitch size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center pb-8 mt-12">
          <h1 className="text-xl sm:text-xl  lg:text-2xl px-2 link link-underline link-underline-black ">
            <span className="font-serif font-semibold">Made by </span>
            <span className="font-extrabold ">Moksh Keloo</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
