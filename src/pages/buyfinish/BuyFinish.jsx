import { getDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useState } from "react";

export const BuyFinish = () => {
  const [refID, setrefID] = useState("");

  let orderscollection = collection(db, "orders");
  let getProduct = getDoc(orderscollection);
  getProduct.then((res) => setrefID(res));
  return (
    <div>
      <h2>
        {" "}
        COMPRASTE EL PRODUCTO CORRECTAMENTE TU COMPROBANTE DE COMPRA ES :
      </h2>

      <h2>{refID}</h2>
    </div>
  );
};
