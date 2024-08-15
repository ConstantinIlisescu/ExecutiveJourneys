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
      className="button-bg-primary  px-10 py-3 rounded-sm font-semibold text-xl tracking-wider shadow-lg transition"
    >
      {children}
    </Link>
  );
};

export default Button;
