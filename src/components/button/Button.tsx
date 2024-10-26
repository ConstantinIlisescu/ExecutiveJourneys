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
      className="button-bg-primary text-nowrap  px-10 py-3 rounded-full text-xl  shadow-lg h-fit"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </Link>
  );
};

export default Button;
