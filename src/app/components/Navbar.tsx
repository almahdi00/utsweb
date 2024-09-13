"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        // Sesuaikan dengan tinggi Background1
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 flex items-center justify-between p-4 transition-colors duration-300 ${
        isScrolled || isOpen ? "bg-blue-900" : "bg-transparent"
      } h-16 sm:h-20 z-50`}>
      <div className="flex items-center space-x-4">
        <Image src="/images/Logo.svg" alt="Logo" width={120} height={60} />
      </div>

      <div className="flex items-center sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-gray-300 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <nav
        className={`hidden sm:flex sm:items-center sm:space-x-6 transition-transform duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}>
        <a
          href="#"
          className="text-lg text-white hover:underline"
          style={{ fontFamily: "Lexend Deca" }}>
          Product
        </a>
        <a
          href="#"
          className="text-lg text-white hover:underline"
          style={{ fontFamily: "Lexend Deca" }}>
          Blog
        </a>
        <a
          href="#"
          className="text-lg text-white hover:underline"
          style={{ fontFamily: "Lexend Deca" }}>
          Support
        </a>
        <a
          href="#"
          className="text-lg text-white hover:underline"
          style={{ fontFamily: "Lexend Deca" }}>
          Log In
        </a>
        <button
          className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black hover:shadow-neon transition-all duration-300 transform hover:scale-105"
          style={{
            fontFamily: "Lexend Deca",
            boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
          }}>
          Get Access
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black sm:hidden z-40">
          <nav className="flex flex-col items-start p-4 space-y-4">
            <a
              href="#"
              className="text-lg text-white"
              style={{ fontFamily: "Lexend Deca" }}>
              Product
            </a>
            <a
              href="#"
              className="text-lg text-white"
              style={{ fontFamily: "Lexend Deca" }}>
              Blog
            </a>
            <a
              href="#"
              className="text-lg text-white"
              style={{ fontFamily: "Lexend Deca" }}>
              Support
            </a>
            <a
              href="#"
              className="text-lg text-white"
              style={{ fontFamily: "Lexend Deca" }}>
              Log In
            </a>
            <button
              className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black hover:shadow-neon transition-all duration-300 transform hover:scale-105"
              style={{
                fontFamily: "Lexend Deca",
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
              }}>
              Get Access
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
