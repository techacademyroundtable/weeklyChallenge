function createCard() {
    var name = document.getElementById("name-input").value;
    var title = document.getElementById("title-input").value;
    var phone = document.getElementById("phone-input").value;
    var email = document.getElementById("email-input").value;
    var bkgColor = document.getElementById("card-back-select").value;
    document.getElementById("card").style.backgroundColor = bkgColor;
    document.getElementById("name").innerHTML = name;
    document.getElementById("job-title").innerHTML = title;
    document.getElementById("phone").innerHTML = phone;
    document.getElementById("email").innerHTML = email;
}

function clearFields(){
    location.reload()
}