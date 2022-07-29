const brandsOpener = document.querySelector(".brands__opener-button");
const brandsContent = document.querySelector(".brands__wrapper");
let openState = false;

brandsOpener.addEventListener('click', function() {
  if (openState) {
    brandsContent.classList.add('brands-hidden');
    brandsOpener.classList.remove('close-opener-bg');
    brandsOpener.textContent = "Показать все"
    openState = false;
  } else {
    brandsContent.classList.remove('brands-hidden');
    brandsOpener.classList.add('close-opener-bg');
    brandsOpener.textContent = "Скрыть"
    openState = true;
  }
});


