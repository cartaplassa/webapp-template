const btn = document.querySelector('#btn-1');
const list = document.querySelector('#log')
function addElement() {
    console.log('The button was clicked');
    outputDate = new Date();
    outputText = 'Button was clicked at ' + outputDate.toISOString();
    const newElement = document.createElement('li')
    newElement.textContent = outputText;
    list.appendChild(newElement);
}
btn.addEventListener('click', addElement)
// btn.onclick = addElement;
// <button onclick="addElement()">Click me</button>