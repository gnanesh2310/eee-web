let slideIndex = 0;
let slidesCount = 0;
const slidesContainer = document.querySelector('.slider-container');

function updateSlidePosition() {
    const offset = -(slideIndex % slidesCount) * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function showSlide() {
    slideIndex++;
    if (slideIndex >slidesCount) {
        slideIndex =  1;
    }
    updateSlidePosition();
}

function nextSlide() {
    slideIndex++;
    updateSlidePosition();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slidesCount - 1;
    }
    updateSlidePosition();
}

function autoScroll() {
    setInterval(showSlide, 3000);
}

function addImage(imgSrc) {
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    document.querySelector('.slides').appendChild(imgElement);
    slidesCount++;
    updateSlidePosition();
}

// Initialize auto-scroll when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    autoScroll();
});

// Example usage to add images dynamically
addImage('pics/1-Centre-for-Advanced-Mobility-Intro-1.jpg');
addImage('pics/2-Centre-for-Advanced-Mobility-Infra-1.jpg');
addImage('pics/3-Wireless-Charger-1.jpg');
addImage('pics/4-PV-fed-Charging-Station-1.jpg');
addImage('pics/5-SynRM-Motor-1.jpg');
addImage('pics/DSC_3230-scaled.jpg');
addImage('pics/NSVC-2020.jpg');

