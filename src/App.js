import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../componenets/Home";
// import Cart from "../componenets/Cart"
// import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
// import ShoppingCart from "../componenets/ShoppingCart";
import Cart from "../componenets/Cart";

export default function App() {
  return (
    <>
      <div className="Roter">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart/:id" element={<Cart />}></Route>

            {/* <Route path="/ShoppingCart" component={ShoppingCart} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
