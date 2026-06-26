// =====================================
// ELEMENTS
// =====================================

const navLogo = document.querySelector(".nav-logo");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

const hero = document.querySelector(".hero");


// =====================================
// SHOW LOGO AFTER HERO
// =====================================

window.addEventListener("scroll", () => {

    const triggerPoint = hero.offsetHeight * 0.8;

    if (window.scrollY > triggerPoint) {

        navLogo.classList.add("show-logo");

    } else {

        navLogo.classList.remove("show-logo");

    }

});

// =====================================
// SLIDESHOW ON
// =====================================

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dotsContainer = document.querySelector('.dots');

let index = 0;

// create dots
images.forEach((_, i) => {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
        index = i;
        updateSlider();
    });
});

const dots = document.querySelectorAll('.dots button');

function updateSlider(){
    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
}

// autoplay
setInterval(() => {
    index = (index + 1) % images.length;
    updateSlider();
}, 4000);



// =====================================
// MOBILE MENU TOGGLE
// =====================================

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("active");
});


// =====================================
// CLOSE MENU WHEN LINK CLICKED
// =====================================

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});



// =====================================
// OPTIONAL SCROLL ANIMATIONS
// =====================================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll(
    ".about-section, .tickets-section, .cottage-section, .company-section"
).forEach(section => {

    observer.observe(section);

});

// =====================================
// MEDIA LIGHTBOX
// =====================================

(() => {

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    if (!galleryImages.length) return;

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    const images = [...galleryImages];

    let currentIndex = 0;

    let touchStartX = 0;
    let touchEndX = 0;

    function showImage(index){

        currentIndex = (index + images.length) % images.length;

        lightboxImg.src = images[currentIndex].src;

    }

    function openLightbox(index){

        showImage(index);

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeLightbox(){

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

    images.forEach((img,index)=>{

        img.addEventListener("click",()=>{

            openLightbox(index);

        });

    });

    nextBtn.addEventListener("click",()=>{

        showImage(currentIndex+1);

    });

    prevBtn.addEventListener("click",()=>{

        showImage(currentIndex-1);

    });

    closeBtn.addEventListener("click",closeLightbox);

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            closeLightbox();

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("active")) return;

        switch(e.key){

            case "ArrowRight":
                showImage(currentIndex+1);
                break;

            case "ArrowLeft":
                showImage(currentIndex-1);
                break;

            case "Escape":
                closeLightbox();
                break;

        }

    });

    // Swipe support

    lightbox.addEventListener("touchstart",(e)=>{

        touchStartX = e.changedTouches[0].screenX;

    });

    lightbox.addEventListener("touchend",(e)=>{

        touchEndX = e.changedTouches[0].screenX;

        const distance = touchStartX - touchEndX;

        if(Math.abs(distance) < 50) return;

        if(distance > 0){

            showImage(currentIndex+1);

        }else{

            showImage(currentIndex-1);

        }

    });

})();