import React, { useState } from "react";

export default function ThankYou(props) {
  const { selectedRating, isThankYouVisible } = props;

  return (
    <div className={isThankYouVisible ? 'thank-you-container' : 'hide'}>
      <img src="./assets/illustration-thank-you.svg" />
      <div className="rating-feedback-container">
        <p className="overpass-400 rating-feedback-text">{`You selected ${selectedRating} out of 5`}</p>
      </div>
      <h1 className="overpass-700 thank-you-header">Thank you!</h1>
      <p className="overpass-400 thank-you-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  )
}
