/*
document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.features-card-container');
    const cards = document.querySelectorAll('.features-card');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;

    // Function to update slider
    function updateSlider(newSlide) {
        // Remove active class from current slide and dot
        cards[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Update current slide
        currentSlide = newSlide;

        // Add active class to new slide and dot
        cards[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Move card container
        cardContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Add click event to dots
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            updateSlider(slideIndex);
        });
    });

    // Auto-slide functionality
    function autoSlide() {
        currentSlide = (currentSlide + 1) % cards.length;
        updateSlider(currentSlide);
    }

    // Auto-slide every 5 seconds
    let slideInterval = setInterval(autoSlide, 5000);

    // Pause auto-slide on hover
    const slider = document.querySelector('.features-slider');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(autoSlide, 5000);
    });
});
*/