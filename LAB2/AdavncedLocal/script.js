function registerUser(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const password = document.getElementById("password").value;

  if (mobile.length !== 10 || password.length < 6) {
    alert("Invalid data");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some(u => u.email === email)) {
    alert("Email already exists");
    return;
  }

  users.push({ name, email, mobile });
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
}

function displayUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  userTable.innerHTML = "";

  users.forEach((u, i) => {
    userTable.innerHTML += `
      <tr>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.mobile}</td>
        <td><button onclick="deleteUser(${i})">Delete</button></td>
      </tr>`;
  });
}

function deleteUser(i) {
  let users = JSON.parse(localStorage.getItem("users"));
  users.splice(i, 1);
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
}

function clearAll() {
  localStorage.clear();
  displayUsers();
}

displayUsers();
