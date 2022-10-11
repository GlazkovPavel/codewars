// Задача 1
export function arrayDiff(a, b) {
    if (!a.length || !b.length) {
        return a;
    } else {
        return a.filter(v => b.includes(v));
    }
}
const result1 = arrayDiff([1,2],[1]).join(' ')
const span1 = document.querySelector('.span1');
span1.innerHTML = result1;

// Задача 2
export function isPangram(string){
    let arr = [];
    arr = string.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').toLowerCase().split('');

    let arr3 = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });
    return arr3.length === 26;
}
// Решение из CodeWars
// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }
const result2 = isPangram("The quick brown fox jumps over the lazy dog.")
const span2 = document.querySelector('.span2');
span2.innerHTML = result2;

// Задача 3
export function findOutlier(integers){
    let a = integers.filter((val) => val%2 !== 0)
    if (a.length === 1) {
        return a.map((v) => v);
    } else {
        return integers.filter((val) => val % 2 === 0);
    }
}
// Решение из CodeWars
// const even = integers.filter(int => int % 2 === 0);
// const odd  = integers.filter(int => int % 2 !== 0);
// return even.length === 1 ? even[0] : odd[0];

const result3 = findOutlier([160, 3, 1719, 19, 11, 13, -21])
const span3 = document.querySelector('.span3');
span3.innerHTML = result3;


// Задача 4

function getLengthOfMissingArray(arrayOfArrays) {

    if (!Array.isArray(arrayOfArrays) || arrayOfArrays.length === 0) {
        return 0;
    }
    if (arrayOfArrays.some(innerArr => !Array.isArray(innerArr))) {
        return 0;
    }
    let arr2 = [];
    let num;
    arrayOfArrays.forEach((val) => {
        const n = val.length
        arr2.push(n);
    })
    arr2.sort((a, b) => a - b);
    num = arr2[0];

    arr2.forEach((n) => {
        if (n === 0) {
            return 0;
        } else if (n === num) {
            return num++;
        } else if (n !== num) {
            return num;
        }
    })
    return num;
}

// function getLengthOfMissingArray(arrayOfArrays) {
//     const lengths = (arrayOfArrays || [])
//         .map(a => a ? a.length : 0)
//         .sort((a, b) => a - b)
//
//     if (lengths.includes(0)) {
//         return 0
//     }
//
//     for (let i = 0; i < lengths.length - 1; i++) {
//         if (lengths[i] + 1 !== lengths[i + 1]) {
//             return lengths[i] + 1
//         }
//     }
//
//     return 0
// }
const result4 = getLengthOfMissingArray([[3, 0, 4, 4],
    [0, 3, 1, 2, 2],
    [4, 0, 4, 2, 1, 1],
    [4, 4, 2, 3, 4, 1, 3, 0],
    [1, 3, 1, 3, 2, 3, 3],
    [3, 1, 3, 1, 0, 4, 3, 2, 2, 1, 0, 3],
    [1, 0, 1, 4, 4, 0, 2, 3, 3, 4, 0],
    [3, 3, 2, 3, 2, 0, 3, 1, 3, 2]])
const span4 = document.querySelector('.span4');
span4.innerHTML = result4;

const data = [
    {name: "Саша", age: 19},
    {name: "Катя", age: 21},
    {name: "Миша", age: 17},
    {name: "Федя", age: 23},
    {name: "Клава", age: 22}
];


function calcAvgAge(array) {

    const sum = array.reduce((acc, currentValue) => acc + currentValue.age , 0);
    const res = sum / array.length

    console.log(Math.round(res));
}
calcAvgAge(data);


const numbers = [1, 2, 3, 4, 5, 6];

separateArray(numbers);
// должен вернуть { even: [2, 4, 6], odd: [1, 3, 5] }

function separateArray(array) {
    const even = [];
    const odd = [];
    array.forEach((item) => {
        if (item % 2 ===0) {
            even.push(item)
        } else {
        odd.push(item);
    }})

    return {even, odd};
}


// const form = document.forms.formWithInput;
// const printResult = document.querySelector('.content__result');
// const inputNumber = document.querySelector('.form__input');
// const congratulation = document.querySelector('#congratulation');
//
// function findNearestFactorial(value) {
//     if (value === '' || value === undefined) {
//         return '*';
//     }
//     if (value <= 0) {
//         console.log(value);
//         return 1;
//     }
//     let currentValue = 1;
//     let n = 0;
//     for (let i = 1; currentValue * i <= value; i++) {
//         currentValue = i*currentValue;
//         n = i
//
//     }
//
//     return n;
// }
//
// form.addEventListener('keyup', evt => {
//     evt.preventDefault();
//     printResult.textContent = findNearestFactorial(inputNumber.value);
//     congratulation.textContent = inputNumber.value && 'Вау, это успех!';
// });
//
// form.addEventListener('submit', evt => {
//     evt.preventDefault();
//     findNearestFactorial(inputNumber)
// });
