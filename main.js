const toggleBtn = document.querySelector('.navbar__toggleBtn');
const search = document.querySelector('.navbar__search');
const menu = document.querySelector('.navbar__menu');
const personal = document.querySelector('.navbar__personal');

toggleBtn.addEventListener('click', ()=>{
  search.classList.toggle('active');
  menu.classList.toggle('active');
  personal.classList.toggle('active');
});