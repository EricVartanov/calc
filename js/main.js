'use strict'

const multip = function (a, b) {
    return a * b
}

const pluse = function (a, b) {
    return a + b
}

const minus = function (a, b) {
    return a - b
}

const divide = function (a, b) {
    return a / b
}

const display = document.querySelector('.display')

let a = ''
let b = ''
let sign = ''
let finish = false




const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
const action = ['+', '-', '*', '/']


function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    display.textContent = ''
}


document.querySelector('.calc').addEventListener('click', function (event) {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('del-btn')) clearAll();
    display.textContent = '';

    const key = event.target.textContent

    if (numbers.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            display.textContent = a
        }
        else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            display.textContent = b
        }
        else {
            b += key
            display.textContent = b

        }
        return
    }

    if (action.includes(key)) {
        sign = key
        display.textContent = sign
        return
    }

    if (key === '=') {
        switch (sign) {
            case ('+'):
                a = (+a) + (+b)

                break;
            case ('-'):
                a = a - b
                break;
            case ('*'):
                a = a * b
                break;
            case ('/'):
                a = a / b
                break;
        }
        finish = true
        display.textContent = a
    }
})