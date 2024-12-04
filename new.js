//Booking button
document.addEventListener("DOMContentLoaded", function() {
    const bookBtn = document.getElementById("bookBtn");
    const bookingFormSection = document.getElementById("booking");
    const bookingForm = document.getElementById("bookingForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    // Toggle the visibility of the booking form
    bookBtn.addEventListener("click", function() {
        // Show the booking form when the button is clicked
        bookingFormSection.style.display = 'block';
    });

    // Handle form submission
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // You can send this data to a server here using AJAX or a form submission
        console.log("Form Data Submitted: ", { name, phone, email, message });

        // Show a thank-you message
        thankYouMessage.textContent = `Thank you for choosing Great Rift Valley Apartments, ${name}! We will contact you soon.`;
        thankYouMessage.style.display = "block";

        // Hide the form after submission
        bookingFormSection.style.display = "none";

        // Optionally, reset the form after submission
        bookingForm.reset();
    });
});




// Slider functionality
const slider = document.getElementById('programSlider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.getElementById('sliderDots');

let currentSlide = 0;
const totalSlides = slides.length;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
}

// Event listeners for next and prev buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-advance slides every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto-advance on hover
slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});

// Optional: Add touch support for mobile swipe gestures
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        nextSlide();
    } else if (touchEndX - touchStartX > 50) {
        prevSlide();
    }
});

        
