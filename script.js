const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetBtn = document.getElementById('resetBtn');

let draggedItem = null;
container1.addEventListener('dragstart', dragStart);
container1.addEventListener('dragend', dragEnd);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);
resetBtn.addEventListener('click', reset);
function dragStart(e) {
  draggedItem = this;
  setTimeout(() => {
    this.style.display = 'none';
  }, 0);
}
function dragEnd(e) {
  setTimeout(() => {
    draggedItem.style.display = 'block';
    draggedItem = null;
  }, 0);
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}
function dragLeave() {
  this.classList.remove('hovered');
}
function drop() {
  this.classList.remove('hovered');
  this.appendChild(draggedItem);
  showSuccessMessage();
}
function reset() {
  container2.innerHTML = '<h2>Container 2</h2>';
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    container1.appendChild(item);
  });
}
function showSuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.classList.add('success-message');
  successMessage.innerText = 'Item dropped successfully!';
  container2.appendChild(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 2000);
}
