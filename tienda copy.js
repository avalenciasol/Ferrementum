document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.addToCart');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCartClicked);
  });

  const buyButton = document.querySelector('.comprarButton');
  buyButton.addEventListener('click', buyButtonClicked);

  const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

  function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImageSrc = item.querySelector('.item-image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImageSrc);
  }

  function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const shoppingCartItem = document.createElement('div');
    shoppingCartItem.classList.add('row', 'shoppingCartItem');

    const shoppingCartItemContent = `
      <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <img src=${itemImage} class="shopping-cart-image">
          <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
        </div>
      </div>
      <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
          <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
        </div>
      </div>
      <div class="col-4">
        <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
          <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
          <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
      </div>`;

    shoppingCartItem.innerHTML = shoppingCartItemContent;
    shoppingCartItemsContainer.appendChild(shoppingCartItem);

    shoppingCartItem.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    const quantityInput = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
    quantityInput.addEventListener('change', quantityChanged);

    updateShoppingCartTotal();
  }

  function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
  }

  function quantityChanged(event) {
    const input = event.target;
    if (input.value <= 0) {
      input.value = 1;
    }
    updateShoppingCartTotal();
  }

  function updateShoppingCartTotal() {
    var cartItems = document.getElementsByClassName('shoppingCartItem');
    var total = 0;
  
    for (var i = 0; i < cartItems.length; i++) {
      var cartItem = cartItems[i];
      var priceElement = cartItem.getElementsByClassName('shoppingCartItemPrice')[0];
      var quantityElement = cartItem.getElementsByClassName('shoppingCartItemQuantity')[0];
      var price = parseFloat(priceElement.innerText.replace('$', '').replace(',', '.'));
      var quantity = quantityElement.value;
      total += price * quantity;
    }
  
    total = total.toFixed(3); // Formatea el total con tres decimales
    total = parseFloat(total).toLocaleString('en-US', { minimumFractionDigits: 3 }); // Aplica el formato de separador de miles y decimales
  
    document.getElementsByClassName('shoppingCartTotal')[0].innerText = '$ ' + total;
  }

  function buyButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';

    const toast = document.getElementById('toast');
    toast.className = 'show';

    setTimeout(function () {
      toast.className = toast.className.replace('show', '');
    }, 3000);

    updateShoppingCartTotal();
  }
});