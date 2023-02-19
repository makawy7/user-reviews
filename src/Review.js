import data from "./data";
import { useState, useEffect } from "react";

function Reviews() {
  const [current, setCurrent] = useState(0);
  const [review, setReview] = useState(data[current]);

  const next = () => {
    if (current < data.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const random = () => {
    const current = Math.floor(Math.random() * data.length);
    setCurrent(current);
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  useEffect(() => {
    console.log("useEffect call");
    setReview(data[current]);
  }, [current]);

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={review.image} alt={review.name} />
      </div>
      <h4 className="author">{review.name}</h4>
      <p className="job">{review.job}</p>
      <p className="info">{review.text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          prev
        </button>
        <button className="next-btn" onClick={next}>
          next
        </button>
      </div>
      <button className="random-btn" onClick={random}>
        random
      </button>
    </article>
  );
}

export default Reviews;
