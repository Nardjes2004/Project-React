import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout";
import ProductSingle from "./pages/ProductSingle";
import Layout from "./Layouts/Layout";
import Products from "./pages/Products";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
             <Route path="/shop" element={<Products/>} />
             <Route path="/shop/:id" element={<ProductSingle/>} />
             <Route path="/checkout/:id" element={<Checkout/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
