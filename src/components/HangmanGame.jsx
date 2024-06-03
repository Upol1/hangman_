import React, { useState } from "react";
import WordDisplay from "./WordDisplay";
import LetterInput from "./LetterInput";

const HangmanGame = ({ maxAttempts }) => {
  const words = [
    "JavaScript",
    "Автомобиль",
    "Книга",
    "Монитор",
    "Кофе",
    "Ручка",
    "Домашний",
    "Компьютер",
    "Яблоко",
    "Солнце",
    "Котенок",
  ];
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(maxAttempts);

  const handleLetterSubmit = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.toLowerCase().includes(letter)) {
        setAttemptsLeft(attemptsLeft - 1);
      }
    }
  };

  const gameWon = word
    .toLowerCase()
    .split("")
    .every((letter) => guessedLetters.includes(letter.toLowerCase()));
  const gameLost = attemptsLeft === 0;

  return (
    <div>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <LetterInput onLetterSubmit={handleLetterSubmit} />
      <div>Осталось попыток : {attemptsLeft}</div>
      {gameWon && <div>Ты выиграл(а)!</div>}
      {gameLost && <div>Ты проиграл(а)! Слово было: {word}</div>}
    </div>
  );
};

export default HangmanGame;
