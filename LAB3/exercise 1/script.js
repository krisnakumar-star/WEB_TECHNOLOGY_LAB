const form = document.getElementById("registerForm");
const role = document.getElementById("role");
const error = document.getElementById("error");
const skillsDiv = document.getElementById("skillsDiv");

role.addEventListener("change", () => {
  skillsDiv.style.display = role.value === "teacher" ? "block" : "none";
});

function validateEmail(email) {
  return email.endsWith("@gmail.com") || email.endsWith("@edu.com");
}

function validatePassword(password, role) {
  if (role === "admin") {
    return password.length >= 10 && /[A-Z]/.test(password) && /\d/.test(password);
  }
  return password.length >= 6;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  if (!validateEmail(email)) {
    error.textContent = "Invalid email domain";
    return;
  }

  if (!validatePassword(password, role.value)) {
    error.textContent = "Password not strong enough";
    return;
  }

  if (password !== confirm) {
    error.textContent = "Passwords do not match";
    return;
  }

  error.textContent = "";
  alert("Registration Successful");
});
