
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-wedding-darkgray">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full backdrop-blur-sm flex flex-col items-center space-y-4 py-4">
          <NavLink to="/" current={location.pathname === "/"} onClick={() => setIsOpen(false)}>
            {t("home")}
          </NavLink>
          <NavLink to="/schedule" current={location.pathname === "/schedule"} onClick={() => setIsOpen(false)}>
            {t("schedule_navbar")}
          </NavLink>
          <NavLink to="/rsvp" current={location.pathname === "/rsvp"} onClick={() => setIsOpen(false)}>
            {t("rsvp")}
          </NavLink>
          <NavLink to="/faq" current={location.pathname === "/faq"} onClick={() => setIsOpen(false)}>
            {t("faq")}
          </NavLink>
        </div>
      )}
    </div>
  );
};

export const NavLink = ({ to, children, current, onClick, ...props }: { to: string; children: React.ReactNode; current?: boolean, onClick?: () => void }) => {
  return (
    <a
      {...props}
      href={to}
      className={`text-base font-normal transition-all duration-200 relative ${current
        ? "text-wedding-darkgray after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-wedding-darkgray"
        : "text-wedding-darkgray"
        }`}
    >
      {children}
    </a>
  );
};

export default MobileNavbar;
