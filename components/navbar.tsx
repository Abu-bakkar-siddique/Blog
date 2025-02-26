'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface TopNavbarProps {
  // title?: string;
}

export default function TopNavbar(props: TopNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image 
            src="https://flowbite.com/docs/images/logo.svg" 
            className="h-8 w-auto" 
            alt="Flowbite Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Blog</span>
        </Link>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" 
            aria-controls="navbar-sticky" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
          <li>
            <Link 
                href="/" 
                className="flex items-center py-2 px-3 text-white rounded-sm hover:text-blue-500 md:p-0"
            >
                <Home className="mr-1 h-5 w-5" />
                <span>Home</span>
            </Link>
            </li>
            <li>
            <Link 
                href="/articles" 
                className="flex items-center py-2 px-3 text-white rounded-sm hover:text-blue-500 md:p-0"
            >
                <ArticleIcon className="mr-1 h-5 w-5" />
                <span>Articles</span>
            </Link>
            </li>
            <li>
            <Link 
                href="/publications" 
                className="flex items-center py-2 px-3 text-white rounded-sm hover:text-blue-500 md:p-0"
            >
                <LibraryBooksIcon className="mr-1 h-5 w-5" />
                <span>Publications</span>
            </Link>
            </li>
            <li>
            <Link 
                href="/profile" 
                className="flex items-center py-2 px-3 text-white rounded-sm hover:text-blue-500 md:p-0"
            >
                <AccountCircleIcon className="mr-1 h-5 w-5" /> 
                <span>Profile</span>
            </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}