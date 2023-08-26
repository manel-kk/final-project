//function for cart subtotal
document.addEventListener('DOMContentLoaded', () => {
  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal(); // Calls updateCartTotal after changing the quantity
  }

  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;

    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName('cart-price')[0];
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
      var price = parseFloat(priceElement.innerText.replace('$', ''));
      var quantity = quantityElement.value;
      total += price * quantity;
    }

    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
  }

  var removeCartItemButtons = document.getElementsByClassName('btn-danger');
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
      updateCartTotal(); 
    });
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input');
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }

  updateCartTotal(); 
});

document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.getElementById('quantity');
  const priceInput = document.getElementById('price');
  const totalDisplay = document.getElementById('total-display');

  function calculateTotal() {
      const quantity = parseFloat(quantityInput.value);
      const price = parseFloat(priceInput.value);

      if (!isNaN(quantity) && !isNaN(price)) {
          const total = quantity * price;
          totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
      } else {
          totalDisplay.textContent = 'Invalid input';
      }
  }

  // event listener to listen for Enter key press
  document.addEventListener('keydown', function (event) {
      if (event.key === "Enter") {
          calculateTotal();
      }
  });
});

//toggle effect for side menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const sideMenu = document.getElementsByClassName('side-menu')[0]
toggleButton.addEventListener('click', ()=> {
  sideMenu.classList.toggle('active')
});
