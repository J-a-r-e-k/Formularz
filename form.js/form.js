const btnNext = document.querySelector('.form__btn--next');
const btnBack = document.querySelector('.form__btn--back');
const btnAll = document.querySelectorAll('.form__btn');
const arrayPlate = document.querySelectorAll('.form__plate');
const arrayNumber = [...document.querySelectorAll('.navigation__number')];
const inputValue = [...document.querySelectorAll('.form__section input')];
const requier = [...document.querySelectorAll('.yourInfo__requier')];

let numberStep = 0;
// przełączanie STEPS form //
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
  // wyczyszczenie widoku. Wyświetlenie zgodnego z indeksem na który przełączono//
  arrayPlate.forEach((e) => (e.style.display = 'none'));

  // arrayPlate[numberStep].style.display = 'block';
  arrayPlate[3].style.display = 'block';
  // XX;

  // Sprawdza STEPS : wyświetlenie w panelu kroku/ lub wyłączenie go.
  if (numberStep === 4) {
    arrayNumber.forEach((i) => (i.parentElement.style.display = 'none'));
  } else {
    arrayNumber.forEach((e) => e.classList.remove('navigation--active'));
    arrayNumber[numberStep].classList.add('navigation--active');
  }
};
btn();
const next = (e) => {
  //wyłączenie odswiezania submit
  e.preventDefault();
  // wyświetlenie niezgodności wpisu w formularz//
  requier.forEach((e) => (e.textContent = ''));
  inputValue.forEach((e, i) => {
    e.style.borderColor = '#777';
    if (inputValue[i].value === '') {
      requier[i].textContent = `Requires ${inputValue[i].name}`;
      inputValue[i].style.borderColor = 'red';
    }
  });

  //Sprawdzenie i zatrzymanie funkcji gdy formularz jest pusty //
  //!!//
  // const personInfo = inputValue.every((e) => e.value.trim() !== '');
  // if (!personInfo) {
  //   return;
  // }
  //!!//

  // Zwiekszanie Indeksu STEPS ++ //
  if (numberStep >= 0 && numberStep < 4) {
    numberStep++;
  }
  btn();
};
// Zmniejszanie Indeksu STEPS -- //
const back = (e) => {
  e.preventDefault();
  if (numberStep > 0 && numberStep <= 3) {
    numberStep--;
  }
  btn();
};

btnNext.addEventListener('click', next);
btnBack.addEventListener('click', back);
