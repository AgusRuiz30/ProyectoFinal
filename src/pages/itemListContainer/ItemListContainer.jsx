import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
const ItemListContainer = () => {
  const [items, setitems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let porductCollection = collection(db, "products");
    let consulta = porductCollection;
    if (name) {
      consulta = query(porductCollection, where("category", "==", name));
    }
    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayvalido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setitems(arrayvalido);
    });
  }, [name]);

  return (
    <div>
      <img
        src="https://res.cloudinary.com/dlmljdft1/image/upload/v1721328543/publicidad-1_krxs2y.png"
        alt=""
        className="img-ad"
      />
      <ItemList items={items} />{" "}
    </div>
  );
};
export default ItemListContainer;
