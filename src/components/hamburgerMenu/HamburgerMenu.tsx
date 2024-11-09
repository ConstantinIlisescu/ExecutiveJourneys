import { useEffect, useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(isMenuOpen);

  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-2 items-center h-[100%] " onClick={toggleMenu}>
      <span className="text-white montserrat-medium hidden md:block">Menu</span>
      <div
        aria-label="menu"
        className={`hamburger-menu ${isOpen ? "active" : ""} `}
      >
        <div className="bar bar-top" />
        <div className="bar bar-middle" />
        <div className="bar bar-bottom" />
      </div>
    </div>
  );
};

export default HamburgerMenu;
