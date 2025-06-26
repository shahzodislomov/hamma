'use client'

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ModeToggle } from './modeToggle';
import { Separator } from "./ui/separator";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false)

  const navigate_data = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold text-foreground" aria-label="Navigate to home page">
          Taekon
        </Link>
        <ul className="hidden md:flex items-center space-x-10">
          {navigate_data.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-semibold text-foreground hover:border-blue-400 border border-transparent rounded-full px-3 py-2 transition-all duration-300"
                aria-label={`Navigate to ${item.label.toLowerCase()} page`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <ModeToggle />
        </ul>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild >
              <button
                className="text-black dark:text-white cursor-pointer hover:text-blue-400 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="dark:bg-black/90 bg-slate-300 text-black dark:text-white px-5">
              <nav className="flex flex-col space-y-4 mt-8">
            <SheetTitle>Navigations</SheetTitle>
            <Separator className="bg-black dark:bg-white "/>
                {navigate_data.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-6">
                  <ModeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
