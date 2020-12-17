
var fifteen = document.getElementById("fifteen");
var eighteen = document.getElementById("eighteen");
var twenty = document.getElementById("twenty");
var twentyFive = document.getElementById("twenty-five");
var btns = [];
btns.push(fifteen,eighteen,twenty,twentyFive);  
btns.forEach(function(e) {e.addEventListener("click", function(){
    this.classList.add("active");
})})


// function pickPercent() {
//     var fifteen = document.getElementById("fifteen");
//     var eighteen = document.getElementById("eighteen");
//     var twenty = document.getElementById("twenty");
//     var twentyFive = document.getElementById("twenty-five");
//     var custom = document.getElementById("custom-tip").value;
//     var btns = [];
//     var percent;
//     btns.push(fifteen,eighteen,twenty,twentyFive);
//     if(custom == ''){
//         for(i = 0; i < btns.length; i++) {
//             if(btns[i].classList.contains("active")){
//                 percent = btns[i].id;
//                 //console.log(percent);
//                 return percent;
//             }
//         }    
//     }
//     else{
//         percent = parseInt(custom)*.01;
//         return percent;
//     }
// }

function pickPercent() {
    var fifteen = document.getElementById("fifteen");
    var eighteen = document.getElementById("eighteen");
    var twenty = document.getElementById("twenty");
    var twentyFive = document.getElementById("twenty-five");
    var percentRadio = document.getElementById("percent-radio").checked;
    var dollarRadio = document.getElementById("dollar-radio").checked;
    var custom = document.getElementById("custom-tip").value;
    var btns = [];
    var percent;
    var radio;
    btns.push(fifteen,eighteen,twenty,twentyFive);
    if(percentRadio == true){
        radio = "percent";
    }
    else if (dollarRadio == true){
        radio = "dollar";
    }
    if(custom == ''){
        for(i = 0; i < btns.length; i++) {
            if(btns[i].classList.contains("active")){
                percent = btns[i].id;
                //console.log(percent);
                return percent;
            }
        }    
    }
    else if(custom !== '' && radio == "percent"){
        percent = parseInt(custom)*.01;
        return percent;
    }
    else if (custom !== '' && radio == "dollar"){
        percent = parseInt(custom);
        return percent;
    }
}

function calculate() {
    percent = pickPercent();
    percentDict = {"fifteen":.15,"eighteen":.18,"twenty":.20,"twenty-five":.25};
    //console.log(percent);
    var cost = parseInt(document.getElementById("input").value);
    var total;
    if (typeof(percent) !== "number"){
        var actPercent = percentDict[percent];
        total = (cost*actPercent) + cost;
    }
    else if(percent % 1 === 0){
        total = cost + percent;
    }
    else {
        total = (cost*percent)+cost;
    }
    document.getElementById("output").innerHTML = total;
}

function clearInput() {
    location.reload();
}