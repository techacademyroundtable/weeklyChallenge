


function addTodoItem(){
    //first I grab the display box, and text entered by user
    var display = document.getElementById("todo-display");
    var txt = document.getElementById("txt-input").value;
    //this if statement will prevent the user from adding empty todo items
    if (txt == ''){
        return;
    }
    //then I create a new div for the text to be displayed
    //as well as create a checkbox for each item added
    var newTodoItem = document.createElement("div");
    newTodoItem.classList.add("todo-item");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    //assign a class to the checkbox, so we can manipulate it later
    checkBox.classList.add("todo-item-checkbox");
    //this will apend the text entered to the new element,
    newTodoItem.append(checkBox,txt);
    checkBox.addEventListener("change",function(){
        if(this.checked){
            console.log("Hello");
            newTodoItem.style.textDecoration = "line-through";
        } else {
            newTodoItem.style.textDecoration = "none";
        }   
    });
    //this will append the item to the display box
    display.append(newTodoItem);
    document.getElementById("txt-input").value = '';
}

//this function will delete all items with a checked box
function deleteTodoItems(){
    document.querySelectorAll(".todo-item").forEach(function(e){
        if(e.childNodes[0].checked){
            e.parentNode.removeChild(e);
        }   
    });
}

//this controls the top check box, if it is clicked, 
//all other checkboxes will be checked
document.getElementById("check-all").addEventListener("change",function(){
    if(this.checked){
        document.querySelectorAll(".todo-item").forEach(function(e){
            e.childNodes[0].checked = true;
        })
    }
    else if(!this.checked){
        document.querySelectorAll(".todo-item").forEach(function(e){
            e.childNodes[0].checked = false;
        })
    }
})