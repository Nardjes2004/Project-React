import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Layout} >
          <Route path="/shop" element={Products} />
             <Route path="/shop/:id" element={ProductSingle} />
             <Route path="/chechout/:ids" element={Checkout} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
