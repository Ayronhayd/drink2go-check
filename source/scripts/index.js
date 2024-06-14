window.addEventListener('load', () => {
  const button = document.querySelector('.js-toggle-button');
  const navMenu = document.querySelector('.js-nav-menu');
  const headerWr = document.querySelector('.header__wrraper');
  const header = document.querySelector('.header');

  navMenu.classList.remove('is-active');
  button.classList.remove('no-js');
  headerWr.classList.remove('no-js');
  navMenu.classList.remove('no-js');
  header.classList.remove('no-js');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    button.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
  });
});

const rangeInput = document.querySelectorAll('.range-input input');
const priceInput = document.querySelectorAll('.price-input input');
const range = document.querySelector('.slider .progress');

const priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    const minPrice = parseInt(priceInput[0].value);
    const maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === 'input-min') {
        rangeInput[0].value = minPrice;
        range.style.left = `${(minPrice / rangeInput[0].max) * 100 }%`;
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = `${100 - (maxPrice / rangeInput[1].max) * 100 }%`;
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    const minVal = parseInt(rangeInput[0].value);
    const maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range-min') {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = `${(minVal / rangeInput[0].max) * 100 }%`;
      range.style.right = `${100 - (maxVal / rangeInput[1].max) * 100 }%`;
    }
  });
});
