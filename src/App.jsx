import "./App.css";
import { Navbar } from "./components/Navbar";
import { ItermListContainer } from "./pages/itemListContainer/ItemListContainer";
function App() {
  return (
    <>
      <Navbar />
      <ItermListContainer greeting={"Hola como estas?"} />
    </>
  );
}

export default App;
