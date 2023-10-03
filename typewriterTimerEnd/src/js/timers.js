let typeWriterTimer;
let loopThroughTimer;

export const typeWriter = function (str, sel, typeDelay = 10) {
  clearTimeout(typeWriterTimer);
  sel.innerHTML = '';
  let breakApart = str.split('').map((e) => e.replace(/\n/g, '<br>'));
  let count = 0;
  return function timer() {
    sel.innerHTML += breakApart[count];
    count++;
    count < breakApart.length &&
      (typeWriterTimer = setTimeout(timer, typeDelay));
  };
};

export const loopThrough = function (arr, sel, fn, hold = 5000, typeDelay) {
  let count = 0;
  return {
    play: function timer() {
      fn(arr[count], sel, typeDelay)();
      count++;
      count >= arr.length && (count = 0);
      loopThroughTimer = setTimeout(timer, hold);
    },
    stop: function () {
      clearTimeout(loopThroughTimer);
    },
  };
};
