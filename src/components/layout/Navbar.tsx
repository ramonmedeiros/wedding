
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

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

  const { t } = useTranslation();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-wedding-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
        }`}
    >
      <div className="flex items-center">
        <a href="/" className="ml-10 text-wedding-darkgray text-lg md:text-xl font-light">
          Kübra & Ramon
        </a>

        <div className="flex items-center space-x-8 mx-auto text-shadow-lg/80">
          <NavLink to="/" current={location.pathname === "/"}>
            {t("home")}
          </NavLink>
          <NavLink to="/rsvp" current={location.pathname === "/rsvp"}>
            {t("rsvp")}
          </NavLink>
          <NavLink to="/schedule" current={location.pathname === "/schedule"}>
            {t("schedule")}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, current }: { to: string; children: React.ReactNode; current: boolean }) => {
  return (
    <a
      href={to}
      className={`text-sm font-thin transition-all duration-200 relative ${current
        ? "text-wedding-darkgray after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-wedding-darkgray"
        : "text-wedding-darkgray"
        }`}
    >
      {children}
    </a>
  );
};

export default Navbar;
