import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomHeader from "./components/BottomHeader";
// import { ProductProvider } from "./helper/ProductContext";

function App() {
  return (
    // <ProductProvider>
    <BrowserRouter>
      <div className="app">
        <Header />
        <BottomHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
    // </ProductProvider>
  );
}

export default App;
