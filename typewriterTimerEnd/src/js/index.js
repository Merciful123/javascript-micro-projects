import { quotes } from './quotes';
import { typeWriter, loopThrough } from './timers';

const main = document.querySelector('#quotemaster > h1');
const playBtn = document.querySelector('#playBtn');
const playControl = loopThrough(quotes, main, typeWriter, 4000, 10);

let isPlaying = true;

playBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  isPlaying ? playControl.stop() : playControl.play();
  isPlaying = !isPlaying;
});

playControl.play();
