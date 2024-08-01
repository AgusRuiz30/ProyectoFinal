import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext/CartContext";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to={"/cart"}>
      <Badge
        badgeContent={cart.length}
        color="secondary"
        showZero={true}
        className="logo"
      >
        <LocalMallIcon className="cart-icon" />
      </Badge>
    </Link>
  );
};
export default CartWidget;
