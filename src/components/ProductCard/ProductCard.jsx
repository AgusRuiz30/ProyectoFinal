import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ name, img, price, id, cuotas }) => {
  return (
    <>
      <div className="container-card">
        <Link to={`/itemDetail/${id}`}>
          <div className="container-card-text">
            <img src={img} alt="" />
            <h2 className="name">{name}</h2>
            <h3 className="precio">{price}</h3>
            <h3 className="cuotas">Precio en 6 cuotas de {cuotas}</h3>
            <h3 className="envio-gratis">Envio Gratis</h3>
          </div>
          <button className="vermas">Comprar</button>
        </Link>
      </div>
    </>
  );
};
