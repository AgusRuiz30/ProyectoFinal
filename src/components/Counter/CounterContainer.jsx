import { useState } from "react";
import { Counter } from "./Counter";
import Swal from "sweetalert2";

export const CounterContainer = ({ onAdd, stock, initial }) => {
  const [contador, setcontador] = useState(initial);
  const sumar = () => {
    if (contador < stock) {
      setcontador(contador + 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "STOCK MAXIMO",
      });
    }
  };

  const restar = () => {
    if (contador > 1) {
      setcontador(contador - 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "STOCK MINIMO",
      });
    }
  };
  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};
