import React, { useState } from "react";
import Link from "next/link";

export default function Appbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex items-center justify-between rounded-[8px] lg:w-[691.31px] h-[61px] md:px-5 bg-white shadow-md">
      <img src="/logo.svg" alt="logo" className="w-[162px] h- md:mx-2 mx-10" />
      <span
        className="cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <img
          src={menuOpen ? "/menu/close.svg" : "/menu/menu.svg"}
          alt={menuOpen ? "Close Menu" : "Open Menu"}
          className="mx-10"
        />
      </span>
      <nav
          className={`md:flex md:justify-center md:items-center md:static md:space-x-[30px] w-full md:opacity-100 absolute ${
            menuOpen
              ? "top-16 opacity-100 bg-white flex flex-col items-center space-y-[12px] md:flex-row md:space-x-10 md:py-0 md:px-0 md:space-y-0 py-4"
              : "hidden"
          } transition-all ease-in duration-30 `}
        >
                  <Link href="/">
            <div className="text-[14px] font-medium text-[#3366FF] hover:text-gray-500 flex">
              Features
              <img
                className="mx-2 my-auto"
                src="/menu/dropdown.svg"
                alt="Your Logo"
              />
            </div>
          </Link>
          <Link href="/pricing">
            <div className="text-[14px] font-medium text-black hover:text-gray-500">
              Pricing
            </div>
          </Link>
          <Link href="/demo">
            <div className="text-[14px] font-medium text-black hover:text-gray-500">
              Demo
            </div>
          </Link>
          <Link href="/blog">
            <div className="text-[14px] font-medium text-black hover:text-gray-500">
              Blog
            </div>
          </Link>
        <Link
          href="/login"
          className="flex w-[291px] md:w-[119px] py-2 rounded-[5px] justify-center text-white bg-biru-button "
        >
          Sign In
          <img
                  className="mx-3 md:hidden "
                  src="/menu/dropdown-white.svg"
                  alt="Dropdown"
                />
        </Link>
        <Link href="/signinadmin" className="md:hidden">
            <div className=" rounded-[10px] bg-[#F3F5F8] flex box-sizing-border w-[291px] items-center py-2">
              <button className="text-[#000000] mx-auto text-[14px] flex">
                Sign In as Admin
              </button>
            </div>
          </Link>
          <Link href="/signincs" className="md:hidden">
            <div className=" rounded-[10px] bg-white flex box-sizing-border w-[291px] items-center py-2">
              <button className="text-[#000000] mx-auto text-[14px] flex">
                Sign In as Customer Service
              </button>
            </div>
          </Link>
      </nav>
      {/* </div> */}
    </div>
  );
}
