import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="container-navbar">
      <img
        src="https://res.cloudinary.com/dlmljdft1/image/upload/v1718192023/logo-nabiii_blpisc.png"
        alt=""
        className="img-logo"
      />
      <ul className="container-tags">
        <li>SKIN CARE</li>
        <li>MAQUILLAJE</li>
        <li>ACCESORIOS</li>
        <li>LIBRERY</li>
      </ul>
      <div className="logos">
        <FaSearch className="logo" />
        <FaShoppingCart className="logo" />
      </div>
    </div>
  );
};
