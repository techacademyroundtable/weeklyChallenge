
// function convert() {
//     var input = document.getElementById("input").value;
//     var type = document.getElementById("select").value;
//     var output = document.getElementById("output");
//     if (type == "fahrenheit") {
//         output.innerHTML = ((input - 32) / 1.8).toFixed(1) + "&#8451;";
//     }
//     if (type == "celsius") {
//         output.innerHTML = ((input * 1.8) + 32).toFixed(1) + "&#8457;";
//     }
// }

function convert() {
    var input = document.getElementById("input").value;
    var type = document.getElementById("select").value;
    var output = document.getElementById("output");
    if (isNaN(input) || input == "") {
        window.alert("Please enter a valid temperature using only numbers");
    }
    else {
        if (type == "fahrenheit") {
            output.innerHTML = ((input - 32) / 1.8).toFixed(2) + "&#8451;";
        }
        if (type == "celsius") {
            output.innerHTML = ((input * 1.8) + 32).toFixed(2) + "&#8457;";
        }
    }
}

function clearFields() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerHTML = "";
}

// document.getElementById("clear").onclick(function() {
//     document.getElementById("input").innerHTML = " ";
//     document.getElementById("output").innerHTML = " ";
// });