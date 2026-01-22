
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Memberships', path: '/plans-and-rates' },
  { label: 'Amenities', path: '/amenities' },
  { label: 'CrossFit', path: 'https://crossfitorrville.com/', isExternal: true },
  { label: 'Pickleball', path: '/pickleball' },
  { label: 'Staff', path: '/staff' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-brand-black/90 backdrop-blur-lg border-b border-white/5 py-2' : 'bg-transparent py-3 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/76744405-b887-44b5-a205-2d18aade22c7/cross_logo_transparent.png?format=1500w" 
              alt="Zephyrs Fitness" 
              className="h-10 md:h-14 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.label}
                    href={item.path}
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-xs lg:text-[13px] uppercase tracking-[0.15em] font-bold text-white hover:text-brand-red transition-all duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `font-sans text-xs lg:text-[13px] uppercase tracking-[0.15em] font-bold transition-all duration-300 relative group ${
                        isActive ? 'text-brand-red' : 'text-white hover:text-brand-red'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-brand-red transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                      </>
                    )}
                  </NavLink>
                )
              ))}
              <NavLink
                to="/plans-and-rates"
                className="bg-brand-red text-white px-4 lg:px-6 py-2 lg:py-2.5 font-bold uppercase tracking-wider text-xs lg:text-sm hover:bg-red-700 transition-all duration-300 transform skew-x-[-10deg] shadow-lg hover:shadow-red-900/30 min-h-[44px] flex items-center"
              >
                <span className="block skew-x-[10deg]">JOIN NOW</span>
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-brand-red focus:outline-none transition-colors min-h-[44px] min-w-[44px]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6 md:h-8 md:w-8" /> : <Menu className="h-6 w-6 md:h-8 md:w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 md:py-8 space-y-3 md:space-y-4 flex flex-col items-center">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-3 text-lg md:text-xl font-display font-bold uppercase tracking-widest w-full text-center text-white hover:text-brand-red transition-colors hover:bg-brand-red/10 rounded min-h-[44px] flex items-center justify-center"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-3 text-lg md:text-xl font-display font-bold uppercase tracking-widest w-full text-center hover:text-brand-red transition-colors rounded min-h-[44px] flex items-center justify-center ${
                    isActive ? 'text-brand-red bg-brand-red/10' : 'text-white hover:bg-brand-red/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
           <NavLink
              to="/plans-and-rates"
              className="mt-6 md:mt-8 w-full max-w-xs text-center bg-brand-red text-white py-3 md:py-4 font-bold uppercase tracking-widest skew-x-[-6deg] min-h-[48px] flex items-center justify-center"
            >
              <span className="block skew-x-[6deg]">Join Now</span>
            </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
