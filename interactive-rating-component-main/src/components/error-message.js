import React, { useState } from "react";

export default function ErrorMessage(props) {
  const { selectedRating, isErrorMessageVisible } = props;

  return (
    <div className={`error-message-container ${isErrorMessageVisible && !selectedRating ? 'appear' : 'hide'}`}>
      <p className='overpass-400'>Please select a rating before submitting.</p>
    </div>
  )
}
