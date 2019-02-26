// display all todo list
function displayList() {
    if (!JSON.parse(localStorage.getItem("todoList"))) {
        return;
    }
    app.todoList = JSON.parse(localStorage.getItem("todoList"));
    console.log('Inside display-list app.todoList', app.todoList );
    todoList = app.todoList;
    todoList.forEach(function(element) {
        console.log(element.item)
        var text = element.item;
        var item = `<li id="li-${app.dom.id}"><a href="#edit&id${app.dom.id}?todo=${text}">${text}</a><input id="box-${app.dom.id}" class="checkboxes" type="checkbox"></li>`;
        app.dom.todoList.insertAdjacentHTML("beforeend", item);
        //if we got a checked box, then style
        if(element.checked) {
            var li = document.getElementById("li-"+app.dom.id);
            li.style.textDecoration = "line-through";
            li.childNodes[1].checked = element.checked;
        }
        app.dom.id++;
    });
}