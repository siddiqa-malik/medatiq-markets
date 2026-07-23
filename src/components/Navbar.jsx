import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png"
import { CiMoneyBill } from "react-icons/ci";


const Navbar= () => {
 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
 

  const navigations = [
    { id: 'Home', label: 'Home' },
    { id: 'About', label: 'About' },
    { id: 'Services', label: 'services' },
    { id: 'Blogs', label: 'Blogs' },
  { id: 'Contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={` fixed top-0 left-0 w-full h-24 md:h-30 backdrop-blur-md z-50 xl:px-20 border-b-2 border-[#001D30]/10 lg:border-[#001D30]/20  transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className="w-full max-full mx-auto h-full px-4 sm:px-5 lg:px-8 flex items-center justify-between gap-3">
          
          {/* Logo */}
          
          <div className="flex min-w-0 items-center gap-4 lg:gap-12">
            <div className="flex items-center gap-2">
              <Link to="home" className="flex items-center gap-2 transition-transform hover:scale-101">
                <img src={logo} alt="Logo" className="w-[120px] lg:w-full h-auto " />
              </Link>
              <CiMoneyBill />

            </div>
            </div>
            <div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8">
              {navigations.map((nav) => {
                const isActive = currentView === nav.id;
                return (
                  <button
                    key={nav.id}
                    onClick={() => handleNavClick(nav.id)}
                    className={`relative py-1 text-sm lg:text-base tracking-wide whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                      isActive 
                        ? 'border-b-2 border-green text-green-800' 
                        : '  hover:border-b-2 hover:border-green text-black/80 hover:text-black'
                    }`}
                  >
                    {nav.label}
                  </button>
                );
              })}
            </nav>
          </div>
            <div className="flex items-center gap-2 sm:gap-3">
          {/* Core Utilities */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
            
        

          {/* language Placeholder button */}
            <button 
              
              className="hidden sm:inline-flex px-3 lg:px-6 py-2 text-black/80 hover:text-black cursor-pointer border border-black/80 font-medium rounded-full hover:border-black transition-colors whitespace-nowrap"
            >
            Login
            </button>

            

            {/* Profile Placeholder Icon */}
            <button 
              onClick={() => alert("Welcome to your Premier vehicles profile!")}
              className="hidden px-3 py-2 sm:inline-flex bg-[#001D30] text-white/80 hover:text-white border border-balck/80 rounded-full font-medium cursor-pointer whitespace-nowrap"
            >
              Signup 
            </button>

            </div>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 text-[#001D30] hover:border-[#001D30] md:hidden rounded-full  transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-[22px] h-[22px]" /> : <Menu className="w-[22px] h-[22px]" />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-24 bg-black/40 z-40 md:hidden backdrop-blur-xs transition-opacity" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute top-0 left-0 w-full bg-white border-b border-orange-100 shadow-xl px-4 py-5 space-y-4 flex flex-col transition-all duration-300" onClick={e => e.stopPropagation()}>
            
            {/* Nav links */}
            <div className="space-y-1">
              {navigations.map((nav) => {
                const isActive = currentView === nav.id;
                return (
                  <button
                    key={nav.id}
                    onClick={() => handleNavClick(nav.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold tracking-wide flex items-center gap-3 transition-colors ${
                      isActive 
                        ? 'bg-[#001D30] text-Black-600' 
                        : 'text-black hover:bg-green-100 hover:text-black'
                    }`}
                  >
                   {nav.label}
                  </button>
                );
              })}
            </div>

          

          </div>
        </div>
      )}
    </>
  );
};

export { Navbar };
