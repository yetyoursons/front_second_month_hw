// const yellow = document.getElementById('yellow')
// yellow.addEventListener('click', function onClick(event) {
//     yellow.style.backgroundColor = 'yellow'
//     alert('Get Ready!')
// })
//
// const red = document.getElementById('red')
//
// red.addEventListener('click', function onClick(event) {
//     red.style.backgroundColor = 'red'
//     alert('STOP!')
// })
//
// const green = document.getElementById('green')
//
// green.addEventListener('click', function onClick(event) {
// green.style.backgroundColor = 'green'
//     alert('GO!')
// })
// Он работает с первым закоментированым html

let indicator = prompt("Выберите цвет: зеленый, желтый, красный!");
switch (indicator) {
    case "красный":
        document.getElementById('red-indicator').style.backgroundColor = 'red'
        document.getElementById('red-indicator').innerText = 'STOP!'
        alert('Stop!')
        break;
    case "желтый":
        document.getElementById('yellow-indicator').style.backgroundColor = 'yellow'
        document.getElementById('yellow-indicator').innerText = 'Get Ready!'
        break;
    case "зеленый":
        document.getElementById('green-indicator').style.backgroundColor = 'green'
        document.getElementById('green-indicator').innerText = 'GO!'
        break;
}