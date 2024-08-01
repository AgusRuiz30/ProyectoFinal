import { createContext, useState } from "react";
import { toast } from "sonner";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  const addToCar = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newArray = cart.map((elemeento) => {
        if (elemeento.id === product.id) {
          if (elemeento.quantity + product.quantity <= elemeento.stock) {
            return {
              ...elemeento,
              quantity: elemeento.quantity + product.quantity,
            };
          } else {
            toast.error("Cantidad solicitada supera el stock disponible");
            return elemeento;
          }
        } else {
          return elemeento;
        }
      });
      setcart(newArray);
    } else {
      if (product.quantity <= product.stock) {
        setcart([...cart, product]);
        toast.success("Se Agrego el Producto Al Carrito");
      } else {
        toast.error("Cantidad solicitada supera el stock disponible");
      }
    }
  };

  const clearCar = () => {
    setcart([]);
  };

  const isInCart = (id) => {
    let producto = cart.some((product) => product.id === id);
    return producto;
  };

  const deleteProduct = (id) => {
    let newarr = cart.filter((elemento) => elemento.id !== id);
    setcart(newarr);
  };

  const getQuantityByID = (id) => {
    let productoEncontrado = cart.find((product) => product.id === id);
    if (productoEncontrado !== undefined) {
      return productoEncontrado.quantity;
    } else {
      return 1;
    }
  };

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
  };

  const incrementQuantity = (id) => {
    let newArray = cart.map((elemeento) => {
      if (elemeento.id === id) {
        if (elemeento.quantity < elemeento.stock) {
          return {
            ...elemeento,
            quantity: elemeento.quantity + 1,
          };
        } else {
          toast.error("Cantidad solicitada supera el stock disponible");
          return elemeento;
        }
      } else {
        return elemeento;
      }
    });
    setcart(newArray);
  };

  const decrementQuantity = (id) => {
    let newArray = cart.map((elemeento) => {
      if (elemeento.id === id && elemeento.quantity > 1) {
        return {
          ...elemeento,
          quantity: elemeento.quantity - 1,
        };
      } else {
        return elemeento;
      }
    });
    setcart(newArray);
  };

  let data = {
    cart,
    addToCar,
    clearCar,
    deleteProduct,
    getQuantityByID,
    getTotalPrice,
    incrementQuantity,
    decrementQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
