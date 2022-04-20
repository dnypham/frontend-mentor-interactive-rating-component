import React, { useState, useEffect } from "react";

export default function InteractiveRating() {
  const createArray = length => [
    ...Array(length)
  ];

  const renderRatings = () => {
    console.log(createArray(5))
    return createArray(5).map((n, i) => (
      <button className="rating-button overpass-400" key={i}>{i + 1}</button>
    ))
  };

  return (
    <div className="interactive-rating-container">
      <div className="star-container">
        <img src="./assets/icon-star.svg" />
      </div>
      <h1 className="overpass-700 interactive-rating-header">How did we do?</h1>
      <p className="overpass-400 interactive-rating-paragraph">
        Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering!
      </p>
      <div className="rating-buttons-container">
        {renderRatings()}
      </div>
      <div className="submit-button-container">
      <button className="submit-button overpass-400" type="submit">SUBMIT</button>
      </div>
    </div>
  )
}
