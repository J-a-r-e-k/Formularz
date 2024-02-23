const yourPlan = [...document.querySelectorAll('div.selectPlate__plan')];
const toggle = document.querySelector('.selectPlate__toggle');
let indexClick = 0;
// Dodanie klasy wybrenemu elementowi.
yourPlan.forEach((click) => {
  click.addEventListener(
    'click',
    (addClass = () => {
      yourPlan.forEach((clean) =>
        clean.classList.remove('selectPlate__active')
      );
      click.classList.add('selectPlate__active');
      indexClick = yourPlan.indexOf(click); // index wybranego elementy
      finishing();
    })
  );
});

//Przełącznik monthly / yearly
toggle.addEventListener('click', () => {
  toggle.classList.toggle('selectPlate__toggle--active');
  array();
  toggle.childNodes[5].classList.toggle('toggle__option--active');
  toggle.childNodes[1].classList.toggle('toggle__option--active');
  finishing();
});

// Podsumowanie //
const sumPlan = document.querySelector('.success__Your-change');
const sumPrice = document.querySelector('.summary__sum--selectPlate');
const sumTotal = document.querySelector('.summary__sum--total');
const sumUp = document.querySelector('.summary__up--add');

//

const finishing = () => {
  const princePlan = planLengh[0].plan[indexClick]; // cena w wybranym planie
  const namePlan = yourPlan[indexClick].childNodes[5].childNodes[1].textContent; //Nazwa wybranego planu
  const longPlan = document.querySelector(
    '.toggle__option--active'
  ).textContent; // Okres wybranego planu

  // Pobranie nazw dodatkowo zaznaczonych opcji //
  const addOns_active = [...document.querySelectorAll('.addOns__pick--active')];
  let nameAddOns = []; // Nazwy dodatków
  let priceAddOns = []; // Ceny dodatków
  addOns_active.forEach((e) => {
    nameAddOns.push(e.childNodes[3].childNodes[1].textContent); // Nazwa
    priceAddOns.push(e.childNodes[5].childNodes[1].textContent); // Cena
  });
  const longAddOns = nameAddOns.length; // liczba zaznaczonych elementów dodatkowych

  ///
  // Wyświetlanie podusmowania //
  sumPlan.textContent = `${namePlan}(${longPlan})`;
  sumPrice.textContent = `$${princePlan}/mo`;
  //Dodawanie do wyświetlenia dodatkowo zaznaczonych opcji //
  sumUp.textContent = '';
  for (let i = 0; i < longAddOns; i++) {
    const sumDiv = document.createElement('div');
    sumDiv.innerHTML = `<p class="summary__description">${nameAddOns[i]}</p>
  <p class="summary__sum">+$${priceAddOns[i]}/mo</p>`;
    sumUp.appendChild(sumDiv);
  }
  const aaa = princePlan + 2;
  console.log(aaa);
  console.log(princePlan);
  console.log(typeof princePlan, princePlan);
  console.log(priceAddOns);
  sumTotal.textContent = `$xxx/mo`;
};
finishing();
