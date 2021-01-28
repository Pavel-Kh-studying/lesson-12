'use strict'; 

const arr = [];

const form = document.getElementById('root-form');

const ulElem = document.getElementById('list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const {
    target,
    target: { email: emailInput },
  } = e;
  arr.push(emailInput.value);
  console.dir(emailInput.value);
  if (emailInput.value) {
      const newLi =  createLi(emailInput.value);
      const newButton =  createButton();
      ulElem.append(newLi);
      newLi.append(newButton);
      newButton.addEventListener('click', (e) => {
        newButton.parentNode.remove();
        const parrentText = newButton.parentNode.textContent.slice(0, -6);
        console.log(parrentText);
        const i = arr.indexOf(parrentText);
        arr.splice(i, 1);
      });
  }
  target.reset();
});

function createLi(value) {
  const liElement = document.createElement('li');
  liElement.textContent = value;
  return liElement;
}

function createButton() {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = 'delete';
  return buttonElement;
}