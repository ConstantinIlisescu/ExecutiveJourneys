import { Link } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = () => {
  return (
    <div className="text-xl text-white py-6 px-2 flex flex-col gap-3 items-end playfair-display-medium">
      <Link
        to="#services"
        className="text-2xl font-medium transition-colors links-text-color"
      >
        Services
      </Link>
      <Link
        to="#fleet"
        className="text-2xl font-medium transition-colors links-text-color"
      >
        Our Fleet
      </Link>
      <Link
        to="#about"
        className="text-2xl font-medium transition-colors links-text-color"
      >
        About us
      </Link>
      <Link
        to="#contact"
        className="text-2xl font-medium transition-colors links-text-color"
      >
        Contact us
      </Link>
    </div>
  );
};

export default NavLinks;
