"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <Link href="/">
          <h1 className="text-white text-2xl font-bold">WebShop</h1>
        </Link>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links - visible on medium screens and larger */}
        <div className="hidden md:flex space-x-4">
          <Link href="/auth/register">
            <Button variant="outline" className="text-white bg-grey-500">
              Register
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button className="bg-blue-500 text-white">Login</Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/auth/register">
            <Button variant="outline" className="w-full text-white bg-grey-500">
              Register
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button className="w-full bg-blue-500 text-white mt-3">Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
