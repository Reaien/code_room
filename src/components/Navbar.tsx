import { Link } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="bg-cyan-600/80 p-4 text-white">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:underline">
            Registro
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
