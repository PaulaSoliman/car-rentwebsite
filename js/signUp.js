let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let allInputs = document.querySelectorAll('input')
let signUpBtn = document.getElementById('signUpBtn');
let alertBox = document.getElementById('alertBox');
let fillFields = document.getElementById('fillFields');
let existanceEmail = document.getElementById('existanceEmail');
let validationOfEmail = document.getElementById('validationOfEmail');
let users;



// Import Users from local Storage
(function importDataFromLocalStorage() {
    if (localStorage.getItem('users') != null) {
        users = JSON.parse(localStorage.getItem('users'));

    }
    else {
        users = [];
    }
})()
// =============================

// Remove alertBox
for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('keyup', function () {
        alertBox.classList.add('d-none');
    })
}
// =============================


signUpBtn.addEventListener('click', () => {
    if (fName.value != "" && lName.value != "" && email.value != "" && password.value != "" && checkExistanceUser() == false || users.length == 0) {
        if (emailValedation()) {
            collectInfo(doneMessage())
        }
        else {
            alertBox.classList.remove('d-none');
            validationOfEmail.classList.remove('d-none');
        }
    }
    else if (checkExistanceUser() == true) {
        alertBox.classList.remove('d-none');
        existanceEmail.classList.remove('d-none');
    }
    else {
        alertBox.classList.remove('d-none');
        fillFields.classList.remove('d-none');
    }
})

function collectInfo() {
    let userInfo = {
        firstName: fName.value,
        lastName: lName.value,
        email: email.value,
        password: password.value
    }
    users.push(userInfo);
    localStorage.setItem('users', JSON.stringify(users));
}

function checkExistanceUser() {
    for (let i = 0; i < users.length; i++) {
        if (email.value == users[i].email) {
            console.log(email.value);
            return true;
        }
        else {
            return false;
        }
    }
}

function emailValedation() {
    let emailRagex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRagex.test(email.value)) {
        return true;
    }
}

function doneMessage(){
    swal({
        title: "Done!",
        icon: "success",
    })
    setTimeout(function () {
        window.location.href = "../logIn.html"
    }, 1000)
}