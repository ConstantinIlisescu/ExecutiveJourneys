import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between w-full">
      <div className="flex items-center">
        <Link to="/">
          <div className="flex flex-col text-end">
            <span className="text-light text-4xl playfair-display-medium">
              Executive
            </span>
            <span className="text-call-to-action playfair-display-medium">
              Journeys
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
