// Get users from localStorage
let users = JSON.parse(localStorage.getItem('users'));

// Get variables from HTML document
let useremail = document.getElementById('email');
let password = document.getElementById('password');
let allInputs = document.querySelectorAll('input');
let signInBtn = document.getElementById('signInBtn');
let rememberMe = document.getElementById('rememberMe');
let logInArea = document.getElementById('logInArea');

// Get variables from HTML of forget password
let forgetPasswordArea = document.getElementById('forgetPasswordArea');
let backToLogIn = document.getElementById('backToLogIn');
let sendPassword = document.getElementById('sendPassword');
let emailOfForgottenPassword = document.getElementById('emailOfForgottenPassword');
let forgetPasswordForm = document.getElementById('forgetPasswordForm');
let recivingPasswordMsg = document.getElementById('recivingPasswordMsg');

// Get variables of alert from HTML document
let alertBox = document.getElementById('alertBox');
let fillFields = document.getElementById('fillFields');
let emailOrPasswordInvalid = document.getElementById('emailOrPasswordInvalid');

// Get forget password button
let forgetPasswordBtn = document.getElementById('forgetPasswordBtn');

// remove alert when typing
for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('keyup', () => {
        alertBox.classList.add('d-none');
        fillFields.classList.add('d-none');
    })
}

// if current user excit don't back to login page
// if (localStorage.getItem('currentUser') != null) {
//     window.location.href='../index.html'
// }

// =======================================================

signInBtn.addEventListener('click', () => {
    checkEmptyFields()
})

// check empty fields
function checkEmptyFields() {
    if (useremail.value == "" && password.value == "") {
        alertBox.classList.remove('d-none');
        fillFields.classList.remove('d-none');
    }
    else {
        userExcistance()
    }
}

// check if user excist or not
function userExcistance() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == useremail.value && users[i].password == password.value) {
            setUpCurrentUser(i);
            window.location.href = '../index.html';
            break;
        }
        else {
            alertBox.classList.remove('d-none');
            emailOrPasswordInvalid.classList.remove('d-none');
        }
    }
}

// setUp current user in localstorage
function setUpCurrentUser(index) {
    let fName = users[index].firstName;
    let lName = users[index].lastName;
    let fullName = `${fName}${lName}`
    localStorage.setItem('currentUser', fullName);
    keepLogIn()
}

// if user need to keep it login
function keepLogIn() {
    if (rememberMe.checked) {
        localStorage.setItem('keepUserLogin', true)
    }
}

// <!-- PaulaSoliman94.develop@gmail.com -->
//   <!-- 01221521221 -->

// Forget Password
forgetPasswordBtn.addEventListener('click', () => {
    logInArea.classList.add('d-none');
    forgetPasswordArea.classList.remove('d-none');
})

// Back to login Area
backToLogIn.addEventListener('click', () => {
    logInArea.classList.remove('d-none');
    forgetPasswordArea.classList.add('d-none');
})

// Send the forgotten password
sendPassword.addEventListener('click', sendMessage)

function sendMessage(e) {
    e.preventDefault();
    getForgottenPassword()
    forgetPasswordForm.addEventListener('submit', sendMessage);
    recivingPasswordMsg.classList.remove('d-none');
    setTimeout(() => {
        logInArea.classList.remove('d-none');
        forgetPasswordArea.classList.add('d-none');
    }, 3000);
}

function getForgottenPassword() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == emailOfForgottenPassword.value) {
            Email.send({
                SecureToken: "c7bcbe0a-9341-4e7b-9202-2c7d199846b6",
                To: users[i].email,
                From: 'paulasolimanfarag@gmail.com',
                Subject: "Your password",
                Body: `Your Password is ${users[i].password} <br>
                Please make sure to change your password
                    `
            }).then(
                message => console.log(message)
            );
        }
    }
}