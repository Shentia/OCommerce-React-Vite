import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MyOrderPage from "./components/MyOrder/MyOrderPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <Home /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        <MyOrderPage />
      </main>
    </div>
  );
};

export default App;
