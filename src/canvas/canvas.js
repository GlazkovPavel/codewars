const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.fillStyle = 'red';
context.strokeStyle = 'black'; // Для бордера канваса
let board = 10;
context.fillRect(board, 10, 260, 180) ;// Для заполнения всего контекста
context.lineWidth = 10;
context.strokeRect(board, 10, 260, 180); // Для обводки канваса

// Делаем круг
const canvas2 = document.getElementById('canvas2');
const ctx = canvas2.getContext('2d');
canvas2.width = '800';
canvas2.height = '600';

ctx.arc(canvas2.width / 2, canvas2.height / 2, 100, 0, Math.PI*2);
ctx.fillStyle = 'magenta';
ctx.fill();

// Делаем треугольник
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = '600';
canvas3.height = '400';

ctx3.strokeStyle = 'blue'; // Цвет бордера
ctx3.lineWidth = 5; // Толщины бордера

ctx3.scale(2,2); // Увеличивает от исходного состояния
ctx3.rotate(10 * Math.PI/180) // Поворачивает на n градусов от исходного состояния

ctx3.beginPath();
ctx3.moveTo(50, 50);
ctx3.lineTo(25, 100);
ctx3.lineTo(75, 100);
ctx3.closePath() // Возвращает на исходную позицию или можно так ctx3.lineTo(50, 50);
ctx3.stroke();


// Работа с текстом
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = '600';
canvas4.height = '400';
const grad = ctx4.createLinearGradient(0, 0, 300, 0);
grad.addColorStop('0', 'magenta');
grad.addColorStop('.5', 'blue');
grad.addColorStop('1', 'red');
ctx4.fillStyle = grad; // Цвет текста
ctx4.font = 'bold 40px Georgia'; // Толщины текста
ctx4.fillText('Hello World!', 50, 70);

// Делаем приложение для рисования
const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
const radius = 10; // Ширина линии ориентируется на радиус круга, ширина линии должна быть в 2 раза больше
canvas5.width = '1000';
canvas5.height = '800';

let isMouseDown = false;
ctx5.lineWidth = radius * 2;
let coords = [];
ctx5.strokeRect(radius, 10, 1000, 800);

canvas5.addEventListener('mousedown', () => {
    isMouseDown = true;
})
canvas5.addEventListener('mouseup', () => {
    isMouseDown = false;
    ctx5.beginPath(); // обрываем связь когда подняли кнопку
    coords.push('mouseup');
})
canvas5.addEventListener('mousemove', (event) => {
    if (isMouseDown) {
        coords.push([event.clientX, event.clientY]);
        ctx5.lineTo(event.clientX, event.clientY); // Для того чтобы не было пробелов при быстром перемещении мыши
        ctx5.stroke();

        ctx5.beginPath();
        ctx5.arc(event.clientX, event.clientY, radius, 0, Math.PI*2);
        ctx5.fill();

        ctx5.beginPath(); // вернуть назад, Для того чтобы не было пробелов при быстром перемещении мыши
        ctx5.moveTo(event.clientX, event.clientY);
    }

    const clear = () => {
        ctx5.fillStyle = 'white';
        ctx5.fillRect(0,0,canvas5.width, canvas5.height);
        ctx5.beginPath();
        ctx5.fillStyle = 'black';
    }

    const save = () => {
        localStorage.setItem('coords', JSON.stringify(coords));
    }

    const replay = () => {
        const timer = setInterval(() => {
            if (!coords.length) {
                clearInterval(timer);
                ctx5.beginPath();
                return;
            }
            const crd = coords.shift();
            const e = {
                clientX: crd["0"],
                clientY: crd["1"]
            }
            ctx5.lineTo(e.clientX, e.clientY); // Для того чтобы не было пробелов при быстром перемещении мыши
            ctx5.stroke();

            ctx5.beginPath();
            ctx5.arc(e.clientX, e.clientY, x, 0, Math.PI*2);
            ctx5.fill();

            ctx5.beginPath(); // вернуть назад, Для того чтобы не было пробелов при быстром перемещении мыши
            ctx5.moveTo(e.clientX, e.clientY);
        }, 80)
    }

    document.addEventListener('keydown', (e) => {
        event.preventDefault();
        if(e.keyCode === 83) { // S - save
            save();
            console.log('Saved')
        }
        if(e.keyCode === 82) { // R - replay
            console.log('ReplayIn....')
            coords = JSON.parse(localStorage.getItem('coords'));
            clear();
            replay();
        }
        if(e.keyCode === 67) { // C - clear
            clear();
            console.log('Clear')
        }
    })
})

const canvas6 = document.getElementById('canvas6');
const ctx6 = canvas6.getContext('2d');
canvas6.width = '400';
canvas6.height = '400';
ctx6.strokeStyle = 'white';
ctx6.lineWidth = 16;


let x = 125;
let x2 = 147;
let x3 = 269;
let x4 = 247;


let y = 100;
let y2 = 78;
let y3 = 250;


const clearSqr = () => {
  ctx6.strokeStyle = 'black';
  ctx6.fillRect(0,0, canvas6.width, canvas6.height);
  ctx6.beginPath();
  ctx6.strokeStyle = 'white';
}
const practicum = () => {
    if (x >= canvas6.width) {
        x = canvas6.width - x;
    } else if (x < 0) {
        x = canvas6.width;
    }
    if (x2 >= canvas6.width) {
        x2 = canvas6.width - x2;
    } else if (x2 < 0) {
        x2 = canvas6.width;
    }
    if (x3 >= canvas6.width) {
        x3 = canvas6.width - x3;
    } else if (x3 < 0) {
        x3 = canvas6.width;
    }
    if (x4 >= canvas6.width) {
        x4 = canvas6.width - x4;
    } else if (x4 < 0) {
        x4 = canvas6.width;
    }

    if (y >= canvas6.height) {
        y = canvas6.height - y;
    } else if (y < 0) {
        y = canvas6.height;
    }
    if (y2 >= canvas6.height) {
        y2 = canvas6.height - y2;
    } else if (y2 < 0) {
        y2 = canvas6.height;
    }

    if (y3 >= canvas6.height) {
        y3 = canvas6.height - y3;
    } else if (y3 < 0) {
        y3 = canvas6.height;
    }
    ctx6.moveTo(x, y);
    ctx6.lineTo(x, y3);
    ctx6.closePath();

    ctx6.moveTo(x2, y2);
    ctx6.lineTo(x4, y2);
    ctx6.closePath();

    ctx6.moveTo(x3, y);
    ctx6.lineTo( x3, y3);
    ctx6.closePath();
    ctx6.stroke();
}

practicum();

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'ArrowUp') {
    clearSqr();
    y -= 25;
    y2 -= 25;
    y3 -= 25;
    practicum();
  }
  if (evt.code === 'ArrowDown') {
    clearSqr();
    y += 25;
    y2 += 25;
    y3 += 25;
    practicum();
  }

  if (evt.code === 'ArrowLeft') {
    clearSqr();
    x -= 25;
    x2 -= 25;
    x3 -= 25;
    x4 -= 25;
    practicum();
  }
  if (evt.code === 'ArrowRight') {
    clearSqr();
    x += 25;
    x2 += 25;
    x3 += 25;
    x4 += 25
    practicum();
  }
})




