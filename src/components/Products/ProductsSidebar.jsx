import React from "react";
import "./ProductsSidebar.css";
import Link from "../Navbar/Link";
import useData from "../../hooks/useData";
const ProductsSidebar = () => {
  const { data: categories, error } = useData("/category");
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <p className="error_message">{error}</p>}
        {categories &&
          categories.map((category) => (
            <Link
              key={category._id}
              link={`/products?category=${category.name}`}
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
