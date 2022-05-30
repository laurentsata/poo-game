const canvas = document.querySelector("#game-container");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2, false);
ctx.fillStyle = "red";
ctx.fill();

class Entity {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "red";
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Player extends Entity{
    constructor(x, y, radius, color) {
        super(x, y, radius);
        this.color = color;
    }
}

//class enemy
class Enemy extends Projectile {
    constructor(x, y, radius, color, velocity) {
        super(x, y, radius, color, velocity);
    }
}

const player = new Player(canvas.width / 2, canvas.height / 2, 10, "blue");

const projectiles = [];

const enemies = [];

function animate() {
    requestAnimationFrame(animate);

    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.draw();

    projectiles.forEach((projectile) => projectile.update());

    enemies.forEach((enemy) => enemy.update());
}
animate();

//function spawnEnemies

function spawnEnemies() {
    const radius = Math.random() * (30 - 4) + 4;

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
    
    const randomValue = Math.random();
    let x ,y;
    if (randomValue < 0.25) {
        x = 0 - radius;
        y = Math.random() * canvas.height;
    } else if (randomValue >= 0.25 && randomValue < 0.5) {
        x = canvas.width + radius;
        y = Math.random() * canvas.height;
    } else if (randomValue >= 0.5 && randomValue < 0.75) {
        x = Math.random() * canvas.width;
        y = 0 - radius;
    } else if (randomValue >= 0.75) {
        x = Math.random() * canvas.width;
        y = canvas.height + radius;
    }
}
spawnEnemies();