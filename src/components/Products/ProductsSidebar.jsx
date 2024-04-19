import React, { useEffect, useState } from "react";
import "./ProductsSidebar.css";
import Link from "../Navbar/Link";
import apiClient from "../../utils/api-client";
const ProductsSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get("/category")
      .then((res) => setCategories(res.data))
      .catch((err) => setErrors(err.message));
  }, []);

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {errors && <p className="error_message">{errors}</p>}
        {categories.map((category) => (
          <Link
            key={category._id}
            link={`products?category=${category.name}`}
            title={category.name}
            sidebar
            image={`http://localhost:2000/category/${category.image}`}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
