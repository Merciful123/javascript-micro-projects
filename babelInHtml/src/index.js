const planetsList = document.querySelector('#planets');

const planetIcon = str => `💫  ${str}`;
const sentenceCase = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const planets = [
  'mercury',
  'venus',
  'earth',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
];
