const button = document.querySelector('.slider');
const number1 = document.querySelectorAll('.plan-number')[0];
const number2 = document.querySelectorAll('.plan-number')[1];
const number3 = document.querySelectorAll('.plan-number')[2];
var counter = 1
button.addEventListener('click', () => {
    if (number1.innerHTML ==='$199.99'){
        number1.innerHTML = '$19.99' 
        number2.innerHTML = '$24.99'
        number3.innerHTML = '$39.99'
    } else {
        number1.innerHTML = '$199.99'
        number2.innerHTML = '$244.99'
        number3.innerHTML = '$399.99'
}
})