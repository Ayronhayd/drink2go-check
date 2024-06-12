window.addEventListener('load', () => {
  const button = document.querySelector('.js-burger');
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
