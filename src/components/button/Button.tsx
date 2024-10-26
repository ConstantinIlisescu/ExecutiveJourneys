import { Link } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  href?: string;
  children: string;
}
const Button = ({ href = "/", children }: ButtonProps) => {
  return (
    <Link
      to={href}
      className="button-bg-primary text-nowrap  rounded-full px-4 py-3 text-lg md:text-xl md:px-10  shadow-lg h-fit"
    >
      {children}
    </Link>
  );
};

export default Button;
