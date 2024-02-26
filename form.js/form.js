const btnNext = document.querySelector('.form__btn--next');
const btnBack = document.querySelector('.form__btn--back');
const btnClear = document.querySelector('.yourInfo__clean');
const btnAll = document.querySelectorAll('.form__btn');
const arrayPlate = document.querySelectorAll('.form__plate');
const arrayStep = [...document.querySelectorAll('.navigation__step')];
const arrayNumber = [...document.querySelectorAll('.navigation__number')];
const inputValue = [...document.querySelectorAll('.form__section input')];
const requier = [...document.querySelectorAll('.yourInfo__requier')];
const summaryChange = document.querySelector('.summary__correct');

let numberStep = 0;
let indexStep = 0;
// Przełączanie STEPS form //
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
// Sprawdzanie wypełnienia danych //
const testImput = () => {
  const testReg = [];
  const regName =
    /^[a-zA-Z][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]*(\s+[a-zA-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ]+){1,3}?$/;
  const regEmail =
    /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  const regNr = /^([+]\d{2})?[- ]?(\d{3})[- ]?(\d{3})[- ]?(\d{3})$/;
  testReg.push(regName.test(inputValue[0].value.trim()));
  testReg.push(regEmail.test(inputValue[1].value.trim()));
  testReg.push(regNr.test(inputValue[2].value.trim()));
  const personInfo = testReg.every((e) => e === true); // sprawca czy wsztstkie testy ta prawdziwe
  inputValue.forEach((e, i) => {
    e.style.borderColor = '#777';
    requier[i].textContent = '';
    //włączenie przycisku czyszczacego pola tekstowe//
    if (e.value !== '') {
      btnClear.style.display = 'block';
    }
  });
  if (!personInfo) {
    numberStep = 0;
    indexStep = 0;

    for (i = 0; i < testReg.length; i++) {
      arrayStep[i + 1].style.cursor = 'default';
      if (testReg[i] === false) {
        requier[i].textContent = `Requires ${inputValue[i].name}`;
        inputValue[i].style.borderColor = 'red';
      }
    }
    return;
  }
  btn();
};

// Kliknięcie Nr postępu przenosi do edytowania tego kroku o ile wcześniej został już wykonany//
arrayStep.forEach((e) => {
  e.addEventListener('click', () => {
    if (indexStep >= arrayStep.indexOf(e)) {
      numberStep = arrayStep.indexOf(e);
    }
    testImput();
    // btn();
  });
});
const next = (e) => {
  e.preventDefault();

  // Zwiekszanie Indeksu STEPS ++ //
  if (numberStep >= 0 && numberStep < 4) {
    numberStep++;

    if (indexStep + 1 === numberStep) {
      indexStep++;
    }
  }
  testImput();
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
btnClear.addEventListener('click', () => {
  inputValue.forEach((e) => (e.value = ''));
  btnClear.style.display = 'none';
});
summaryChange.addEventListener('click', () => {
  numberStep = 1;
  btn();
});
