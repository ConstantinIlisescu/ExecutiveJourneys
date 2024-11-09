import { Link } from "react-router-dom";
import "./ButtonOutline.css";

interface ButtonOutlineProps {
  href?: string;
  children: string;
}
const ButtonOutline = ({ href = "/", children }: ButtonOutlineProps) => {
  return (
    <Link
      to={href}
      aria-label="Quick quote"
      className="button-outline-bg-primary text-nowrap  px-10 py-3 rounded-full text-xl  shadow-lg h-fit"
    >
      {children}
    </Link>
  );
};

export default ButtonOutline;
