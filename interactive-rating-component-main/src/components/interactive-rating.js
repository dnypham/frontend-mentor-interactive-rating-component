import React, { useState } from "react";

export default function InteractiveRating(props) {
  const { selectedRating, setSelectedRating, isInteractiveRatingVisible, setIsInteractiveRatingVisible, setIsErrorMessageVisible, setIsThankYouVisible } = props;

  const createArray = length => [
    ...Array(length)
  ];

  const renderRatings = () => {
    return createArray(5).map((n, i) => (
      <button type="button" key={i} className={`rating-button overpass-400 ${selectedRating === i + 1 ? 'active' : ''}`} onClick={() => setSelectedRating(i + 1)}>{i + 1}</button>
    ))
  };

  const submitRating = () => {
    event.preventDefault();

    if (!selectedRating) {
      setIsErrorMessageVisible(true);
      console.log('Please select a rating before submitting.');
      return;
    };

    setIsInteractiveRatingVisible(false);
    setIsThankYouVisible(true);
  }

  return (
    <form onSubmit={submitRating}>
      <div className={isInteractiveRatingVisible ? 'interactive-rating-container' : 'hide'}>
        <div className="star-container">
          <img src="./assets/icon-star.svg" />
        </div>
        <h1 className="overpass-700 interactive-rating-header">How did we do?</h1>
        <p className="overpass-400 interactive-rating-text">
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
    </form>
  )
}
