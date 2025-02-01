var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var general = document.getElementById("general");
var request = document.getElementById("request");
var message = document.getElementById("message");
var agree = document.getElementById("agree");
var submit = document.getElementById("submit");
var error = document.getElementsByClassName("error");
var success = document.getElementById("success");

submit.addEventListener("click", function(e) {
    
    if (firstName.value === "") {
        firstName.style.border = "2px solid red";
        error[0].style.display = "block";
    } else{
        firstName.style.border = "2px solid green";
        error[0].style.display = "none";
    }
    
    if (lastName.value === "") {
        lastName.style.border = "2px solid red";
        error[1].style.display = "block";
    } else{
        lastName.style.border = "2px solid green";
        error[1].style.display = "none";
    }
    
    if (email.value === "") {
        email.style.border = "2px solid red";
        error[3].style.display = "block";
        error[2].style.display = "none";
    } else if(email.value.indexOf("@") === -1){
        error[3].style.display = "none";
        email.style.border = "2px solid red";
        error[2].style.display = "block";
    }
    else{
        email.style.border = "2px solid green";
        error[2].style.display = "none";
        error[3].style.display = "none";
    }
    
    if (!general.checked && !request.checked) {
        error[4].style.display = "block";
    } else{
        error[4].style.display = "none";
    }

    
    if (message.value === "") {
        message.style.border = "2px solid red";
        error[5].style.display = "block";
    } else{
        message.style.border = "2px solid green";
        error[5].style.display = "none";
    }
    
    if (!agree.checked) {
        error[6].style.display = "block";
    } else{
        error[6].style.display = "none";
    }
    
    if (firstName.value !== "" && lastName.value !== "" && email.value !== "" && !(email.value.indexOf("@") === -1) && message.value !== "" && agree.checked && (general.checked || request.checked) ) {
        success.style.display = "block";
        window.scrollTo(0, 0);
        e.preventDefault();
        setTimeout(function() {
            firstName.value = "";
            lastName.value = "";
            email.value = "";
            general.checked = false;
            request.checked = false;
            message.value = "";
            agree.checked = false;
            firstName.style.border = "2px solid var(--Grey500medium)";
            lastName.style.border = "2px solid var(--Grey500medium)";
            email.style.border = "2px solid var(--Grey500medium)";
            message.style.border = "2px solid var(--Grey500medium)";
        }, 0);
        setTimeout(() => {
            success.style.display = "none";
        }, 3000);
    }
});

