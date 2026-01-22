const form = document.getElementById("registerForm");
const role = document.getElementById("role");
const skills = document.getElementById("skills");

role.addEventListener("change", () => {
  skills.classList.toggle("hidden", role.value !== "Teacher");
});

function validateEmail(email) {
  return email.endsWith("@gmail.com");
}

function validatePassword(pass, role) {
  if (role === "Admin") return pass.length >= 10 && /\d/.test(pass);
  return pass.length >= 6;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirmPassword");

  if (!validateEmail(email.value)) {
    email.classList.add("error");
    valid = false;
  }

  if (!validatePassword(password.value, role.value)) {
    password.classList.add("error");
    valid = false;
  }

  if (password.value !== confirm.value) {
    confirm.classList.add("error");
    valid = false;
  }

  if (valid) alert("Registration Successful!");
});
