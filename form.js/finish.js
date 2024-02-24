



const sumPlan = document.querySelector('.success__Your-change');
const sumPrice = document.querySelector('.summary__sum--selectPlate')
  .childNodes[1];
const sumUp = document.querySelector('.summary__up--add');

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
  let totalPrice = princePlan; // dodawanie ceny wszystkich elementów

  // Pobieranie nazw i cen zaznaczonych elementów
  addOns_active.forEach((e) => {
    nameAddOns.push(e.childNodes[3].childNodes[1].textContent); // Nazwa
    priceAddOns.push(e.childNodes[5].childNodes[1].textContent); // Cena
  });
  const longAddOns = nameAddOns.length; // liczba zaznaczonych elementów dodatkowych
  //Dodawanie do wyświetlenia dodatkowo zaznaczonych opcji //
  sumUp.textContent = '';
  for (let i = 0; i < longAddOns; i++) {
    const sumDiv = document.createElement('div');
    sumDiv.innerHTML = `<p class="summary__description">${nameAddOns[i]}</p>
     <p class="summary__sum">+$${priceAddOns[i]}<span class="form_mony form__period"></span></p>`;
    sumUp.appendChild(sumDiv);
    totalPrice = totalPrice + Number(priceAddOns[i]);
  }
  array();

  // Wyświetlanie podusmowania //
  sumPlan.textContent = `${namePlan}(${longPlan})`;
  sumPrice.textContent = princePlan;
  document.querySelector(
    '.summary__sum--period'
  ).textContent = ` ${longPlan.toLocaleLowerCase()}`;
  document.querySelector(
    '.summary__sum--total'
  ).textContent = `$${totalPrice}/${longPlan.toLocaleLowerCase()}`;
};
finishing();
