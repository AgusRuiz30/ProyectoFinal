import "./App.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainter/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
