import React from "react";
import styles from "./products.module.css";
import IMG1 from "./../../assets/feature-1.jpg.webp";
import IMG2 from "./../../assets/feature-2.jpg.webp";
import IMG3 from "./../../assets/feature-3.jpg.webp";
import IMG4 from "./../../assets/feature-4.jpg.webp";
import IMG5 from "./../../assets/feature-5.jpg.webp";
import IMG6 from "./../../assets/feature-6.jpg.webp";
import IMG7 from "./../../assets/feature-7.jpg.webp";
import IMG8 from "./../../assets/feature-8.jpg.webp";

import { FaHeart } from "react-icons/fa";
import { CgRepeat } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.imager}>
            <img src={IMG1} alt="product" />
            <div className={styles.additional}>
              <div>
                <FaHeart />
              </div>
              <div>
                <CgRepeat />
              </div>
              <div>
                <FaCartShopping />
              </div>
            </div>
          </div>

          <div className={styles.name}>Crab Pool Security</div>
          <div className={styles.price}>$30.00</div>
        </div>

        <div className={styles.item}>
          <div className={styles.imager}>
            <img src={IMG2} alt="product" />
            <div className={styles.additional}>
              <div>
                <FaHeart />
              </div>
              <div>
                <CgRepeat />
              </div>
              <div>
                <FaCartShopping />
              </div>
            </div>
          </div>

          <div className={styles.name}>Crab Pool Security</div>
          <div className={styles.price}>$30.00</div>
        </div>

        <div className={styles.item}>
          <div className={styles.imager}>
            <img src={IMG3} alt="product" />
            <div className={styles.additional}>
              <div>
                <FaHeart />
              </div>
              <div>
                <CgRepeat />
              </div>
              <div>
                <FaCartShopping />
              </div>
            </div>
          </div>

          <div className={styles.name}>Crab Pool Security</div>
          <div className={styles.price}>$30.00</div>
        </div>

        <div className={styles.item}>
          <div className={styles.imager}>
            <img src={IMG4} alt="product" />
            <div className={styles.additional}>
              <div>
                <FaHeart />
              </div>
              <div>
                <CgRepeat />
              </div>
              <div>
                <FaCartShopping />
              </div>
            </div>
          </div>

          <div className={styles.name}>Crab Pool Security</div>
          <div className={styles.price}>$30.00</div>
        </div>


        <div className={styles.item}>
          <div className={styles.imager}>
            <img src={IMG5} alt="product" />
            <div className={styles.additional}>
              <div>
                <FaHeart />
              </div>
              <div>
                <CgRepeat />
              </div>
              <div>
                <FaCartShopping />
              </div>
            </div>
          </div>

          <div className={styles.name}>Crab Pool Security</div>
          <div className={styles.price}>$30.00</div>
        </div>


        <div className={styles.item}>
          <div className={styles.imager}>
            <img src={IMG6} alt="product" />
            <div className={styles.additional}>
              <div>
                <FaHeart />
              </div>
              <div>
                <CgRepeat />
              </div>
              <div>
                <FaCartShopping />
              </div>
            </div>
          </div>

          <div className={styles.name}>Crab Pool Security</div>
          <div className={styles.price}>$30.00</div>
        </div>


        <div className={styles.item}>
          <div className={styles.imager}>
            <img src={IMG7} alt="product" />
            <div className={styles.additional}>
              <div>
                <FaHeart />
              </div>
              <div>
                <CgRepeat />
              </div>
              <div>
                <FaCartShopping />
              </div>
            </div>
          </div>

          <div className={styles.name}>Crab Pool Security</div>
          <div className={styles.price}>$30.00</div>
        </div>


        <div className={styles.item}>
          <div className={styles.imager}>
            <img src={IMG8} alt="product" />
            <div className={styles.additional}>
              <div>
                <FaHeart />
              </div>
              <div>
                <CgRepeat />
              </div>
              <div>
                <FaCartShopping />
              </div>
            </div>
          </div>

          <div className={styles.name}>Crab Pool Security</div>
          <div className={styles.price}>$30.00</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
