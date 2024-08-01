import { CounterContainer } from "../../components/Counter/CounterContainer";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext/CartContext";

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} className="cart-item-img" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Precio: ${item.price}</p>
        <CounterContainer
          initial={item.quantity}
          onAdd={() => {}}
          incrementQuantity={() => incrementQuantity(item.id)}
          decrementQuantity={() => decrementQuantity(item.id)}
          stock={item.stock}
        />
        <p>Subtotal: ${item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
