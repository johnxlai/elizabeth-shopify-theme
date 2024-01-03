document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('test-btn');

  if (btn) {
    btn.addEventListener('click', function () {
      // Your custom code to be executed when the button is clicked
      console.log('Button clicked!');

      this.innerHTML = 'this works';
    });
  }
});
