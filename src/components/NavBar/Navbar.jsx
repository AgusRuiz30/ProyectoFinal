import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget.jsx";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/dlmljdft1/image/upload/v1718192023/logo-nabiii_blpisc.png"
            alt=""
            className="img-logo"
          />
        </Link>
        <ul className="container-tags">
          <Link to="/" className="category-text">
            TODOS
          </Link>
          <Link to="/category/ojos" className="category-text">
            OJOS
          </Link>
          <Link to="/category/labios" className="category-text">
            LABIOS
          </Link>
          <Link to="/category/rostro" className="category-text">
            ROSTRO
          </Link>
        </ul>
        <div className="logos">
          <FaSearch className="logo" />
          <CartWidget className="logo" />
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};
