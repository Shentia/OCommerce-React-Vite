import React from "react";
import "./ProductsSidebar.css";
import Link from "../Navbar/Link";

const ProductsSidebar = () => {
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        <Link
          link="products?category=electronics"
          title="Electronics"
          sidebar
        />
      </div>
    </aside>
  );
};

export default ProductsSidebar;
