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
    <>
      <h1>{review.name}</h1>
      <button className="prev-btn" onClick={prev}>
        prev
      </button>

      <button className="random-btn" onClick={random}>
        random
      </button>

      <button className="next-btn" onClick={next}>
        next
      </button>
    </>
  );
}

export default Reviews;
