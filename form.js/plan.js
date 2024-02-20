const yourPlan = [...document.querySelectorAll('.selectPlate__plan')];
const toggle = document.querySelector('.selectPlate__toggle');
// wybór planu//
yourPlan.forEach((e) => {
  e.addEventListener('click', function (e) {
    yourPlan.forEach((clean) => clean.classList.remove('selectPlate__active'));
    e.target.classList.add('selectPlate__active');
  });
});

toggle.addEventListener('click', () => {
  toggle.classList.toggle('selectPlate__toggle--active');
});
