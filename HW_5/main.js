const increase = document.getElementById('plusValue')
const decrease = document.getElementById('minusValue')
const score = document.getElementById('score')
const reset = document.getElementById('reset')
let value = 0;
increase.onclick = () => {
    value++
    score.innerText = value;
}
decrease.onclick = () => {
    value--
    if ( value < 1){
        value = 0
    }
    score.innerText = value;
}
reset.onclick = () => {
    value = 0;
    score.innerHTML = value;
}