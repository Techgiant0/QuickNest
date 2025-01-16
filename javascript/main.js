// Run JavaScript only on desktop
if (!window.matchMedia("(max-width: 768px)").matches) {
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
} else {
    console.log("Skipping animation on mobile devices.");
}

const hamburger = document.querySelector('.menu-hamburger')
const menu = document.querySelector('#curtain-menu-mobile')
const bar = document.querySelector('.search-bar')
const text = document.querySelector('.text-section')
const button = document.querySelector('.explore-button')

hamburger.addEventListener('click', () => {
    // Check if menu is currently active
    const isActive = hamburger.classList.contains('active');
    
    if (isActive) {
        // Remove active classes
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        bar.classList.remove('active');
        text.classList.remove('active');
        button.classList.remove('active');
        document.body.classList.remove('no-scroll');
    } else {
        // Add active classes
        hamburger.classList.add('active');
        menu.classList.add('active');
        bar.classList.add('active');
        text.classList.add('active');
        button.classList.add('active');
        document.body.classList.add('no-scroll');
    }
});

document.querySelectorAll('#link').forEach(link => 
  link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    menu.classList.remove('active')
  })
)