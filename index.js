const checkboxEl = document.querySelector('#checkbox');
const monthlyEl = document.querySelectorAll('.card__amount__monthly');
const annuallyEl = document.querySelectorAll('.card__amount__annually');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    for (let i = 0; i < monthlyEl.length; i++) {
      monthlyEl[i].classList.add('d-block');
      monthlyEl[i].classList.remove('d-none');
      annuallyEl[i].classList.add('d-none');
      annuallyEl[i].classList.remove('d-block');
    }
  } else {
    for (let i = 0; i < monthlyEl.length; i++) {
      monthlyEl[i].classList.add('d-none');
      monthlyEl[i].classList.remove('d-block');
      annuallyEl[i].classList.add('d-block');
      annuallyEl[i].classList.remove('d-none');
    }
  }
});
