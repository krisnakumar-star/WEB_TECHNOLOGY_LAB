let step = 0;
const steps = document.querySelectorAll(".step");
const progress = document.getElementById("progress");

function next() {
  const input = steps[step].querySelector("input");

  if (!input.value) {
    alert("Please fill the field");
    return;
  }

  steps[step].style.display = "none";
  step++;

  if (step < steps.length) {
    steps[step].style.display = "block";
    progress.textContent = `Step ${step + 1} of 4`;
  } else {
    alert("Form Completed Successfully");
  }
}
