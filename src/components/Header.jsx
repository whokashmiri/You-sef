import React, { useEffect, useRef, useState } from 'react'
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const IDLE_MS = 2000; // ⬅️ 2 seconds

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showWhiteBg, setShowWhiteBg] = useState(false);

  const lastYRef = useRef(0);
  const idleTimerRef = useRef(null);

  const clearIdle = () => {
    if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    idleTimerRef.current = null;
  };

  const startIdle = () => {
    clearIdle();
    idleTimerRef.current = window.setTimeout(() => {
      setShowWhiteBg(false); // only bg slides up after idle
    }, IDLE_MS);
  };

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastYRef.current;

      if (goingDown && y > 10) setShowHeader(true);
      setShowWhiteBg(true);  // show bg while scrolling
      startIdle();           // hide bg after 2s of no scroll

      lastYRef.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearIdle();
    };
  }, []);

  const textColorClass = showWhiteBg ? 'text-black' : 'text-white';

  return (
    <>
      {/* Header */}
      <div
        className={`fixed top-0 left-0 w-full z-30 transition-transform duration-500
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
        onMouseEnter={() => {
          setShowHeader(true);   // hover should slide header down
          setShowWhiteBg(true);  // and bring white bg down
          clearIdle();
        }}
        onMouseLeave={() => {
          // when leaving header, let bg slide up after 2s
          startIdle();
        }}
      >
        {/* Background layer that moves independently */}
        <div
          className={`absolute inset-0 bg-white transition-transform duration-500
          ${showWhiteBg ? 'translate-y-0' : '-translate-y-full'}`}
          aria-hidden="true"
        />

        {/* Foreground content */}
        <div className={`relative ${textColorClass}`}>
          <div className="flex items-center justify-between px-6 md:px-12 py-4">
            {/* Left: Topbar links */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <span className="cursor-pointer">🌐</span>
              <span className="cursor-pointer">Contact Us</span>
              <span className="cursor-pointer">Boutique</span>
            </div>

            {/* Center: Logo */}
            <div className="text-3xl font-signature italic tracking-wide">Khaleegi</div>

            {/* Right: Icons or Hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-4">
                <User className="w-5 h-5 cursor-pointer" />
                <ShoppingCart className="w-5 h-5 cursor-pointer" />
              </div>
              <button
                className="md:hidden"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Navigation Links (desktop) */}
      <nav className="hidden md:flex justify-center gap-10 uppercase tracking-widest text-sm py-2"> 
  {["Watches", "Jewellery", "Accessories", "La Maison", "Highlights"].map((item) => (
    <a
      key={item}
      href="#"
      className="relative pb-1 group"
    >
      <span className="relative z-10">{item}</span>
      {/* animated underline */}
      <span className="absolute left-0 -bottom-[2px] w-0 h-[1px] bg-current transition-all duration-300 ease-out group-hover:w-full"></span>
    </a>
  ))}
  <Search className="w-4 h-4 mt-1 cursor-pointer" />
      </nav>


          {/* Navigation Links (mobile dropdown) */}
          {menuOpen && (
            <div className="md:hidden bg-white text-black px-6 pb-4 transition-all duration-300">
              <nav className="flex flex-col gap-4 uppercase tracking-widest text-sm">
                <a href="#" className="hover:underline">Watches</a>
                <a href="#" className="hover:underline">Jewellery</a>
                <a href="#" className="hover:underline">Accessories</a>
                <a href="#" className="hover:underline">La Maison</a>
                <a href="#" className="hover:underline">Highlights</a>
                <div className="flex gap-4 mt-2">
                  <User className="w-5 h-5 cursor-pointer" />
                  <ShoppingCart className="w-5 h-5 cursor-pointer" />
                  <Search className="w-5 h-5 cursor-pointer" />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
