import React, { useState } from "react";
import { EmailSended } from "./EmailSended/EmailSended";
import { FormResetPass } from "./FormResetPass/FormResetPass";

export const ResetPassword = () => {
  const [inputValue, setInputValue] = useState("");
  const [emailSended, setEmailSended] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailSended(true);
  };

  return (
    <div>
      {!emailSended ? (
        <FormResetPass
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <EmailSended inputValue={inputValue} />
      )}
    </div>
  );
};
