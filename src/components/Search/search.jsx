import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";

export default function FreeSolo({ onProductSelect }) {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      let productCollection = collection(db, "products");
      let getProducts = await getDocs(productCollection);
      let arrayValido = getProducts.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    const selectedProduct = items.find((item) => item.name === searchValue);
    if (selectedProduct) {
      onProductSelect([selectedProduct]);
    } else {
      onProductSelect(items); // Mostrar la lista completa
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container-search">
      <Stack spacing={2} sx={{ width: 500 }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={items.map((option) => option.name)}
          onInputChange={(event, newValue) => setSearchValue(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              InputProps={{
                ...params.InputProps,
                type: "search",
                onKeyDown: handleKeyDown,
              }}
            />
          )}
        />
      </Stack>
      <button className="btn-search" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
}
