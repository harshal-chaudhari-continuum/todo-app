window.addEventListener('hashchange', function() {
    const itemName = location.hash.substring(location.hash.indexOf('=') + 1);
    const itemId = location.hash.substring(8, location.hash.indexOf('?'));
    document.getElementById('editItemName').value = itemName;
    // document.getElementById('editItemDescription').val = app.todoList.find(item => {
    //     return item.id === itemId;
    // }).description;
});

function saveFunction() {
    console.log('Inside save function');
    const hashVal= location.hash;
    // alert(hashVal); 
    // alert(location.hash.substring(8, location.hash.indexOf('?')));
     const itemId = hashVal.substring(8, hashVal.indexOf('?'));
    //  alert(itemId);
     const newItemValue = document.getElementById('editItemName').value;
     const newDescriptionValue = document.getElementById('editItemDescription').value;
    //  alert(app.todoList[0]);
     let index = app.todoList.findIndex(item => {
        return item.id == itemId;
    });
    // alert(index);
    app.todoList[index].item = newItemValue;
    app.todoList[index].description = newDescriptionValue;
    // foundItem.item=newItemValue;
    // foundItem.description=newDescriptionValue;
    addToLocalStorage();
    app.dom.editForm.reset();
}

app.dom.saveButton.addEventListener("click", saveFunction);