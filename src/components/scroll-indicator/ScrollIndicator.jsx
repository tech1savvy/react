import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function ScrollIndicator({
  url = "https://dummyjson.com/products?limit=100",
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(getUrl);
      const data = await response.json();

      console.log(data);

      if (data && data.products && data.products.length) {
        setData(data.products);
      }
    } catch (err) {
      console.log(err);
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      "document.body.scrollTop: ",
      document.body.scrollTop,
      "\ndocument.documentElement.scrollTop: ",
      document.documentElement.scrollTop,
      "\ndocument.documentElement.scrollHeight: ",
      document.documentElement.scrollHeight,
      "\ndocument.documentElement.clientHeight: ",
      document.documentElement.clientHeight
    );

    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    console.log("scrolled:", scrolled);
    console.log("height:", height);

    const percentage = Math.ceil((scrolled / height) * 100);
    console.log("percentage:", percentage);

    setScrollPercentage(percentage);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errMsg) {
    return <p>error occured: {errMsg}</p>;
  }

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className={styles.scrollIndicatorWrapper}>
      <div className={styles.topContainer}>
        <h3>Scroll Indicator</h3>
        <div className={styles.scrollProgressBarContainer}>
          <div
            className={styles.currentProgressBar}
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      {data && data.length
        ? data.map((item) => {
            return (
              <div className={styles.dataContainer} key={item.id}>
                <p>{item.title}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}
