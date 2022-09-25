import './index.css';

// Задача 1
function arrayDiff(a, b) {
    if (!a.length || !b.length) {
        return a;
    } else {
        return a.filter(v => b.includes(v));
    }
}
const result1 = arrayDiff([1,2],[1]).join(' ')
const span1 = document.querySelector('.span1');
span1.innerHTML = result1;

// 2 Задача
function isPangram(string){
    let arr = [];
    arr = string.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').toLowerCase().split('');

    let arr3 = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });

    return arr3.length === 26;
}
const result2 = isPangram("The quick brown fox jumps over the lazy dog.")
const span2 = document.querySelector('.span2');
span2.innerHTML = result2;

// Решение из CodeWars
// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }
