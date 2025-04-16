
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-wedding-offwhite">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-wedding-gray text-sm">
              Kübra & Ramon 's Wedding
            </p>
            <p className="text-wedding-gray text-xs mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link to="/" className="text-wedding-gray text-sm hover:text-wedding-darkgray transition-colors">
              Home
            </Link>
            <Link to="/rsvp" className="text-wedding-gray text-sm hover:text-wedding-darkgray transition-colors">
              RSVP
            </Link>
            <Link to="/schedule" className="text-wedding-gray text-sm hover:text-wedding-darkgray transition-colors">
              Schedule
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
