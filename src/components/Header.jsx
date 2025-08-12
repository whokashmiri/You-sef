import React, { useEffect, useRef, useState } from 'react'
import { ShoppingCart, User, Search, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IDLE_MS = 2000; // 2 seconds

// Menu config with children
const menuConfig = {
  Home: { to: "/" },
  Watches: {
    to: "/watches",
    children: [
      { label: "Hublot", to: "/hublot" },
      { label: "Graff", to: "/graff" },
      { label: "Chopard", to: "/chopard" },
      // { label: "Patek Philippe", to: "/watches/patek-philippe" },
      // { label: "Audemars Piguet", to: "/watches/audemars-piguet" },
      // { label: "Omega", to: "/watches/omega" },
    ],
  },
  "Jewelry & Accesories": {
    to: "",
    children: [
      { label: "Chopard", to: "/choprdjewelry" },
      { label: "Azza Fahmy", to: "/azza" },
      { label: "Graff", to: "/graffjewelry" },
      { label: "Luvor", to: "/luvor" },
      { label: "Saint Louis", to: "/st" },
      // { label: "Sets", to: "/jewelry/sets" },
    ],
  },
  "Contact Us": { to: "/contact" },
  "About Us": { to: "/about" },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [showWhiteBg, setShowWhiteBg] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenKey, setMobileOpenKey] = useState(null);

  const lastYRef = useRef(0);
  const idleTimerRef = useRef(null);

  const clearIdle = () => {
    if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    idleTimerRef.current = null;
  };

  const startIdle = () => {
    clearIdle();
    idleTimerRef.current = window.setTimeout(() => {
      setShowWhiteBg(false);
    }, IDLE_MS);
  };

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastYRef.current;

      if (goingDown && y > 10) setShowHeader(true);
      setShowWhiteBg(true);
      startIdle();

      lastYRef.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearIdle();
    };
  }, []);

  const textColorClass = showWhiteBg ? 'text-black' : 'text-white';
  const topLinks = Object.keys(menuConfig);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-30 transition-transform duration-500
      ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
      onMouseEnter={() => {
        setShowHeader(true);
        setShowWhiteBg(true);
        clearIdle();
      }}
      onMouseLeave={() => {
        startIdle();
        setOpenDropdown(null);
      }}
    >
      {/* BG Layer */}
      <div
        className={`absolute inset-0 bg-white transition-transform duration-500
        ${showWhiteBg ? 'translate-y-0' : '-translate-y-full'}`}
      />

      {/* Foreground */}
      <div className={`relative ${textColorClass}`}>
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          {/* Left */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <span className="cursor-pointer">🌐</span>
            <Link to="/contact" className="cursor-pointer">Contact Us</Link>
            <Link to="/find" className="cursor-pointer">Boutique</Link>
          </div>

          {/* Logo */}
          <div className="text-3xl font-signature italic tracking-wide">
            <Link to="/">Khaleegi</Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <User className="w-5 h-5 cursor-pointer" />
              <ShoppingCart className="w-5 h-5 cursor-pointer" />
            </div>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center gap-10 uppercase tracking-widest text-sm py-2 relative">
          {topLinks.map((label) => {
            const cfg = menuConfig[label];
            const hasChildren = !!cfg?.children?.length;

            return (
              <div
                key={label}
                className="relative group"
                onMouseEnter={() => hasChildren && setOpenDropdown(label)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                <Link
                  to={cfg?.to || "#"}
                  className="relative pb-1 group/nav inline-flex items-center gap-1"
                >
                  <span>{label}</span>
                  {hasChildren && <ChevronRight className="w-3 h-3 opacity-60" />}
                  <span className="absolute left-0 -bottom-[2px] w-0 h-[1px] bg-current transition-all duration-300 ease-out group-hover/nav:w-full" />
                </Link>

                {hasChildren && openDropdown === label && (
                  <div className="absolute left-1/2 -translate-x-1/2 pt-3">
                    <div className="min-w-[520px] rounded-2xl shadow-2xl border border-black/5 bg-white text-black p-4 grid grid-cols-1 gap-2">
                      {cfg.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="px-3 py-2 rounded-lg hover:bg-black/5 transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white text-black px-6 pb-4 transition-all duration-300">
            <nav className="flex flex-col gap-2 uppercase tracking-widest text-sm">
              {topLinks.map((label) => {
                const cfg = menuConfig[label];
                const hasChildren = !!cfg?.children?.length;
                const open = mobileOpenKey === label;

                return (
                  <div key={label} className="border-b border-black/10 py-2">
                    <div className="flex items-center justify-between">
                      <Link to={cfg?.to || "#"} className="py-2">{label}</Link>
                      {hasChildren && (
                        <button
                          className="p-2"
                          onClick={() => setMobileOpenKey(open ? null : label)}
                        >
                          {open ? <X className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </button>
                      )}
                    </div>
                    {hasChildren && open && (
                      <div className="mt-2 pl-2 flex flex-col gap-2">
                        {cfg.children.map((child) => (
                          <Link key={child.label} to={child.to} className="py-1 text-xs tracking-wider">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex gap-4 mt-3">
                <User className="w-5 h-5 cursor-pointer" />
                <ShoppingCart className="w-5 h-5 cursor-pointer" />
                <Search className="w-5 h-5 cursor-pointer" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
