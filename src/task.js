function getDomNodesBySelector(selector) {
    return Array.from(document.querySelectorAll(selector));
}

document.querySelector('.total__button').addEventListener('click', applyDiscount);

function applyDiscount() {
    let array = [];
    let arr = getDomNodesBySelector('.price-value')

    arr.forEach((item) => {
        let num = +item.innerHTML
        num = num * 0.75
        array.push(num)
        item.innerHTML = num.toString();
    })

    let res = array.reduce((acc, number) => acc + number, 0);

    let price = document.querySelector('.total-price-value');
    price.innerHTML = res.toString();

    document.querySelector('button').disabled = true;
}
