import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ItemListContainer.css";

const ItemList = ({ items }) => {
  return (
    <div className="container-products-main">
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            name={elemento.name}
            marca={elemento.marca}
            price={elemento.price}
            img={elemento.img}
            img2={elemento.img2}
            description={elemento.description}
            id={elemento.id}
            cuotas={elemento.price / 6}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
