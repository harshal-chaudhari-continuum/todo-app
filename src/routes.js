
window.addEventListener('hashchange', function() {
    if (location.hash.search('edit') >= 0) {
        document.querySelector("#editTodo").classList.remove("hidden");
        document.querySelector("#todoList").classList.add("hidden")
    } else {
        document.querySelector("#todoList").classList.remove("hidden");
        document.querySelector("#editTodo").classList.add("hidden")
    }
});