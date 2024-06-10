import { useEffect, useState } from "react";
import styles from "./LoadMoreButton.module.css";

export default function LoadMoreButton({
  url = "https://dummyjson.com/products",
  limit = 3,
  total = 9,
}) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `${url}?limit=${limit}&skip=${count * limit}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        console.log(result);
        setProducts((prevProducts) => {
          const nextProducts = [...prevProducts, ...result.products];
          if (nextProducts.length >= total) {
            setDisable(true);
            return nextProducts.slice(0, total);
          } else {
            return nextProducts;
          }
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.itemContainer}>
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className={styles.item}>
                <img
                  className={styles.itemThumbnail}
                  src={item.thumbnail}
                ></img>
                <div>{item.title}</div>
              </div>
            ))
          : null}
      </div>
      <div className={styles.buttonContainer}>
        <button disabled={disable} onClick={() => setCount(count + 1)}>
          Load More
        </button>
        {disable && <p>Reached Page End</p>}
      </div>
    </div>
  );
}
