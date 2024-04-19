import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";

import apiClient from "../../utils/api-client";
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err.message));
  }, []);

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
        {error && <p className="error_message">{error}</p>}
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            image={product.images[0]}
            price={product.price}
            stock={product.stock}
            rating={product.reviews.rate}
            ratingCounts={product.reviews.counts}
            title={product.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
