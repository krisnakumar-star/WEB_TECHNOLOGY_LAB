const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "skyblue";
ctx.fillRect(20, 20, 150, 80);

ctx.beginPath();
ctx.arc(300, 80, 40, 0, Math.PI * 2);
ctx.fillStyle = "orange";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(450, 200);
ctx.stroke();

ctx.font = "24px Arial";
ctx.fillStyle = "green";
ctx.fillText("HTML5 Canvas", 160, 270);
