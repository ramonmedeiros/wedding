
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-wedding-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-wedding-darkgray text-lg md:text-xl font-light">
          Sarah & John
        </Link>

        <div className="flex items-center space-x-8">
          <NavLink to="/" current={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/rsvp" current={location.pathname === "/rsvp"}>
            RSVP
          </NavLink>
          <NavLink to="/schedule" current={location.pathname === "/schedule"}>
            Schedule
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, current }: { to: string; children: React.ReactNode; current: boolean }) => {
  return (
    <Link
      to={to}
      className={`text-sm font-light transition-all duration-200 relative ${
        current
          ? "text-wedding-darkgray after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-wedding-darkgray"
          : "text-wedding-gray hover:text-wedding-darkgray"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
