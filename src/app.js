// export function displayList() {
//     todoList.forEach(function(element) {
//         console.log(element.item)
//         var text = element.item;
//         var item = `<li id="li-${id}">${text}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
//         list.insertAdjacentHTML("beforeend", item);
//         //if we got a checked box, then style
//         if(element.checked) {
//             var li = document.getElementById("li-"+id);
//             li.style.textDecoration = "line-through";
//             li.childNodes[1].checked = element.checked;
//         }
//         id++;
//     });
// }

displayList();