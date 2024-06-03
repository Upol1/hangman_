import React from "react";
import "./App.css";
import HangmanGame from "./components/HangmanGame";

export default function App() {
  return (
    <div>
      <h2>ВИСЕЛИЦА</h2>
      <HangmanGame word="JavaScript" maxAttempts={6} />
    </div>
  );
}
