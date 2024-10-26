import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-2 items-center h-[100%]" onClick={toggleMenu}>
      <span className="text-white montserrat-medium hidden md:block">Menu</span>
      <div className={`hamburger-menu ${isOpen ? "active" : ""} `}>
        <div className="bar bar-top" />
        <div className="bar bar-middle" />
        <div className="bar bar-bottom" />
      </div>
    </div>
  );
};

export default HamburgerMenu;
