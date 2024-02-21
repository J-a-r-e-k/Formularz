const addOns = [...document.querySelectorAll('.addOns__pick')];
const check = document.querySelectorAll('.far');

// Check ON / OFF
addOns.forEach((add) => {
  const index = addOns.indexOf(add);
  add.addEventListener('click', () => {
    add.classList.toggle('addOns__pick--active');

    // Wymiana Ikony Check
    if (check[index].className === 'far fa-check-square') {
      check[index].classList = 'far fa-square';
    } else {
      check[index].classList = 'far fa-check-square';
    }
  });
});
