const input = document.querySelector(".task-inserter__input");
const button = document.querySelector(".task-inserter__button");
const container = document.querySelector(".task-container");

button.addEventListener("click", ()=>{
    const newTaskContainer = document.createElement("div");
    const taskDescription = document.createElement("p");
    const deleteButton = document.createElement("button");

    taskDescription.innerText = input.value;
    deleteButton.innerText = "Delete";

    newTaskContainer.classList.add("task");
    deleteButton.classList.add("task__delete-button");
    taskDescription.classList.add("task__text");

    newTaskContainer.append(taskDescription);
    newTaskContainer.append(deleteButton);
    container.append(newTaskContainer);

    const deleteButtons = document.querySelectorAll(".task__delete-button");

    deleteButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            button.parentElement.remove();
        });
    });
});