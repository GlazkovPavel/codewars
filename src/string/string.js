// Задача 5 я не решил

const values = [...Array(26).keys()]
    .map(i => String.fromCharCode(i + 97))
    .reduce((o, l, i) => ({ ...o, [l]: i + 1 }), {});

const groupValue = group =>
    group.split("").reduce((acc, val) => acc + values[val], 0);

const solve = word =>
    word
        .split(/[aeiou]/)
        .filter(e => e.length)
        .reduce((acc, val) => (groupValue(val) > acc ? groupValue(val) : acc), 0);

const tests = [
    "zodiacs", //26
    "chruschtschov", //80
    "strength", //57
    "catchphrase", //73
    "twelfthstreet", //103
    "mischtschenkoana" //80
];

console.log(tests.map(solve));

// Задача 6
function sumStrings(a,b) {
    const sum = BigInt(a) + BigInt(b);
    return sum.toString();
}
const result6 = sumStrings('712569312664357328695151392', '8100824045303269669937')
const span6 = document.querySelector('.span6');
span6.innerHTML = result6;

// Задача 7
function rot13(message){
    let arr = [];
    let strArr = [];
    arr = message.split('');
    arr.forEach((item) => {
        let n = item.codePointAt()
        if (65 <=n && n <= 90 ) {
           n = (n + 13) > 90 ? n - 13 : n + 13
        } else if (97 <= n && n <= 122 ) {
            n = (n + 13) > 122 ? n - 13 : n + 13
        }
        let str = String.fromCodePoint(n)
        strArr.push(str)
    })
   return strArr.join('');
}
const result7 = rot13('Test3')
const span7 = document.querySelector('.span7');
span7.innerHTML = result7;

// Задача 8

function toUnderscore(string) {
    if (typeof string !== 'string') {
        return string.toString();
    }
    let a = '';
    a = string;
    let b = a.charAt(0);
    let n = b.codePointAt();

    if (65 <=n && n <= 90) {
        a = a.replace(`${b}`, `${b.toLowerCase()}`)
    }

    let arr = a.split('');
    const new_array = arr.map((i) => {
        let d = i.codePointAt();
        if (65 <=d && d <= 90) {
            return `_${i.toLowerCase()}`;
        } else {
            return i;
        }
    })
    return new_array.join('');
}
// toUnderscore = function(string) {
//     return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
// };
const result8 = toUnderscore('TestTest')
const span8 = document.querySelector('.span8');
span8.innerHTML = result8;

function flatten(list) {
    const stack = [...list];
    const res = [];
    while (stack.length) {
        // забираем последнее значение
        const next = stack.pop();
        if (Array.isArray(next)) {
            // добавляем к массиву элементы не модифицируя исходное значение
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    //разворачиваем массив, чтобы восстановить порядок элементов
    return res.reverse();
    }

// function flatten(list) {         Такое решение самое простое, но яндекс хочет с циклами
//     return list.flat(Infinity);
// }
console.log(flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]));
// возвращает
//[1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
console.log(flatten([[[[1]]],[2]])) //[1,2]






