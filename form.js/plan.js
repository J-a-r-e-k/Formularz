const yourPlan = [...document.querySelectorAll('div.selectPlate__plan')];
const toggle = document.querySelector('.selectPlate__toggle');

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
