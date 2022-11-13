function spiralize (n) {
  const mainArray = [];
  let arr = [];
  let num = 1;

  arr = Array(n).fill(0);
  arr.forEach((item) => {
    if (num === 1 || arr.length === num) {
      let arr2 = Array(n).fill(1);
      mainArray.push(arr2)
      num++
    }
    else if (num === 2) {
      let arr2 = Array(n).fill(0);
      arr2.splice(-1, 1, 1)
      mainArray.push(arr2)
      num++
    }
    else if (num === 3) {
      let arr2 = Array(n).fill(0);
      arr2.splice(-1, 1, 1)
      arr2.fill(1, 0, n - 2)
      mainArray.push(arr2)
      num++
    }
    else if (num === 4) {
      let arr2 = Array(n).fill(0);
      arr2.splice(-1, 1, 1)
      arr2.fill(1, 0, 1)
      mainArray.push(arr2)
      num++
    }
    else if (num > 4) {
      let arr2 = Array(n).fill(0);
      arr2.splice(-1, 1, 1)
      mainArray.push(arr2)
      num++
    }

  })

  console.log(mainArray);
}

spiralize(10);


reverse=a=>[...a].map(a.pop,a)

console.log(reverse([1, 2, 3]))


function spiralize2 (n) {
  let mainArray = [];
  let arr = [];

  arr = Array(n).fill(0);
  arr.forEach((item) => {
    let arr2 = Array(n).fill(0);
    mainArray.push(arr2)
  })

  mainArray.map((item, i) => {
    if (i === 0 || i === n - 1) {
      item.fill(1, 0)
    } else {
      item.fill(1, n - 1)
    }
  })

  mainArray.map((item, i) => {
    if (i === 2) {
      item.fill(1, 0, n - 2)
    } else if (i !== 1) {
      item.fill(1, 0, 1)
    }
  })

  mainArray.map((item, i) => {
    if (i === 2) {
      item.fill(1, 0, n - 2)
    } else if (i !== 1) {
      item.fill(1, 0, 1)
    }
  })

  mainArray.map((item, i) => {
    if (i > 2 && i < n - 2 ) {
      item.fill(1, n-3, n-2)
    }
  })

  mainArray.map((item, i) => {
    if (i === n - 3 && n > 6 ) {
      item.fill(1, 2, n-2)
    }
  })

  mainArray.map((item, i) => {
    if (i > 3 && i < n - 3 ) {
      item.fill(1, 2, 3)
    }
  })

  mainArray.map((item, i) => {
    if (i === 4 && n > 8) {
      item.fill(1, 2, n-4)
    }
  })

  mainArray.map((item, i) => {
    if (i >= 4 && i < n - 4 && n > 9 ) {
      item.fill(1, 5, 6)
    }
  })

  console.log(mainArray);
}
spiralize2(20)


function b(v) {
  const s = [...v].map(v.pop, v)
  console.log([...v].pop.bind(v))
  console.log(s)
}

b([1,2,3])

function createGreeter(greeting) {
  return function(name) {
    console.log(greeting + ', ' + name);
  }
}
const sayHello = createGreeter('Hello');
sayHello('Joe');
