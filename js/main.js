const buttons = document.querySelector('.array-methods');
const spanElements = document.querySelectorAll('.methods__emoji');
const arrayMain = document.querySelector('.array-wrapper__main');
const arrEmojis = [];
let emojiDom;
addPushEmoji(arrEmojis);

buttons.addEventListener(
  'click',
  e => {
    if (e.target.closest('#push')) {
      push(arrEmojis, emojiDom);
    }
    if (e.target.closest('#unshift')) {
      unshift(arrEmojis, emojiDom);
    }
    if (e.target.closest('#pop')) {
      pop(arrEmojis);
    }
    if (e.target.closest('#shift')) {
      shift(arrEmojis);
    }
    if (e.target.closest('#splice')) {
      shift(arrEmojis);
    }
    if (e.target.closest('.methods__btn')) {
      addPushEmoji(arrEmojis);
      render(arrEmojis);
    }
  },
  true
);

function randomEmoji() {
  const arrEmojis = [
    '🍏',
    '🍎',
    '🍐',
    '🍊',
    '🍋',
    '🍌',
    '🍉',
    '🍇',
    '🍓',
    '🍈',
    '🍒',
    '🍑',
    '🥭',
    '🍍',
    '🥥',
    '🥝',
    '🍅',
    '🥑',
    '🍆',
    '🥒',
    '🥬',
    '🥦',
    '🧄',
    '🧅',
    '🌽',
    '🥕',
    '🥔',
    '🍠',
    '🌰',
  ];
  const randomNum = Math.floor(Math.random() * (arrEmojis.length - 1)) + 1;
  const Emoji = arrEmojis[randomNum];
  return Emoji;
}

function addPushEmoji(arr) {
  const emoji = randomEmoji();
  spanElements.forEach(e => (e.textContent = `${emoji}`));
  emojiDom = emoji;
}

function push(arr, emoji) {
  arr.push(emoji);
}

function unshift(arr, emoji) {
  arr.unshift(emoji);
}

function pop(arr, emoji) {
  arr.pop();
}

function shift(arr) {
  arr.shift();
}

function render(arr) {
  let sumDom = ``;
  arr.forEach((item, index) => {
    const dom = `<div class="array-wrapper__item">${
      index !== arr.length - 1 ? item + ',' : item
    }</div>`;
    sumDom += dom;
  });
  arrayMain.innerHTML = sumDom;
}
