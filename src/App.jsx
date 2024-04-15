import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./components/Authentication/LoginPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <Home /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        <LoginPage />
      </main>
    </div>
  );
};

export default App;
