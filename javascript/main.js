document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.stays-section-card-container');
    let cloned = slider.innerHTML;
    slider.innerHTML += cloned;

    let start = 0;
    let animationFrame;

    function animate() {
        start -= 1; 
        if (start <= -slider.scrollWidth / 2) {
            start = 0; 
        }
        slider.style.transform = `translateX(${start}px)`;
        animationFrame = requestAnimationFrame(animate); 
    }

    // Start the animation
    animate();

    // Stop the animation on hover
    slider.addEventListener("mouseenter", function() {
        cancelAnimationFrame(animationFrame);
    });

    // Resume the animation when hover ends
    slider.addEventListener("mouseleave", function() {
        animate();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('tourist-attraction-section-card-container');
    let cloned = slider.innerHTML;
    slider.innerHTML += cloned;

    let start = 0;
    let animationFrame;

    function animate() {
        start -= 1; 
        if (start <= -slider.scrollWidth / 2) {
            start = 0; 
        }
        slider.style.transform = `translateX(${start}px)`;
        animationFrame = requestAnimationFrame(animate); 
    }

    // Start the animation
    animate();

    // Stop the animation on hover
    slider.addEventListener("mouseenter", function() {
        cancelAnimationFrame(animationFrame);
    });

    // Resume the animation when hover ends
    slider.addEventListener("mouseleave", function() {
        animate();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById('testimonial-card-section');
    let cloned = slider.innerHTML;
    slider.innerHTML += cloned;

    let start = 0;
    let animationFrame;

    function animate() {
        start -= 1; 
        if (start <= -slider.scrollWidth / 2) {
            start = 0; 
        }
        slider.style.transform = `translateX(${start}px)`;
        animationFrame = requestAnimationFrame(animate); 
    }

    // Start the animation
    animate();

    // Stop the animation on hover
    slider.addEventListener("mouseenter", function() {
        cancelAnimationFrame(animationFrame);
    });

    // Resume the animation when hover ends
    slider.addEventListener("mouseleave", function() {
        animate();
    });
});