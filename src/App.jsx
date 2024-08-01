import "./App.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainter/ItemDetailContainer";
import { Checkout } from "./pages/checkout/Checkout";
import { Cart } from "./pages/Cart/Cart";
import CartContextProvider from "./context/cartcontext/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
