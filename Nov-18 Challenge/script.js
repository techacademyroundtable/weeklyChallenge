//*****Global variables*****//

var nameLst = [];
//grabbing all of my buttons here and setting the divide btn to disabled by default
var divideBtn = document.getElementById("divide");
divideBtn.disabled = true;
var clearBtn = document.getElementById("clear");
var addNameBtn = document.getElementById("add-name")

//*****Global variables*****//


function addName() {
    //this will display names entered into the input and add that name
    //to a list,  which will be used later
    switchBtn();
    var input = document.getElementById("input").value;
    if (input == ""){ //if the input is empty, the function will end here
        return;
    }
    var display = document.getElementById("display-box");
    nameLst.push(input); // adding the name to the list
    var newName = document.createElement("p");//creating a new element each time
    newName.classList.add("name");            //this function is called
    newName.append(input);                    // then adding a class for styling
    display.append(newName);
    document.getElementById("input").value = '';
    console.log(nameLst);
}

function maxNames() {
    if (nameLst.length == 8) {
      return true;
    }
}

function switchBtn() {
    //this will be called every time a name is entered to check 
    //if the buttons need to switch active/inactive
    if (maxNames()){
        addNameBtn.disabled = true;
        divideBtn.disabled = false;
    }
    else {
        addNameBtn.disabled = false;
        divideBtn.disabled = true;
    }
    }

function clearFields() {
    switchBtn();
    //this will clear all the fields
    document.getElementById("input").value = '';
    var display = document.getElementById("display-box");
    //this will loop through the <p> elements and remove them each
    while (display.firstChild){
        display.removeChild(display.firstChild);
    }
    var gridBoxes = document.querySelectorAll(".cell");
    for (i = 0; i < gridBoxes.length; i++){
        gridBoxes[i].innerHTML = '';
    }
    //clears the name list
    nameLst = [];
    console.log(nameLst);
}

function shuffle(nameLst) {
    return nameLst.sort(() => Math.random() - 0.5);
}

function divideNames() {
    shuffle(nameLst);
    var gridBoxes = document.querySelectorAll(".cell");
    for (i = 0; i < gridBoxes.length; i ++){
        gridBoxes[i].append(nameLst[i]);
    }
}