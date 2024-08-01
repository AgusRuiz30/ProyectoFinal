import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ItemListContainer.css";

// Función para formatear precios
const formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS", // Cambia esto según la moneda que estés usando
  }).format(price);
};

const ItemList = ({ items }) => {
  return (
    <div className="container-products-main">
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            name={elemento.name}
            marca={elemento.marca}
            price={formatPrice(elemento.price)}
            img={elemento.img}
            img2={elemento.img2}
            description={elemento.description}
            id={elemento.id}
            cuotas={formatPrice(elemento.price / 6)}
            btn={elemento}
            stock={elemento.stock}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
