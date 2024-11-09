document.addEventListener("DOMContentLoaded", function() {
    const todoInput = document.getElementById("todoInput");
    const addButton = document.getElementById("addButton");
    const todoList = document.getElementById("todoList");
    const removeAllButton = document.getElementById("removeAllButton");

    addButton.addEventListener("click", function() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = todoText;
            listItem.addEventListener("click", function() {
                listItem.remove();
            });
            todoList.appendChild(listItem);
            todoInput.value = "";
        }
    });

    removeAllButton.addEventListener("click", function() {
        todoList.innerHTML = "";
    });
});
