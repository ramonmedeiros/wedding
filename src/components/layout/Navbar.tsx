
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "../../hooks/use-mobile";
import MobileNavbar, { NavLink } from "./MobileNavbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { t } = useTranslation();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-wedding-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="absolute left-9 top-1/2 transform -translate-y-1/2">
          <a href="/" className="hidden md:inline-block text-wedding-darkgray md:text-xl font-normal">
            Kübra & Ramon
          </a>
        </div>
        {isMobile ? <MobileNavbar /> : <div className="flex items-center space-x-8 text-shadow-lg/80">
          <NavLink to="/">
            {t("home")}
          </NavLink>
          <NavLink to="/schedule">
            {t("schedule_navbar")}
          </NavLink>
          <NavLink to="/rsvp">
            {t("rsvp")}
          </NavLink>
          <NavLink to="/faq">
            {t("faq")}
          </NavLink>
        </div>}
      </div>
    </nav>
  );
};



export default Navbar;
