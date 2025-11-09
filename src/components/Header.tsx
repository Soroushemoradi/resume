"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
     ${isScrolled || isOpen ? "bg-[#0b0416]/70 backdrop-blur-md shadow-[0_0_40px_rgba(113,39.186,020)]" :"bg-transparent" }`}>
        <div>
            < 
        </div>
     </header>;
};

export default Header;
