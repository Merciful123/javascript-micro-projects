const planetsList = document.querySelector('#planets');

const planetIcon = str => `💫 ${str}`;
const upperCase = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

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

planets.forEach(planet => {
  planetsList.innerHTML += `<li>${planet |> upperCase |> planetIcon}</li>`;
});
