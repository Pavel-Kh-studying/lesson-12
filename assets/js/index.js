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
    const newLi =  createElement('li', emailInput.value);
    const newButton =  createElement('button', 'delete');

    ulElem.append(newLi);
    newLi.append(newButton);

    newButton.addEventListener('click', () => {
      newButton.parentNode.remove();
      arr.splice(arr.indexOf(newButton.parentNode.textContent.slice(0, -6)), 1);
    });
  }

  target.reset();
});

function createElement(tagName, tagContent) {
  const element = document.createElement(tagName);
  element.textContent = tagContent;
  return element;
}
