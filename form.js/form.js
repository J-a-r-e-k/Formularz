const btnNext = document.querySelector('.form__btn--next');
const btnBack = document.querySelector('.form__btn--back');
const btnSubmin = document.querySelector('.form__btn--submin');
const btnAll = document.querySelectorAll('.form__btn');
const arrayPlate = document.querySelectorAll('.form__plate');
const arrayNumber = document.querySelectorAll('.navigation__number');
const inputValue = [...document.querySelectorAll('.form__section input')];
const requier = [...document.querySelectorAll('.yourInfo__requier')];

let numberStep = 0;

const btn = () => {
  btnAll.forEach((e) => (e.style.display = 'none'));
  if (numberStep >= 0 && numberStep <= 3) {
    btnNext.style.display = 'block';
    if (numberStep < 3) {
      btnNext.textContent = 'Next Step';
    } else {
      btnNext.textContent = 'Confirm';
    }
  }
  if (numberStep >= 1 && numberStep <= 3) {
    btnBack.style.display = 'block';
  }
  arrayPlate.forEach((e) => (e.style.display = 'none'));
  arrayPlate[numberStep].style.display = 'block';
  arrayNumber.forEach((e) => e.classList.remove('navigation--active'));
  arrayNumber[numberStep].classList.add('navigation--active');
};
btn();

const next = (e) => {
  e.preventDefault();
  requier.forEach((e) => (e.textContent = ''));
  inputValue.forEach((e, i) => {
    e.style.borderColor = '#777';
    if (inputValue[i].value === '') {
      requier[i].textContent = `Requires ${inputValue[i].name}`;
      inputValue[i].style.borderColor = 'red';
    }
  });

  const personInfo = inputValue.every((e) => e.value.trim() !== '');
  if (!personInfo) {
    // requier.forEach((e) => (e.textContent = 'This field is required'));
    return;
  }

  if (numberStep >= 0 && numberStep < 3) {
    numberStep++;
  }
  btn();
};
const back = (e) => {
  e.preventDefault();

  if (numberStep > 0 && numberStep <= 3) {
    numberStep--;
  }
  btn();
};

btnNext.addEventListener('click', next);
btnBack.addEventListener('click', back);
