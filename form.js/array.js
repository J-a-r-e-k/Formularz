
const monyInput = [
  [...document.querySelectorAll('.arrayPlan-mony')],
  [...document.querySelectorAll('.addOns-mony')],
];

// Sprawdzenie wybranego plany rozliczenia i dodanie odpowiednich cen. //
//Check the selected settlement plan and add the appropriate prices.//
const array = () => {
  if (toggle.className === 'selectPlate__toggle selectPlate__toggle--active') {
    planLengh = Yearly;
  } else {
    planLengh = monthly;
  }

  monyInput.forEach((e) => {
    // Określenie nr STEP i dodanie odpowiedniej tablicy do STEP
    const indexPlan = monyInput.indexOf(e);
    // console.log(indexPlan); XX
    monyInput[indexPlan].forEach((i) => {
      const indexStep = monyInput[indexPlan].indexOf(i);

      // Sprawdzenie indexu i dodanie odpowiedniej tablicy
      if (indexPlan === 0) {
        i.textContent = planLengh[0].plan[indexStep];
        // console.log(princePlan);
      } else if (indexPlan === 1) {
        i.textContent = planLengh[1].addOns[indexStep];
      }
    });
  });
};
array();
