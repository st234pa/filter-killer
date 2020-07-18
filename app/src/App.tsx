import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FilterKiller from './components/FilterKiller';
import './App.css';

export type ContentCallback = {
  (text: string): void;
};

export type ButtonCallback = {
  (): void;
};

// Function to generate random number between min and max, both inclusive
function randomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomCharacter() {
  const charCode = randomNumber(33, 47); // non-alphanumeric char code
  return String.fromCharCode(charCode);
}

function addRandomizedCharacter(word: string) {
  let randomizedWord = '';
  const splitByPunctuation = word.split(/([.,\/#!$%\^&\*;:{}=\-_`~()"'])/);
  splitByPunctuation.forEach((value) => {
    console.log(value);
  });
  if (word.length < 2) {
    return word;
  }
  const randomIndex = randomNumber(1, word.length - 1);
  return (
    word.substring(0, randomIndex) +
    randomCharacter() +
    word.substring(randomIndex, word.length)
  );
}

export function addRandomizedCharacters(content: string) {
  const words = content.split(' ');
  let randomizedContent = '';
  words.forEach((value) => {
    randomizedContent += addRandomizedCharacter(value) + ' ';
  });
  return randomizedContent;
}

function App() {
  return (
    <Router>
      <FilterKiller />
    </Router>
  );
}

export default App;
