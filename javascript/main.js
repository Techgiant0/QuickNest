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
  hamburger.classList.toggle('active')
  menu.classList.toggle('active')
  bar.classList.toggle('active')
  text.classList.toggle('active')
  button.classList.toggle('active')
  document.body.classList.toggle('no-scroll')
})

document.querySelectorAll('.menu-link').forEach(link => 
  link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    menu.classList.remove('active')
  })
)

const data = {};
async function setElementStyles(el, styles) {
  for (const [key, value] of Object.entries(styles)) {
    el.style[key] = value;
  }
}
const secondInput = document.querySelector('#subscribe input:nth-child(2)');
const subscribeDiv = document.querySelector('#subscribe');
if (secondInput) {
  await setElementStyles(secondInput, {
    boxSizing: 'border-box',
    position: 'static',
    left: 'auto',
    right: 'auto',
  });
}
if (subscribeDiv) {
  await setElementStyles(subscribeDiv, {
    flexWrap: 'wrap',
  });
}