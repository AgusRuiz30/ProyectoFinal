import { useContext, useState } from "react";
import { CartContext } from "../../context/cartcontext/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import "./Checkout.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Checkout = () => {
  const { cart, getTotalPrice, clearCar } = useContext(CartContext);
  const [refID, setRefID] = useState("");

  let total = getTotalPrice();

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      direccion: "",
      numerod: "",
      telefono: "",
    },
    onSubmit: async (data) => {
      try {
        let order = {
          buyer: data,
          items: cart,
          total,
        };

        let ordersCollection = collection(db, "orders");
        let docRef = await addDoc(ordersCollection, order);
        setRefID(docRef.id);

        let productsCollection = collection(db, "products");

        await Promise.all(
          cart.map(async (elemento) => {
            let productRef = doc(productsCollection, elemento.id);
            await updateDoc(productRef, {
              stock: elemento.stock - elemento.quantity,
            });
          })
        );

        clearCar();
      } catch (error) {
        console.error("Error processing order:", error);
      }
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Nombre es requerido")
        .min(4, "Nombre debe tener al menos 4 caracteres"),
      apellido: Yup.string()
        .required("Apellido es requerido")
        .min(4, "Apellido debe tener al menos 4 caracteres"),
      email: Yup.string()
        .email("Email inválido")
        .required("Email es requerido"),
      direccion: Yup.string().required("Dirección es requerida"),
      numerod: Yup.string().required("Número de calle es requerido"),
      telefono: Yup.string()
        .required("Teléfono es requerido")
        .matches(/^\d+$/, "Teléfono debe ser un número"),
    }),
    validateOnChange: false,
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS", // Cambia esto según la moneda que estés usando
    }).format(price);
  };

  return (
    <div>
      {refID ? (
        <div className="success-container">
          <CheckCircleIcon className="check-icon" />
          <h2 className="success-message">¡Compra realizada con éxito!</h2>
          <p className="success-message">
            Tu comprobante de compra es: {refID}
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            className="btn-back"
          >
            Volver a la tienda
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-form">
            CONFIRMA LA COMPRA{" "}
            <CreditCardIcon className="icon-text"></CreditCardIcon>
          </h2>
          <div className="container-check">
            <div className="container-form-c">
              <form onSubmit={formik.handleSubmit} className="form-from">
                <div className="form-container">
                  <div className="form-2">
                    <TextField
                      variant="standard"
                      type="text"
                      label="Nombre"
                      name="nombre"
                      onChange={formik.handleChange}
                      error={formik.errors.nombre ? true : false}
                      helperText={formik.errors.nombre}
                      className="form-b"
                    />
                    <TextField
                      variant="standard"
                      type="text"
                      label="Apellido"
                      name="apellido"
                      onChange={formik.handleChange}
                      error={formik.errors.apellido ? true : false}
                      helperText={formik.errors.apellido}
                    />
                  </div>
                  <TextField
                    variant="standard"
                    type="email"
                    label="Email"
                    name="email"
                    onChange={formik.handleChange}
                    error={formik.errors.email ? true : false}
                    helperText={formik.errors.email}
                  />
                  <div className="form-2">
                    <TextField
                      variant="standard"
                      type="text"
                      label="Dirección"
                      name="direccion"
                      onChange={formik.handleChange}
                      error={formik.errors.direccion ? true : false}
                      helperText={formik.errors.direccion}
                      className="form-b"
                    />
                    <TextField
                      variant="standard"
                      type="text"
                      label="Número de Calle"
                      name="numerod"
                      onChange={formik.handleChange}
                      error={formik.errors.numerod ? true : false}
                      helperText={formik.errors.numerod}
                    />
                  </div>
                  <TextField
                    variant="standard"
                    type="text"
                    label="Teléfono"
                    name="telefono"
                    onChange={formik.handleChange}
                    error={formik.errors.telefono ? true : false}
                    helperText={formik.errors.telefono}
                  />
                </div>
                <button type="submit" className="btn-confirm">
                  Confirmar Compra <ShoppingCartIcon></ShoppingCartIcon>
                </button>
              </form>
            </div>
            <div className="res-container">
              PRODUCTOS
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};
