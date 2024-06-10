import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./styles.module.css";

export default function ImageSlider({
  url = "https://picsum.photos/v2/list",
  limit = 3,
  page = 1,
}) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?pages=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      setErrorMsg(err);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url, page, limit]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occured: {errorMsg}</div>;
  }

  return (
    <div className={styles.wrapper}>
      <BsArrowLeftCircleFill
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((image, index) => {
            return (
              <img
                key={index}
                src={image.download_url}
                alt={image.url}
                className={
                  currentSlide === index
                    ? styles.currentImage
                    : styles.hiddenImage
                }
              ></img>
            );
          })
        : null}
      <BsArrowRightCircleFill
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={handleNext}
      />
      <span className={styles.indicatorsContainer}>
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? `${styles.indicator} ${styles.activeIndicator}`
                    : `${styles.indicator} ${styles.inactiveIndicator}`
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
