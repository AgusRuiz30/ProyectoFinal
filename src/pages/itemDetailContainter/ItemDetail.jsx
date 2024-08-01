import "./ItemDetail.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegCreditCard } from "react-icons/fa";
import { CounterContainer } from "../../components/Counter/CounterContainer";

const formatPrice = (price) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS", // Cambia esto según la moneda que estés usando
  }).format(price);
};

const ItemDetail = ({ item, onAdd, initial }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-main-detail">
      <div className="container-detail">
        <Slider {...settings} className="slider-detail">
          <div>
            <img src={item.img} alt="" className="img-detail" />
          </div>
          <div>
            <img src={item.img2} alt="" className="img-detail" />
          </div>
        </Slider>
        <div className="container-detail-text">
          <h2>{item.name}</h2>
          <h3 className="precio">{formatPrice(item.price)}</h3>
          <div>
            <b>Marca:</b>
            <p className="text-desc">{item.marca}</p>
          </div>
          <div>
            <b>Descripcion:</b>
            <p className="text-desc">{item.description}</p>
          </div>
          <div className="buttons-detail">
            <CounterContainer
              initial={initial}
              onAdd={onAdd}
              incrementQuantity={() => {}}
              decrementQuantity={() => {}}
              stock={item.stock}
            />
          </div>
          <div className="tarjetas-envio">
            <div className="icon-tarj-envios">
              <FaMapMarkerAlt className="icon-envio" />
              <FaRegCreditCard className="icon-envio" />
            </div>
            <div className="detail-text-envio">
              <h3 className="envio-tarjetas-text">
                Retiro en tienda o envío a domicilio
              </h3>
              <p className="text-desc">
                Retirá en tienda sin cargo o elegí envío a domicilio gratis a
                partir de $20.000
              </p>

              <div className="detail-text-envio">
                <h3 className="envio-tarjetas-text">
                  Retiro en tienda o envío a domicilio
                </h3>
                <p className="text-desc">
                  Pagá con Visa, Amex y Master en hasta 6 cuotas sin interés de
                  {formatPrice(item.price / 6)}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
