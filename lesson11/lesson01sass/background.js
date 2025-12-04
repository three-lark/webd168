const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CHAR_SIZE = 20;
const COLUMN_SPACING = 25;
let columns, drops;

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    columns = Math.ceil(canvas.width / COLUMN_SPACING);
    drops = new Array(columns).fill(0);
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff90';
    ctx.font = `${CHAR_SIZE}px monospace`;

    for (let i = 0; i < columns; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * COLUMN_SPACING;
        const y = drops[i] * CHAR_SIZE;
        
        if (y <= canvas.height + CHAR_SIZE) {
            ctx.fillText(text, x, y);
        }

        drops[i]++;
        
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
    }

    const neededColumns = Math.ceil(canvas.width / COLUMN_SPACING);
    if (neededColumns > columns) {
        for (let i = columns; i < neededColumns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height / CHAR_SIZE);
        }
        columns = neededColumns;
    }
}

setupCanvas();
setInterval(draw, 50);

window.addEventListener('resize', () => {
    setupCanvas();
});