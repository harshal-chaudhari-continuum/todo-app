//adding string through style to list itme
function boxChecked(event) {
    console.log('box checked');
    const element = event.target;
    if(element.type === "checkbox") {
        if(element.parentNode.style.textDecoration === "none" || element.parentNode.style.textDecoration ==="")
        element.parentNode.style.textDecoration = "line-through";
        else
        element.parentNode.style.textDecoration = "none";
    }
}

//list event listener
app.dom.todoList.addEventListener("click", boxChecked);