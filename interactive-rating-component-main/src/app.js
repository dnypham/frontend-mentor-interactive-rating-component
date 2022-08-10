import React, { useState } from "react";
import InteractiveRating from "./components/interactive-rating";
import ErrorMessage from "./components/error-message";
import ThankYou from "./components/thank-you";

export default function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isInteractiveRatingVisible, setIsInteractiveRatingVisible] = useState(true);
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

  return (
    <div className="app">
      <InteractiveRating
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        setIsInteractiveRatingVisible={setIsInteractiveRatingVisible}
        isInteractiveRatingVisible={isInteractiveRatingVisible}
        setIsErrorMessageVisible={setIsErrorMessageVisible}
        setIsThankYouVisible={setIsThankYouVisible}
      />
      <ErrorMessage
        selectedRating={selectedRating}
        isErrorMessageVisible={isErrorMessageVisible}
      />
      <ThankYou
        selectedRating={selectedRating}
        isThankYouVisible={isThankYouVisible}
      />
    </div>
  )
}
