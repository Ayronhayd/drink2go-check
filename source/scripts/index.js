// burger
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

// slider

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.hero__card');
  const items = carousel.querySelectorAll('.hero__card-item');
  const dotsContainer = document.querySelector('.slider-pagination');

  // Insert dots into the DOM
  items.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) {
      dot.classList.add('active');
    }
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove('hero__card-item-active');
      dots[idx].classList.remove('active');
      if (idx === index) {
        item.classList.add('hero__card-item-active');
        dots[idx].classList.add('active');
      }
    });
  }

  // Event listeners for buttons
  document.querySelector('.slider-button-next').addEventListener('click', () => {
    const index = [...items].findIndex((item) =>
      item.classList.contains('hero__card-item-active')
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector('.slider-button-prev').addEventListener('click', () => {
    const index = [...items].findIndex((item) =>
      item.classList.contains('hero__card-item-active')
    );
    showItem((index + 1) % items.length);
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index, 10);
      showItem(index);
    });
  });
});


// range
const rangeSliderInit = () => {
  // создаем функцию инициализации слайдера
  const range = document.querySelector('.range'); // Ищем слайдер
  const inputMin = document.querySelector('.filter__range-min'); // Ищем input с меньшим значнием
  const inputMax = document.querySelector('.filter__range-max'); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) {
    return;
  } // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  noUiSlider.create(range, {
    // инициализируем слайдер
    start: [0, 900], // устанавливаем начальные значения
    connect: true, // указываем что нужно показывать выбранный диапазон
    range: {
      // устанавливаем минимальное и максимальное значения
      min: 0,
      max: 1000,
    },
    step: 1, // шаг изменения значений
  });

  range.noUiSlider.on('update', (values, handle) => {
    // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle], 10);
  });

  inputMin.addEventListener('change', function () {
    // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () {
    // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
  });
};

const init = () => {
  rangeSliderInit(); // запускаем функцию инициализации слайдера
};

window.addEventListener('DOMContentLoaded', init); // запускаем функцию init, когда документ будет загружен и готов к взаимодействию
