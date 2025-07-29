const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10 + 5,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    tilt: Math.random() * 10 - 5,
    tiltAngle: 0,
    tiltAngleIncremental: Math.random() * 0.07 + 0.05
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r / 2, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 2);
    ctx.stroke();
  });
  update();
}

function update() {
  confetti.forEach(c => {
    c.y += Math.cos(c.d) + 1 + c.r / 2;
    c.tiltAngle += c.tiltAngleIncremental;
    c.tilt = Math.sin(c.tiltAngle) * 15;

    if (c.y > canvas.height) {
      c.y = -20;
      c.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 20);
