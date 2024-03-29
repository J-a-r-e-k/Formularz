//Wypełnianie pól zmiennych z tablicy start //

const monyInput = [
  [...document.querySelectorAll('.arrayPlan-mony')],
  [...document.querySelectorAll('.addOns-mony')],
];
let nameSwitch;
let totalPer;
let totalPeriod;
// Sprawdzenie wybranego plany rozliczenia i dodanie odpowiednich cen. //
//Check the selected settlement plan and add the appropriate prices.//
const array = () => {
  if (toggle.className === 'selectPlate__toggle selectPlate__toggle--active') {
    planLengh = Yearly;
    nameSwitch = true;
  } else {
    planLengh = monthly;
    nameSwitch = false;
  }

  const addPeriod = () => {
    const arrayPeriod = [...document.querySelectorAll('.form__period')];
    if (nameSwitch === true) {
      totalPer = '/yr';
      totalPeriod = 'year';
    } else {
      totalPer = '/mo';
      totalPeriod = 'month';
    }
    arrayPeriod.forEach((e) => (e.textContent = totalPer));
  };

  addPeriod();

  monyInput.forEach((e) => {
    // Określenie nr STEP i dodanie odpowiedniej tablicy do STEP
    const indexPlan = monyInput.indexOf(e);

    monyInput[indexPlan].forEach((i) => {
      const indexStep = monyInput[indexPlan].indexOf(i);

      // Sprawdzenie indexu i dodanie odpowiedniej tablicy
      if (indexPlan === 0) {
        i.textContent = planLengh[0].plan[indexStep];
      } else if (indexPlan === 1) {
        i.textContent = planLengh[1].addOns[indexStep];
      }
    });
  });
};

array();
