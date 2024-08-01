import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from "react-responsive-carousel";
import FreeSolo from "../../components/Search/search";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      let productCollection = collection(db, "products");
      let consulta = productCollection;

      if (name) {
        consulta = query(productCollection, where("group", "==", name));
      }

      let getProducts = await getDocs(consulta);
      let arrayValido = getProducts.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });

      setItems(arrayValido);
    };

    fetchItems();
  }, [name]);

  const handleProductSelect = (selectedProducts) => {
    setItems(selectedProducts);
  };

  return (
    <div>
      <Carousel
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        autoPlay
        interval={5000}
        infiniteLoop
      >
        <div>
          <img
            src="https://res.cloudinary.com/dlmljdft1/image/upload/v1721778294/publicidad-1_e5so2n.png"
            alt="Publicidad 1"
            className="img-ad"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dlmljdft1/image/upload/v1721782586/publicidad_1_asiukb.png"
            alt="Publicidad 2"
            className="img-ad"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dlmljdft1/image/upload/v1721783409/publicidad_3_qya2ow.png"
            alt="Publicidad 3"
            className="img-ad"
          />
        </div>
      </Carousel>
      <div className="container-list">
        <FreeSolo onProductSelect={handleProductSelect} />
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
