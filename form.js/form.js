const btnNext = document.querySelector('.form__btn--next');
const btnBack = document.querySelector('.form__btn--back');
const btnAll = document.querySelectorAll('.form__btn');
const arrayPlate = document.querySelectorAll('.form__plate');
const arrayStep = [...document.querySelectorAll('.navigation__step')];
const arrayNumber = [...document.querySelectorAll('.navigation__number')];
const inputValue = [...document.querySelectorAll('.form__section input')];
const requier = [...document.querySelectorAll('.yourInfo__requier')];
const summaryChange = document.querySelector('.summary__correct');

let numberStep = 0;
let indexStep = 0;
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

  arrayPlate[numberStep].style.display = 'block';
  // arrayPlate[0].style.display = 'block';
  // XX;

  // Sprawdza STEPS : wyświetlenie w panelu kroku/ lub wyłączenie go.
  if (numberStep === 4) {
    arrayNumber.forEach((i) => (i.parentElement.style.display = 'none'));
  } else {
    arrayNumber.forEach((e) => e.classList.remove('navigation--active'));
    arrayNumber[numberStep].classList.add('navigation--active');
  }
  arrayStep[indexStep].style.cursor = 'pointer'; // Dodanie "Pointer" na aktywne NR Postępu //
};
btn();

// Kliknięcie Nr postępu przenosi do edytowania tego kroku o ile wcześniej został już wykonany//
arrayStep.forEach((e) => {
  e.addEventListener('click', () => {
    if (indexStep >= arrayStep.indexOf(e)) {
      numberStep = arrayStep.indexOf(e);
    }
    btn();
  });
});

const next = (e) => {
  //wyłączenie odświeżania submit
  e.preventDefault();
  console.log(inputValue[0].value.trim());
  console.log(inputValue[1].value);
  console.log(inputValue[2].value);
  const regName = /^[a-zA-Z]+(\s+[a-zA-z]+){1,3}?$/;
  const regEmail =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  const regNr = /^([+]\d{2})?[- ](\d{3})[- ]?(\d{3})[- ]?(\d{3})$/;
  const testName = regName.test(inputValue[0].value.trim());
  const testNR = regNr.test(inputValue[2].value.trim());
  const testEmail = regEmail.test(inputValue[1].value.trim());

  // wyświetlenie niezgodności wpisu w formularz//
  requier.forEach((e) => (e.textContent = ''));
  inputValue.forEach((e, i) => {
    e.style.borderColor = '#777';
    if (inputValue[i].value.trim() === '') {
      requier[i].textContent = `Requires ${inputValue[i].name}`;
      inputValue[i].style.borderColor = 'red';
    } else {
      if (!testNR) {
        requier[2].textContent = `Invalid format nrPhone`;
        inputValue[2].style.borderColor = 'red';
      }
      if (!testEmail) {
        requier[1].textContent = `Invalid format Email`;
        inputValue[1].style.borderColor = 'red';
      }
      if (!testName) {
        requier[0].textContent = `Invalid format Name`;
        inputValue[0].style.borderColor = 'red';
      }
    }
  });

  //Sprawdzenie i zatrzymanie funkcji gdy formularz jest pusty //
  //!!//
  const personInfo = inputValue.every((e) => e.value.trim() !== '');
  if (!personInfo) {
    return;
  }
  //!!//

  // Zwiekszanie Indeksu STEPS ++ //
  if (numberStep >= 0 && numberStep < 4) {
    numberStep++;

    if (indexStep + 1 === numberStep) {
      indexStep++;
    }
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
summaryChange.addEventListener('click', () => {
  numberStep = 1;
  btn();
});
