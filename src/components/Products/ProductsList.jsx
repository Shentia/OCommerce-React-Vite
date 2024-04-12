import React from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
const ProductsList = () => {
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="sort" className="products_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price High to Low</option>
          <option value="price ase">Price Low to High</option>
          <option value="rate desc">Rate High to Low</option>
          <option value="rate ase">Rate Low to High</option>
        </select>
      </header>

      <div className="products_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsList;
