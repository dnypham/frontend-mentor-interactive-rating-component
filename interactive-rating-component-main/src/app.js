import React, { useState } from "react";
import InteractiveRating from "./components/interactive-rating";
import ErrorMessage from "./components/error-message";

export default function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

  return (
    <div className="app">
      <InteractiveRating
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        isErrorMessageVisible={isErrorMessageVisible}
        setIsErrorMessageVisible={setIsErrorMessageVisible}
      />
      <ErrorMessage
        selectedRating={selectedRating}
        isErrorMessageVisible={isErrorMessageVisible}
      />
    </div>
  )
}
