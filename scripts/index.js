// задание 1

const clickCounter = document.getElementById('clickCounter')

// задание 2

const red = document.getElementById('red')
const colors = ['red', 'chocolate', 'yellow', 'green', 'aqua', 'blue', 'blueviolet'];
let index = 0;

function changeColor() {
  red.style.setProperty('background-color', colors[index++]);
  index %= colors.length;
}

let interval = setInterval(changeColor, 1000);

// задание 3

const myaside = {x, y, element:document.getElementById('myaside')}

function moveObject() {
    let newX = +prompt('Введите первую координату для данного объекта: ')
    let newY = +prompt('Введите вторую координату для данного объекта: ')
    if ((!isNaN(newX)) && (!isNaN(newY))) {
        object.x = newX
        object.y = newY
    }        
    object.element.style.position = 'absolute';
    object.element.style.left = object.x + 'px';
    object.element.style.top = object.y + 'px'
}

myaside.object.element.addEventListener('click', moveObject)

// задание 4

// задание 5

// задание 6