import React from "react";

const WordDisplay = ({ word, guessedLetters }) => {
  const displayedWord = word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  return <div>{displayedWord}</div>;
};

export default WordDisplay;
