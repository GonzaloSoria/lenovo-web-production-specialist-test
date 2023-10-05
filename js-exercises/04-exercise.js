let count = document.querySelector('.count')
let button = document.querySelector('.button')
let counter = 1

button.addEventListener('click', function(){
    let buttonClicked = counter++
    count.innerHTML = buttonClicked
})