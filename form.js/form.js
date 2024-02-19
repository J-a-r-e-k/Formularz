const btnNext = document.querySelector('.form__btn--next');
const btnBack = document.querySelector('.form__btn--back');
const btnSubmin = document.querySelector('.form__btn--submin');
const btnAll = document.querySelectorAll('.form__btn');
const arrayPlate = document.querySelectorAll('.form__plate');
const arrayNumber = document.querySelectorAll('.navigation__number');

let numberStep = 0;

const btn = () => {
  console.log(btnAll);
  btnAll.forEach((e) => (e.style.display = 'none'));
  if (numberStep >= 0 && numberStep < 3) {
    btnNext.style.display = 'block';
  } else {
    btnSubmin.style.display = 'block';
  }
  if (numberStep >= 1 && numberStep <= 3) {
    btnBack.style.display = 'block';
  }
};
btn();

const next = () => {
  arrayNumber.forEach((e) => e.classList.remove('navigation--active'));
  if (numberStep >= 0 && numberStep < 3) {
    numberStep++;
  }
  arrayNumber[numberStep].classList.add('navigation--active');
  btn();
};
const back = () => {
  arrayNumber.forEach((e) => e.classList.remove('navigation--active'));
  if (numberStep > 0 && numberStep <= 3) {
    numberStep--;
  }
  arrayNumber[numberStep].classList.add('navigation--active');
  btn();
};

// const next = () => {
//   console.log(arrayPlate);
//   arrayPlate.forEach((e) => {
//     e.classList.add('active');
//     // e.style.display = none;
//   });
// };

btnNext.addEventListener('click', next);
btnBack.addEventListener('click', back);
