const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const bg = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=>{
  bg.classList.toggle('menu--open');
  menuList.classList.toggle('menu__list--open');
});

menuClose.addEventListener('click', ()=>{
  bg.classList.remove('menu--open');
  menuList.classList.remove('menu__list--open');
});