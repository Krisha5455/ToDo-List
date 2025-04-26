const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  

  if (inputBox.value.trim() === '') {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement('li');
  li.textContent = inputBox.value;

  const deleteBtn = document.createElement('delete');
  deleteBtn.textContent = '✖';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = function () {
    listContainer.removeChild(li);
  };

  li.appendChild(deleteBtn);
  listContainer.appendChild(li);

  inputBox.value = '';
}
