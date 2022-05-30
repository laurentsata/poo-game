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