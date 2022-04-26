// JS Lunching Method of Scroll Reveal
ScrollReveal().reveal(".headline", { delay: 500 });
// ============================================================

// Authentication Area
// Get current user from localStorage
let currentUser = localStorage.getItem('currentUser');

// Get Variables from HTML document
let authenticationSection = document.getElementById('authenticationSection');
let currentUserName = document.getElementById('currentUserName');
let nameAndLogout = document.getElementById('nameAndLogout');

// Get logOut variable 
const logOut = document.getElementById('logOut');

// check if current user is excit or not
if (currentUser != null) {
    authenticationSection.classList.add('d-none');
    nameAndLogout.classList.remove('d-none');
    currentUserName.innerHTML = currentUser;
}

// Logout system
logOut.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('keepUserLogin');
    authenticationSection.classList.remove('d-none');
    nameAndLogout.classList.add('d-none');
})

// ============================================================

// Get variables
const ride = document.getElementById('ride'),
    backHome = document.getElementById('backHome')


// Change Navbar background
$(window).scroll(() => {
    let rideOffSet = $('#ride').offset().top;
    let windowScroll = $(window).scrollTop();
    if (windowScroll > rideOffSet) {
        $('.navbar').css('backgroundColor', 'var(--1stcolor)');
        $('#backHome').css('display','block')
    }
    else {
        $('.navbar').css('backgroundColor', 'transparent');
        $('#backHome').css('display','none')
    }
});

// ============================================================
