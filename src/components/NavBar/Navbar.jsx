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
          <Link to="/category/maquillaje" className="category-text">
            MAQUILLAJE
          </Link>
          <Link to="/category/joyeria" className="category-text">
            JOYERÍA
          </Link>
          <Link to="/category/ropa" className="category-text">
            ROPA
          </Link>
          <Link to="/category/accesorios" className="category-text">
            ACCESORIOS
          </Link>
        </ul>
        <div className="logos">
          <CartWidget className="logo " />
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};
