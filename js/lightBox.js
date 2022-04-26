// select all imgs
let imgs = Array.from(document.querySelectorAll('#services img'));
let lightBox = document.querySelector('.lightBox');
let lightBoxContent = document.querySelector('.lightBoxContent');
let currentIndex = 0;

// Get Buttons from HTML documents
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let exit = document.getElementById('exit')

// using clicking
// ==================================================
// ===! mesh sh3'alen mesh 3aref leeh ????!!! ===
// next.addEventListener('click', nextImage);
// exit.addEventListener('click', closeLightBox);
// prev.addEventListener('click', prevImage);
// ==================================================

document.addEventListener('click',(e)=>{
    if(e.target.getAttribute('id')=='next'){
        nextImage();
    }
    else if(e.target.getAttribute('id')=='prev'){
        prevImage();
    }
    else if(e.target.getAttribute('id')=='exit'){
        closeLightBox();
    }
})
// Using Keyboard
document.addEventListener('keyup', (e) => {
    if (e.code == "Escape") {
        closeLightBox()
    }
    else if (e.code == 'ArrowRight') {
        nextImage()
    }
    else if (e.code == 'ArrowLeft') {
        prevImage()
    }
})


for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', (e) => {
        lightBox.classList.replace('d-none', 'd-block');

        currentIndex = imgs.indexOf(e.target);
        let imgSrc = e.target.getAttribute('src');
        lightBoxContent.style.backgroundImage = `url(${imgSrc})`
    })
}

function closeLightBox() {
    lightBox.classList.replace('d-block', 'd-none');
}

function nextImage() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
        getImage()
    }
    else {
        getImage()
    }
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
        getImage()
    }
    else {
        getImage()
    }
}

function getImage() {
    let imgSrc = imgs[currentIndex].getAttribute('src');
    lightBoxContent.style.backgroundImage = `url(${imgSrc})`
}
// ==============================================================

