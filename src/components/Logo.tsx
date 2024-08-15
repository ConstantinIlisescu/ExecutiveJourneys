import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between w-full">
      <div className="flex items-center">
        <Link to="/">LOGO</Link>
      </div>
    </div>
  );
};

export default Navbar;
