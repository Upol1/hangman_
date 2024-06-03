import React, { useState } from "react";

const LetterInput = ({ onLetterSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      onLetterSubmit(inputValue);
      onLetterSubmit(inputValue);

      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength={1}
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите букву"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LetterInput;
