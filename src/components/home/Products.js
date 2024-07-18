import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
import { FaHeart } from "react-icons/fa";
import { MdRepeat } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 3;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://backend-faceless-dec3a8930688.herokuapp.com/api/data"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error Fetching Data: ", error);
    }
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const sortedAndFilteredProducts = () => {
    let sortedProducts = [...products];

    if (selectedCategory) {
      sortedProducts = sortedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    switch (sortOption) {
      case "name":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "priceAsc":
        sortedProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "priceDesc":
        sortedProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      default:
        break;
    }

    return sortedProducts;
  };

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const currentProducts = sortedAndFilteredProducts().slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <select onChange={handleSort} value={sortOption}>
          <option value="">Sort By</option>
          <option value="name">name</option>
          <option value="priceAsc">Price: Low To High</option>
          <option value="priceDesc">Price: High To Low</option>
        </select>

        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All Category</option>
          <option value="ხილი">ხილი</option>
          <option value="ხილ-ბოსტნეული">ხილ-ბოსტნეული</option>
        </select>
      </div>

      <div className={styles.list}>
        {currentProducts.map((product) => (
          <div className={styles.item} key={product._id}>
            <div className={styles.imager}>
              <img
                src={`https://backend-faceless-dec3a8930688.herokuapp.com${product.photo}`}
                alt={product.name}
              />
              <div className={styles.additional}>
                <div>
                  <FaHeart />
                </div>
                <div>
                  <MdRepeat />
                </div>
                <div>
                  <MdShoppingCart />
                </div>
              </div>
            </div>
            <div className={styles.name}>{product.name}</div>
            <div className={styles.price}>{product.price}</div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from(
          {
            length: Math.ceil(
              sortedAndFilteredProducts().length / productPerPage
            ),
          },
          (_, index) => (
            <button key={index} onClick={ () => pagination(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
