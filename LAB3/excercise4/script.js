let activities = [];
const log = document.getElementById("log");

function recordActivity(type, event) {
  activities.push({
    type,
    target: event.target.tagName,
    time: new Date().toLocaleTimeString()
  });
  updateLog();
}

function updateLog() {
  log.textContent = activities.map(a =>
    `${a.time} - ${a.type} on ${a.target}`
  ).join("\n");

  if (activities.length > 10) {
    alert("Suspicious Activity Detected!");
  }
}

document.addEventListener("click", e => recordActivity("Click", e), true);
document.addEventListener("keydown", e => recordActivity("Key Press", e), true);
document.addEventListener("focusin", e => recordActivity("Focus", e), true);

function resetLog() {
  activities = [];
  updateLog();
}
