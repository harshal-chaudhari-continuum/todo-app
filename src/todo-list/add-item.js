function addToLocalStorage(){
    localStorage.setItem("todoList", JSON.stringify(app.todoList));
}
function addTodoItem() {
    if(input.value === "") {
        alert("You must enter some value!");
    }
    else {
        console.log('First statement: ', app);
        var text = app.dom.input.value;	
        var item = `<a href="#edit&id${app.dom.id}?todo=${text}"><li id="li-${app.dom.id}">${text}<input id="box-${app.dom.id}" 	class="checkboxes" type="checkbox"></li></a>`;				
        list.insertAdjacentHTML('beforeend', item);	
        liItem = {item: text, checked: false, description: '', id: app.dom.id};
        console.log(app.todoList);
        app.todoList.push(liItem);	
        app.dom.id++;
        addToLocalStorage();
        form.reset();
    }
}

//button event listener
app.dom.submitButton.addEventListener("click", addTodoItem);