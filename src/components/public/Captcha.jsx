import React, { useState } from "react";
import ReactCaptcha from "modern-react-captcha";
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
  return (
    <ReactCaptcha
      charset="l/L"
      length={6}
      color="white"
      bgColor="black"
      reload={true}
      reloadText="Reload Captcha"
      //reloadIcon={reloadIcon}
      handleSuccess={handleSuccess}
      handleFailure={handleFailure}
    />
  );
};
export default App;
