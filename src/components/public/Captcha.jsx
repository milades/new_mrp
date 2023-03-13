import React, { useState } from "react";

const App = () => {
  let captchaMatched = false;

  const handleSuccess = () => {
    captchaMatched = true;
  };

  const handleFailure = () => {
    captchaMatched = false;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (captchaMatched) {
      alert("Form submitted successfully...");
    } else {
      alert("Submission failed! Captcha did not match...");
    }
  };
  return <div></div>;
};
export default App;
