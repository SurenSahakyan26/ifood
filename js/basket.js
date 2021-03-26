let minus = document.querySelector('.minus')
let plus_minus = document.querySelector('.plus_minus')
let plus = document.querySelector('.plus')
let prod_price = document.querySelector('.prod_price')
let total_price = document.querySelector('.total_price')


minus.addEventListener('click', () => {
    if (plus_minus.value !== '' || !isNaN(plus_minus.value)) {
        plus_minus.value = parseInt(plus_minus.value)
        if (plus_minus.value > 1) {
            plus_minus.value--
        }
        multPrice()
    }
})

plus_minus.addEventListener('input', () => {
    let number = '';
    for (const letter of plus_minus.value) {
        if ('0123456789'.includes(letter)) {
            number += letter;
        }
    }

    if (isNaN(number)) {
        plus_minus = 0;
    }

    plus_minus.value = parseInt(number);
    if (isNaN(plus_minus.value)) {
        plus_minus.value = 0
    }

    multPrice()
})

plus.addEventListener('click', () => {
    if (plus_minus.value !== '' || !isNaN(plus_minus.value)) {
        plus_minus.value = parseInt(plus_minus.value)
        plus_minus.value++
        multPrice()
    }
})

function multPrice() {
    total_price.innerText =
        plus_minus.value * parseInt(prod_price.innerText)
}
