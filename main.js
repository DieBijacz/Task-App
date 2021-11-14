let body = document.querySelector('body')
let box = document.getElementById('box')
box.addEventListener('mousemove', runEvent)
box.addEventListener('click', changeColor)
box.addEventListener('mouseout', zeroColor)

function runEvent(e) {
    box.style.backgroundColor = "rgb("+e.offsetX+" , "+e.offsetY+" , 40)";
}

function changeColor(e) {
    body.style.backgroundColor = "rgb("+e.offsetX+" , "+e.offsetY+" , 40)";
}
function zeroColor (e) {
    box.style.backgroundColor = "rgb(12, 72, 129)"
}