import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../static/static";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openMenu = () => {
    setIsMobileMenuOpen(true);
    setIsClosing(false);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 400); // must match animation duration
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 transition-all duration-300 glass-scrolled z-50 animation-fade-in">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="cursor-pointer" onClick={closeMenu}>
            <img
              className="w-12 h-10"
              src="/src/assets/nc_logo.png"
              alt="logo"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground rounded-full hover:bg-primary/10 transition-all duration-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={isMobileMenuOpen ? closeMenu : openMenu}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden fixed top-17 w-full glass-strong rounded-xl z-100 ${
            isClosing ? "animation-fade-out-navbar" : "animation-fade-in-navbar"
          }`}
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={closeMenu}
                className="text-lg text-foreground hover:text-primary-foreground py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
