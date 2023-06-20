const addInput = document.querySelector("#add-task");
const addBtn = document.querySelector("#add-btn");
const delTaskBtn = document.querySelector("#del-btn");
const renameBtn = document.querySelector(".rename-task");
const updateBtn = document.querySelector(".update-task");
const delBtn = document.querySelector(".del-task");
const newTasks = document.querySelector(".new-tasks");
delTaskBtn.addEventListener("click", () => {
  addInput.value = "";
});
addBtn.addEventListener("click", (e) => {
  let todo = addInput.value;
  todo = todo.trim();
  if (todo == "") {
    alert("Please First Add task");
  } else {
    addTodo(todo);
    addInput.value = "";
    updateTodo();
  }
});
 function addTodo(todo) {           //To add a new task
  let todoTask = ` 
                <div class="task">
					<input type="text" title="updated task" id="added-task" name='todo' disabled value="${todo}">
                    <div>
                        <input type="button" value="✔️" name='update' title='update task' class="update-task">
                        <input type="button" value="❌" name='delete' title='delete task' class="del-task">
                    </div>
                </div>
                `;
  newTasks.innerHTML += todoTask;
}
function updateTodo() {
  let task = document.querySelectorAll(".task");
  task.forEach((t) => {
    t.addEventListener("click", (e) => {
      if (e.target.classList.contains("rename-task")) {
        if (t.children[0].disabled) {
          t.children[0].disabled = false;
        }
      } else if (e.target.classList.contains("del-task")) {
        t.remove();
      } else if (e.target.classList.contains("update-task")) {
        if (t.children[0].disabled == false) {
          t.children[0].disabled = true;
        }
      }
    });
  });
}