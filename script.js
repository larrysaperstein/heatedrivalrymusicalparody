// =====================================
// ELEMENTS
// =====================================

const navLogo = document.querySelector(".nav-logo");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const hero = document.querySelector(".hero");


// =====================================
// SHOW LOGO AFTER HERO (homepage only)
// =====================================

if (navLogo && hero) {

    window.addEventListener("scroll", () => {

        const triggerPoint = hero.offsetHeight * 0.8;

        if (window.scrollY > triggerPoint) {

            navLogo.classList.add("show-logo");

        } else {

            navLogo.classList.remove("show-logo");

        }

    });

}


// =====================================
// SLIDESHOW (homepage only)
// =====================================

const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const dotsContainer = document.querySelector(".dots");

if (slides && slideImages.length && dotsContainer) {

    let index = 0;
    let slideshowTimer = null;
    let slideshowPaused = false;

    slideImages.forEach((_, i) => {

        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);

        if (i === 0) {
            dot.classList.add("active");
            dot.setAttribute("aria-current", "true");
        }

        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {

            index = i;
            updateSlider();

        });

    });

    const dots = document.querySelectorAll(".dots button");

    function updateSlider() {

        slides.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, dotIndex) => {

            dot.classList.toggle("active", dotIndex === index);
            dot.setAttribute("aria-current", dotIndex === index ? "true" : "false");

        });

    }

    function startSlideshow() {

        if (slideshowTimer || slideshowPaused) {
            return;
        }

        slideshowTimer = window.setInterval(() => {

            index = (index + 1) % slideImages.length;
            updateSlider();

        }, 4000);

    }

    function stopSlideshow() {

        if (!slideshowTimer) {
            return;
        }

        window.clearInterval(slideshowTimer);
        slideshowTimer = null;

    }

    const sliderRoot = document.querySelector(".image-slider");

    if (sliderRoot) {

        sliderRoot.addEventListener("mouseenter", stopSlideshow);
        sliderRoot.addEventListener("mouseleave", startSlideshow);
        sliderRoot.addEventListener("focusin", stopSlideshow);
        sliderRoot.addEventListener("focusout", startSlideshow);

    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        slideshowPaused = true;
    } else {
        startSlideshow();
    }

}


// =====================================
// MOBILE MENU TOGGLE
// =====================================

if (hamburger && mobileMenu) {

    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-controls", "mobile-menu");
    hamburger.setAttribute("aria-label", "Open menu");

    if (!mobileMenu.id) {
        mobileMenu.id = "mobile-menu";
    }

    hamburger.addEventListener("click", () => {

        const isOpen = hamburger.classList.toggle("open");
        mobileMenu.classList.toggle("active", isOpen);

        hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
        hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

    });

}


// =====================================
// CLOSE MENU WHEN LINK CLICKED
// =====================================

if (hamburger && mobileMenu) {

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            hamburger.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "Open menu");

        });

    });

}


// =====================================
// OPTIONAL SCROLL ANIMATIONS
// =====================================

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

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

}


// =====================================
// MEDIA LIGHTBOX
// =====================================

(() => {

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    if (!galleryImages.length) {
        return;
    }

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    if (!lightbox || !lightboxImg || !closeBtn || !prevBtn || !nextBtn) {
        return;
    }

    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.setAttribute("aria-label", "Image gallery");
    closeBtn.setAttribute("aria-label", "Close gallery");
    prevBtn.setAttribute("aria-label", "Previous image");
    nextBtn.setAttribute("aria-label", "Next image");

    galleryImages.forEach((img, imgIndex) => {

        img.tabIndex = 0;
        img.setAttribute("role", "button");
        img.setAttribute("aria-label", img.alt || `View image ${imgIndex + 1}`);

        img.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(imgIndex);
            }

        });

    });

    const images = [...galleryImages];

    let currentIndex = 0;
    let lastFocusedElement = null;

    let touchStartX = 0;
    let touchEndX = 0;

    function showImage(index) {

        currentIndex = (index + images.length) % images.length;

        const activeImage = images[currentIndex];

        lightboxImg.src = activeImage.src;
        lightboxImg.alt = activeImage.alt || "";

    }

    function openLightbox(index) {

        lastFocusedElement = document.activeElement;

        showImage(index);

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        closeBtn.focus();

    }

    function closeLightbox() {

        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
            lastFocusedElement.focus();
        }

    }

    images.forEach((img, index) => {

        img.addEventListener("click", () => {

            openLightbox(index);

        });

    });

    nextBtn.addEventListener("click", () => {

        showImage(currentIndex + 1);

    });

    prevBtn.addEventListener("click", () => {

        showImage(currentIndex - 1);

    });

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            closeLightbox();

        }

    });

    document.addEventListener("keydown", (e) => {

        if (!lightbox.classList.contains("active")) {
            return;
        }

        switch (e.key) {

            case "ArrowRight":
                showImage(currentIndex + 1);
                break;

            case "ArrowLeft":
                showImage(currentIndex - 1);
                break;

            case "Escape":
                closeLightbox();
                break;

        }

    });

    lightbox.addEventListener("touchstart", (e) => {

        touchStartX = e.changedTouches[0].screenX;

    }, { passive: true });

    lightbox.addEventListener("touchend", (e) => {

        touchEndX = e.changedTouches[0].screenX;

        const distance = touchStartX - touchEndX;

        if (Math.abs(distance) < 50) {
            return;
        }

        if (distance > 0) {

            showImage(currentIndex + 1);

        } else {

            showImage(currentIndex - 1);

        }

    }, { passive: true });

})();
