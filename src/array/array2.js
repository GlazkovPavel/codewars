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

spiralize(5);
