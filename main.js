const colors = ['red', 'yellow', 'green', 'blue', 'orange', 'violet', 'indigo'];

const container = document.querySelector('section');
const h1 = document.querySelector('h1');
const span = document.querySelector('#selectedColor');


for (color of colors) {
  const box = document.createElement('div');
  box.classList.add('box');

  container.appendChild(box)

  box.style.backgroundColor = color;

  box.addEventListener('click', () => {
    h1.innerText = 'You have selected color: ';
    selectedColor.innerText = box.style.backgroundColor;
    selectedColor.style.backgroundColor = box.style.backgroundColor;
  })
}
