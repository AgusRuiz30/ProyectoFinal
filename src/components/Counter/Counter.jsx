import "./Counter.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { toast, Toaster } from "sonner";
import { Link } from "react-router-dom";

export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <>
      <div className="container-count">
        <button onClick={restar} className="butt-count">
          <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
        </button>
        <h2 className="num-count">{contador}</h2>
        <button onClick={sumar} className="butt-count">
          <AddCircleOutlineIcon></AddCircleOutlineIcon>{" "}
        </button>
      </div>
      <Link to={"/cart"}>
        <Toaster />
        <button
          onClick={() => {
            toast.success("Se Agrego el Producto Al Carrito");
            onAdd(contador);
          }}
          className="add-detail"
        >
          Agrgar Al Carrito
        </button>
      </Link>
    </>
  );
};
