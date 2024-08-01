import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../context/cartcontext/CartContext";

export const ItemDetailContainer = () => {
  const { addToCar, getQuantityByID, incrementQuantity, decrementQuantity } =
    useContext(CartContext);
  const { id } = useParams();
  const [item, setItem] = useState({});

  let initial = getQuantityByID(id);

  useEffect(() => {
    let ProductCollection = collection(db, "products");
    let refDoc = doc(ProductCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);

  const onAdd = (quantity) => {
    let objetofinal = { ...item, quantity };
    addToCar(objetofinal);
  };

  return (
    <ItemDetail
      item={item}
      onAdd={onAdd}
      initial={initial}
      incrementQuantity={() => incrementQuantity(id)}
      decrementQuantity={() => decrementQuantity(id)}
    />
  );
};
