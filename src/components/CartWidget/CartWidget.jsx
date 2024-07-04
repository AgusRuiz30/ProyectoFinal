import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const CartWidget = () => {
  return (
    <Badge badgeContent={0} color="secondary" showZero={true} className="logo">
      <ShoppingCartIcon className="cart-icon" />
    </Badge>
  );
};
export default CartWidget;
