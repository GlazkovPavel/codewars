function invert(obj) {
    const keys = Object.keys(obj);
    let a = {};
    keys.forEach((key) => {
        return a = {[obj[key]]: key}
    })
    return a;



}

console.log(invert({a: '1'}))

// function invert(obj) {
//     return Object
//         .entries(obj)
//         .reduce((acc, [key, item]) => ({ ...acc, [item]: key }), {});
// }


// function zip(...objects) {
// console.log(objects.slice())
//     return Object.assign({},...objects.slice().reverse());
//
// }

function zip(...objects) {
    return objects.reduce((prevVal, item) => {
        for (let key in item) {
            if (!prevVal[key]) {
                prevVal[key] = item[key];
            }
        }
        return prevVal
    }, {})
}


// Пример работы
const objects = [
    { foo: 5, bar: 6 },
    { foo: 13, baz: -1 }, // foo - повторяющийся ключ
    { my: 10, zaz: 2},
];

console.log(zip(...objects)); // { foo: 5, bar: 6, baz: -1 }

function isEmpty(value) {
    if (typeof value === 'function') {
        return true;
    } else if (typeof value === 'object' && value !== null && value.a) {
        return false;
    } else if (typeof value === 'object' && value && value.constructor.name && value.constructor.name === "Set") {
        return false;
    } else if (typeof value === 'object' && value && value.constructor.name && value.constructor.name === "Map") {
        return false;
    }  else if (value && value.length) {
        return false;
    } else if (typeof value === 'symbol') {
        return false;
    }  else if (typeof value === 'number') {
        return true;
    } else if (typeof value === 'undefined') {
        return true;
    } else if (typeof value === 'boolean') {
        return true;
    } else if (typeof value === 'object') {
        return true;
    } else if (typeof value === 'string') {
        return true;
    } else {
        return true;
    }
}

console.log(isEmpty({ 'a': 1 }));


function foo(callback) {
    setTimeout(function() {
        callback('A');
    }, Math.random()*100);
}

function bar(callback) {
    setTimeout(function() {
        callback('B');
    }, Math.random()*100);
}

function baz(callback) {
    setTimeout(function() {
        callback('C');
    }, Math.random()*100);
}

function func1() {
    foo(console.log.bind())
    setTimeout(func2, 100);
}

function func2() {
    bar(console.log.bind())
    setTimeout(func3, 100);
}

function func3() {
    baz(console.log.bind())
}

//func1();


function namespace(str) {
    const arr = str.split('.')
    return arr.reduceRight((acc, item) => {
        const obj = {};
        obj[item] = acc;
        return obj;
    }, {});
}

console.log(namespace('a.b.c.d.e'))


