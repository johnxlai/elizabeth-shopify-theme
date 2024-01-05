document.addEventListener('DOMContentLoaded', function () {
  const btns = document.querySelectorAll('.add-to-cart__btn');

  btns.forEach((btn) => {
    btn.addEventListener('mouseover', function () {
      // Your custom code to be executed when the button is clicked
      this.innerHTML = 'this works';
      console.log(this.dataset.product);
    });
  });
});
