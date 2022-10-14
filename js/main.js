const buttons = document.querySelector('.array-methods');
const spanElements = document.querySelectorAll('.methods__emoji');
const arrayMain = document.querySelector('.array-wrapper__main');
const arrayReturn = document.querySelector('.array-wrapper_return');
const arrEmojis = [];
let emojiDom;
addPushEmoji(arrEmojis);

buttons.addEventListener('click', e => {
  if (e.target.closest('input')) {
    return;
  }

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
    splice(arrEmojis, e);
  }

  if (e.target.closest('#slice')) {
    slice(arrEmojis, e);
  }
  if (e.target.closest('#indexOf')) {
    indexOf(arrEmojis, e);
  }
  if (e.target.closest('#includes')) {
    includes(arrEmojis, e);
  }
  if (e.target.closest('#sort')) {
    sort(arrEmojis);
  }
  if (e.target.closest('#reverse')) {
    reverse(arrEmojis);
  }
  if (e.target.closest('#join')) {
    join(arrEmojis, e);
  }
  if (e.target.closest('#fill')) {
    fill(arrEmojis, e);
  }

  if (e.target.closest('.methods__btn')) {
    addPushEmoji(arrEmojis);
    render(arrEmojis);
  }
});

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
  const returnString = arr.push(emoji);
  const methods = 'Длина массива:';
  renderReturnString(returnString, methods);
}

function unshift(arr, emoji) {
  const returnString = arr.unshift(emoji);
  const methods = 'Длина массива:';
  renderReturnString(returnString, methods);
}

function pop(arr, emoji) {
  const returnString = arr.pop();
  const methods = 'Удалённый элемент:';
  renderReturnString(returnString, methods);
}

function shift(arr) {
  const returnString = arr.shift();
  const methods = 'Удалённый элемент:';
  renderReturnString(returnString, methods);
}

function splice(arr, element) {
  const inputAll = element.target.closest('#splice').querySelectorAll('input');
  const arrValue = [];

  inputAll.forEach(input => {
    input.value !== '' && arrValue.push(input.value);
    input.value = '';
  });
  if (arrValue.length == 2) {
    const newArr = arr.splice(arrValue[0], arrValue[1]);
    renderReturnArr(newArr);
  } else {
    alert(`В методе отсутствует элемент`);
  }
}

function slice(arr, element) {
  const inputAll = element.target.closest('#slice').querySelectorAll('input');
  const arrValue = [];

  inputAll.forEach(input => {
    input.value !== '' && arrValue.push(input.value);
    input.value = '';
  });
  if (arrValue.length == 2) {
    const newArr = arr.slice(arrValue[0], arrValue[1]);
    renderReturnArr(newArr);
  }
  if (arrValue.length == 1) {
    const newArr = arr.slice(arrValue[0]);
    renderReturnArr(newArr);
  }
  if (arrValue.length == 0) alert(`В методе отсутствует элемент`);
}

function indexOf(arr, element) {
  const input = element.target.closest('#indexOf').querySelector('input');
  const returnString = arr.indexOf(input.value);
  const methods = 'Индекс массива:';
  renderReturnString(returnString, methods);
  input.value = '';
}

function includes(arr, element) {
  const input = element.target.closest('#includes').querySelector('input');
  const returnString = arr.includes(input.value);
  const methods = 'Значение:';
  renderReturnString(returnString, methods);
  input.value = '';
}

function sort(arr) {
  const newArr = arr.sort();
  renderReturnArr(newArr);
}

function reverse(arr) {
  const newArr = arr.reverse();
  renderReturnArr(newArr);
}

function join(arr, element) {
  const input = element.target.closest('#join').querySelector('input');
  const returnString = arr.join(input.value);
  const methods = 'Строка:';
  renderReturnString(returnString, methods);
  input.value = '';
}

function fill(arr, element) {
  const input = element.target.closest('#fill').querySelector('input');
  const newArr = arr.fill(input.value);
  renderReturnArr(newArr);
  input.value = '';
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

function renderReturnArr(arr) {
  let sumDom = ``;
  arr.forEach((item, index) => {
    const dom = `<div class="array-wrapper__item array-wrapper__item_small">${
      index !== arr.length - 1 ? item + ',' : item
    }</div>`;
    sumDom += dom;
  });
  arrayReturn.innerHTML = `
<div class="array-wrapper__open array-wrapper__open_small"></div>
  <div class="array-wrapper__main">${sumDom}</div>
<div class="array-wrapper__closed array-wrapper__closed_small"></div>`;
}

function renderReturnString(string, methods) {
  arrayReturn.innerHTML = `
<div class="array-wrapper__main">
  <div class="array-wrapper__item array-wrapper__item_string">${methods} ${string}</div>
</div>`;
}
