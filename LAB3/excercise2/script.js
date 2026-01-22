let products = [
  { name: "Laptop", price: 50000, quantity: 1, category: "electronics" },
  { name: "Book", price: 500, quantity: 2, category: "education" }
];

function renderCart() {
  const cart = document.getElementById("cart");
  cart.innerHTML = "";
  let total = 0;

  products.forEach((p, i) => {
    total += p.price * p.quantity;
    cart.innerHTML += `
      <li>
        ${p.name} (${p.quantity})
        <button onclick="removeItem(${i})">Remove</button>
      </li>`;
  });

  document.getElementById("total").textContent = total;
}

function removeItem(index) {
  products.splice(index, 1);
  renderCart();
}

function applyCoupon() {
  const code = document.getElementById("coupon").value.toUpperCase();
  let discount = 0;

  if (code.startsWith("SAVE")) {
    discount = 0.1;
  }

  let total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  total -= total * discount;

  document.getElementById("total").textContent = total;
}

renderCart();
