"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-4 lg:px-12 pt-2 relative z-50">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Care with Heart"
            className="w-[164px] h-[164px] object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm lg:text-lg font-semibold text-black mr-32">
          <Link href="/" className="hover:text-teal-600 transition">
            HOME
          </Link>
          <Link href="/about-us" className="hover:text-teal-600 transition">
            ABOUT US
          </Link>
          <Link href="/ndis" className="hover:text-teal-600 transition">
            NDIS
          </Link>
          <Link href="/contact-us" className="hover:text-teal-600 transition">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-0 left-0 right-0 bg-white shadow-lg pt-20 pb-4 px-4 ">
            <div className="flex flex-col gap-4 text-sm font-semibold text-gray-700">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="py-2 hover:text-teal-600 transition text-lg"
              >
                HOME
              </Link>
              <Link
                href="/about-us"
                onClick={() => setOpen(false)}
                className="py-2 hover:text-teal-600 transition text-lg"
              >
                ABOUT US
              </Link>
              <Link
                href="/ndis"
                onClick={() => setOpen(false)}
                className="py-2 hover:text-teal-600 transition text-lg"
              >
                NDIS
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="py-2 hover:text-teal-600 transition text-lg"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}