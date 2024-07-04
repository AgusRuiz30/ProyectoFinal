import ItemList from "./ItemList";
import { products } from "../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setitems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      let arrayfiltered = products.filter(
        (product) => product.category === name
      );
      resolve(name ? arrayfiltered : products);
    });
    getProduct.then((res) => {
      setitems(res);
    });
  }, [name]);

  return <ItemList items={items} />;
};
export default ItemListContainer;
