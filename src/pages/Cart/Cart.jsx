import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartcontext/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import "./Cars.css";

// Función para formatear precios
const formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS", // Cambia esto según la moneda que estés usando
  }).format(price);
};

export const Cart = () => {
  const {
    cart,
    clearCar,
    deleteProduct,
    getTotalPrice,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);

  let total = getTotalPrice();

  return (
    <div className="container-cart">
      <div className="container-p">
        <h2 className="text-p-cart">
          Estos Son Tus Productos del Carrito <LocalMallIcon />
        </h2>
        {cart.map((elemento) => {
          return (
            <div key={elemento.id} className="container-p-cars">
              <img src={elemento.img} alt="" className="img-p-cars" />
              <div>
                <h2>{elemento.name}</h2>
                <h3
                  onClick={() => deleteProduct(elemento.id)}
                  className="but-remove"
                >
                  Eliminar
                  <DeleteIcon />
                </h3>
              </div>
              <div className="container-counter-cars">
                <RemoveIcon
                  onClick={() => decrementQuantity(elemento.id)}
                  className="counter-icon"
                />
                <h3>{elemento.quantity}</h3>
                <AddIcon
                  onClick={() => incrementQuantity(elemento.id)}
                  className="counter-icon"
                />
              </div>
              <h3 className="price">
                {formatPrice(elemento.price * elemento.quantity)}
              </h3>
            </div>
          );
        })}
        <button onClick={clearCar} className="btn-l">
          Limpiar Carrito
        </button>
      </div>

      <div className="container-resumen">
        <h2>RESUMEN DE CUENTA</h2>

        {cart.map((elemento) => {
          return (
            <div key={elemento.id} className="">
              <h3 className="res-products">
                <img src={elemento.img} alt="" className="img-res" /> x
                {elemento.quantity} :{" "}
                {formatPrice(elemento.price * elemento.quantity)}
              </h3>
            </div>
          );
        })}
        <h3>Total {formatPrice(total)}</h3>
        <Link to={"/checkout"}>
          <button className="btn-f">
            Finalizar Compra <CreditCardIcon />
          </button>
        </Link>
      </div>
    </div>
  );
};
