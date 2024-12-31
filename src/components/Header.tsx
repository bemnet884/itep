// app/components/Navbar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to determine if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-black/90 backdrop-blur-lg fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-yellow-400 text-2xl font-bold">
          <Link href="/">Smart Light</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          <Link
            href="/about"
            className={`hover:text-yellow-400 ${isActive('/about') ? 'text-yellow-400 font-bold' : ''}`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`hover:text-yellow-400 ${isActive('/services') ? 'text-yellow-400 font-bold' : ''}`}
          >
            What We Do
          </Link>

          <Link
            href="/insights"
            className={`hover:text-yellow-400 ${isActive('/insights') ? 'text-yellow-400 font-bold' : ''}`}
          >
            Insights
          </Link>
          <Link
            href="/price"
            className={`hover:text-yellow-400 ${isActive('/price') ? 'text-yellow-400 font-bold' : ''}`}
          >
            Price
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400">
          Order Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/80 text-white absolute top-full left-0 w-full shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/about"
              className={`hover:text-yellow-400 ${isActive('/about') ? 'text-yellow-400 font-bold' : ''}`}
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className={`hover:text-yellow-400 ${isActive('/services') ? 'text-yellow-400 font-bold' : ''}`}
              onClick={toggleMobileMenu}
            >
              What We Do
            </Link>
            <Link
              href="/results"
              className={`hover:text-yellow-400 ${isActive('/results') ? 'text-yellow-400 font-bold' : ''}`}
              onClick={toggleMobileMenu}
            >
              Our Results
            </Link>
            <Link
              href="/insights"
              className={`hover:text-yellow-400 ${isActive('/insights') ? 'text-yellow-400 font-bold' : ''}`}
              onClick={toggleMobileMenu}
            >
              Insights
            </Link>
            <Link
              href="/contact"
              className={`hover:text-yellow-400 ${isActive('/contact') ? 'text-yellow-400 font-bold' : ''}`}
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <button
              className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400"
              onClick={toggleMobileMenu}
            >
              Try it Free
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
