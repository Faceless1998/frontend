// components/Products.jsx

import React, { useState, useEffect } from "react";
import styles from "./products.module.css";
import { FaHeart  } from "react-icons/fa";
import { CgRepeat } from "react-icons/cg";
import { FaCartShopping  } from "react-icons/fa6";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://backend-faceless-dec3a8930688.herokuapp.com/api/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state if needed
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {products.map((product) => (
          <div key={product._id} className={styles.item}>
            <div className={styles.imager}>
              <img src={`https://backend-faceless-dec3a8930688.herokuapp.com${product.photo}`} alt="product" />
              <div className={styles.additional}>
                <div><FaHeart /></div>
                <div><CgRepeat /></div>
                <div><FaCartShopping /></div>
              </div>
            </div>
            <div className={styles.name}>{product.name}</div>
            <div className={styles.price}>${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
