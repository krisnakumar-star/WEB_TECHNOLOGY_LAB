let products = [
  { name: "Book", price: 200, qty: 1, category: "edu" },
  { name: "Laptop", price: 50000, qty: 1, category: "tech" }
];

function renderCart() {
  let total = 0;
  const cart = document.getElementById("cart");
  cart.innerHTML = "";

  products.forEach((p, i) => {
    total += p.price * p.qty;
    cart.innerHTML += `
      <div class="item">
        ${p.name} - ₹${p.price}
        <input type="number" value="${p.qty}" min="1"
          onchange="updateQty(${i}, this.value)">
      </div>`;
  });

  document.getElementById("total").innerText = total;
}

function updateQty(i, qty) {
  products[i].qty = Number(qty);
  renderCart();
}

function applyCoupon() {
  let code = document.getElementById("coupon").value.toUpperCase();
  let total = Number(document.getElementById("total").innerText);

  if (code === "SAVE10") total *= 0.9;
  document.getElementById("total").innerText = total;
}

renderCart();
