const questions = [
  { text: "Your Name", type: "text", required: true },
  { text: "Gender", type: "radio", options: ["Male", "Female"], required: true },
  { text: "Skills", type: "checkbox", options: ["JS", "HTML", "CSS"], required: true }
];

const form = document.getElementById("surveyForm");

questions.forEach((q, i) => {
  const div = document.createElement("div");
  div.innerHTML = `<label>${q.text}</label><br>`;

  if (q.type === "text") {
    div.innerHTML += `<input type="text" id="q${i}">`;
  }

  if (q.type === "radio") {
    q.options.forEach(opt => {
      div.innerHTML += `<input type="radio" name="q${i}">${opt}`;
    });
  }

  if (q.type === "checkbox") {
    q.options.forEach(opt => {
      div.innerHTML += `<input type="checkbox">${opt}`;
    });
  }

  form.appendChild(div);
});

function submitSurvey() {
  alert("Survey Submitted Successfully");
}
