/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "../../hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";
// import Pagination from "../Common/Pagination";

const ProductsList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  // const page = search.get("page");
  const { data, error, isLoading } = useData(
    "/products",
    {
      params: {
        category: category,
        perPage: 10,
        page: page,
      },
    },
    [category, page]
  );
  useEffect(() => {
    setPage(1);
  }, [category]);

  // console.log("Data", data);

  const skeletons = [1, 2, 3, 4, 5, 6];
  // const handlePageChange = (page) => {
  //   const currentParams = Object.fromEntries([...search]);
  //   setSearch({ ...currentParams, page: parseInt(currentParams.page) + 1 });
  // };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 1 &&
        !isLoading &&
        data &&
        page < data.totalPages
      ) {
        console.log("Reached end of the page");
        // handlePageChange();
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data, isLoading]);
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
        {data?.products &&
          data.products.map((product) => (
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
        {isLoading &&
          skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)}
      </div>
      {/* {data && (
        <Pagination
          totalPosts={data?.totalProducts}
          postsPerPage={data?.postPerPage}
          onClick={handlePageChange}
          currentPage={parseInt(page)}
        />
      )} */}
    </section>
  );
};

export default ProductsList;
