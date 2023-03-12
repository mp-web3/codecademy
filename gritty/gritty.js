

let banner = document.getElementById('banner-1');
let buttonColor = document.getElementById('original-color');

function colorValue() {
    return Math.floor(Math.random() * 256);
}

function changeBackgroudColorRandom(event) {
    if (event.target === banner) {
        let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.backgroundColor = randomColor;
    }
}

banner.onclick = changeBackgroudColorRandom;

function changeColorToOriginal() {
    banner.style.backgroundColor = '#4D00FF';
}

buttonColor.onclick = changeColorToOriginal;