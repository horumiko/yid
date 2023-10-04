const blocks = document.querySelectorAll('.drop__block');

blocks.forEach((block) => {
  block.onmousedown = function (event) {
    block.style.transition = '0s';
    let shiftX = event.clientX - block.getBoundingClientRect().left;
    let shiftY = event.clientY - block.getBoundingClientRect().top;
    zIndex = block.style.zIndex;
    block.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      block.style.left = pageX - shiftX + 'px';
      block.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    block.addEventListener('mousemove', onMouseMove);

    document.onmouseup = function () {
      block.removeEventListener('mousemove', onMouseMove);
      block.style.zIndex = zIndex;
      block.onmouseup = null;
    };
  };

  block.ondragstart = function () {
    return false;
  };
});

blocks.forEach((block) => {
  block.addEventListener('touchstart', (event) => {
    event.preventDefault();
    block.style.transition = '0s';
    console.log(event.touches);
    let shiftX = event.touches[0].clientX - block.getBoundingClientRect().left;
    let shiftY = event.touches[0].clientY - block.getBoundingClientRect().top;
    zIndex = block.style.zIndex;
    block.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      block.style.left = pageX - shiftX + 'px';
      block.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.touches[0].pageX, event.touches[0].pageY);
    }

    block.addEventListener('touchmove', onMouseMove);

    block.addEventListener('ontouchend', () => {
      block.removeEventListener('touchmove', onMouseMove);
      block.style.zIndex = zIndex;
      block.onmouseup = null;
    });

    block.ondragstart = function () {
      return false;
    };
  });
});

window.onload = function () {
  if (window.matchMedia('(min-width: 1681px)').matches) {
    blocks[0].style.top = '260px';
    blocks[1].style.top = '378px';
    blocks[2].style.top = '520px';
  } else if (window.matchMedia('(max-width: 550px)').matches) {
    blocks[0].style.top = '180px';
    blocks[1].style.top = '210px';
    blocks[2].style.top = '250px';
  } else if (window.matchMedia('(max-width: 750px)').matches) {
    blocks[0].style.top = '200px';
    blocks[1].style.top = '240px';
    blocks[2].style.top = '295px';
  } else if (window.matchMedia('(max-width: 900px)').matches) {
    blocks[0].style.top = '220px';
    blocks[1].style.top = '275px';
    blocks[2].style.top = '345px';
  } else if (window.matchMedia('(max-width: 1200px)').matches) {
    blocks[0].style.top = '240px';
    blocks[1].style.top = '305px';
    blocks[2].style.top = '385px';
  } else if (window.matchMedia('(max-width: 1360px)').matches) {
    blocks[0].style.top = '260px';
    blocks[1].style.top = '345px';
    blocks[2].style.top = '460px';
  } else if (window.matchMedia('(max-width: 1680px)').matches) {
    blocks[0].style.top = '260px';
    blocks[1].style.top = '358px';
    blocks[2].style.top = '490px';
  }
};

const slider = document.querySelector('.slider-items');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

right.addEventListener('click', () => {
  if (window.matchMedia('(max-width: 450px)').matches) {
    swipe(left, right, -320, -1280);
  }
  if (window.matchMedia('(max-width: 880px)').matches) {
    swipe(left, right, -426, -1704);
  }
  if (window.matchMedia('(max-width: 1320px)').matches) {
    swipe(left, right, -426, -1278);
  }
  if (window.matchMedia('(min-width: 1321px)').matches) {
    swipe(left, right, -426, -852);
  }
});

left.addEventListener('click', () => {
  if (window.matchMedia('(min-width: 451px)').matches) {
    swipe(right, left, 426, 0);
  } else {
    swipe(right, left, 320, 0);
  }
});

function swipe(elem1, elem2, px, screen) {
  elem1.removeAttribute('disabled');
  slider.style.left = +slider.style.left.split('px')[0] + px + 'px';

  if (+slider.style.left.split('px')[0] === screen) {
    elem2.setAttribute('disabled', 'disabled');
  }
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', (e) => {
  e.preventDefault();
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((e) => {
  e.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
  });
});

let curLang = 'ru';
const lang = document.querySelectorAll('.lang');

function changeLanguage(curLang) {
  if (curLang === 'ru') {
    lang.forEach((e, i) => {
      e.textContent = ruLang[i];
    });
  } else {
    lang.forEach((e, i) => {
      e.textContent = enLang[i];
    });
  }
}

document.querySelector('.ru').addEventListener('click', (e) => {
  e.preventDefault();
  curLang = 'ru';
  changeLanguage(curLang);
});

document.querySelector('.en').addEventListener('click', (e) => {
  e.preventDefault();
  curLang = 'en';
  changeLanguage(curLang);
});

const table = document.querySelector('.table');
const tableBody = document.querySelector('tbody');
const pButtons = document.querySelectorAll('.program__button');
let currentDay = 0;

pButtons.forEach((e, i) => {
  e.addEventListener('click', (t) => {
    t.preventDefault();
    pButtons.forEach((r) => {
      r.classList.remove('active');
    });
    e.classList.toggle('active');
    currentDay = i;
    createTable(currentDay);
  });
});

function createTable(currentDay) {
  const currentProgram = events[currentDay];
  removeChild(tableBody);

  if (window.matchMedia('(max-width: 500px)').matches) {
    if (document.querySelector('thead')) document.querySelector('thead').remove();
    for (let el of currentProgram) {
      createMobileRow(el);
    }
  } else {
    for (let el of currentProgram) {
      createRow(el);
    }
  }
}

createTable(currentDay);

function createRow(eventRow) {
  const row = document.createElement('tr');
  for (let key in eventRow) {
    const td = document.createElement('td');
    td.textContent = eventRow[key];
    row.append(td);
  }
  tableBody.append(row);
}

function removeChild(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function createMobileRow(eventRow) {
  const row = document.createElement('tr');
  const td = document.createElement('td');
  for (let key in eventRow) {
    const div = document.createElement('div');
    div.textContent = eventRow[key];
    td.append(div);
  }
  row.append(td);
  tableBody.append(row);
}
