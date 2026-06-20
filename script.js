let tasks = [];

function addTask() {
  let input = document.getElementById("taskInput");

  tasks.push(input.value);

  input.value = "";

  showTasks();
}

function showTasks() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");

    li.textContent = task;

    li.onclick = () => {
      tasks.splice(index, 1);
      showTasks();
    };

    list.appendChild(li);
  });
}