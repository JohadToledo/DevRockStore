import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Cart from "../containers/Cart";
import Home from "../containers/Home";
import Product from "../containers/Product";
import "../assets/CSS/App.css";
import UseContext from "../context/UseContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UseContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </Layout>
        </UseContext>
      </BrowserRouter>
    </>
  );
}

export default App;
