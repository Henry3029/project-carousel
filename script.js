  // --- Carousel Logic ---

        const Carousel = (() => {
            // DOM Elements
            const carouselContainer = document.getElementById('carousel-component');
            const slideTrack = document.getElementById('slide-track');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const navDotsContainer = document.getElementById('nav-dots');

            // Constants
            const SLIDE_COUNT = slides.length;
            const AUTOSLIDE_INTERVAL = 5000; // 5 seconds

            // State
            let currentSlide = 0;
            let autoSlideTimer;

            /**
             * Updates the carousel's visual state to display the currentSlide.
             * This is done by shifting the entire slideTrack horizontally.
             */
            const updateCarousel = () => {
                // Calculate the percentage to shift the track.
                // Example: Slide 1 (index 0) shifts 0%. Slide 2 (index 1) shifts -100%.
                const offset = currentSlide * -100;
                slideTrack.style.left = `${offset}%`;

                // Update the navigation dots
                updateDots();

                // Restart the auto-slide timer
                resetAutoSlide();
            };

            /**
             * Advances the carousel to the next slide, cycling back to the start if necessary.
             */
            const nextSlide = () => {
                currentSlide = (currentSlide + 1) % SLIDE_COUNT;
                updateCarousel();
            };

            /**
             * Moves the carousel to the previous slide, cycling to the end if necessary.
             */
            const prevSlide = () => {
                currentSlide = (currentSlide - 1 + SLIDE_COUNT) % SLIDE_COUNT;
                updateCarousel();
            };

            /**
             * Creates and initializes the clickable navigation dots.
             */
            const initDots = () => {
                for (let i = 0; i < SLIDE_COUNT; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    dot.dataset.slideIndex = i; // Store the target slide index on the dot element

                    dot.addEventListener('click', () => {
                        currentSlide = i; // Set the state to the clicked dot's index
                        updateCarousel();
                    });

                    navDotsContainer.appendChild(dot);
                }
            };

            /**
             * Updates the visual appearance of the navigation dots to highlight the active slide.
             */
            const updateDots = () => {
                const dots = document.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    // Check if the dot's index matches the currentSlide index
                    if (index === currentSlide) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            };

            /**
             * Sets up the automatic slide transition with a timer.
             */
            const startAutoSlide = () => {
                // Clear any existing timer to prevent duplicates
                clearInterval(autoSlideTimer); 
                
                // Set a new timer to call nextSlide() every 5 seconds
                autoSlideTimer = setInterval(nextSlide, AUTOSLIDE_INTERVAL);
            };

            /**
             * Clears and restarts the auto-slide timer.
             */
            const resetAutoSlide = () => {
                clearInterval(autoSlideTimer);
                startAutoSlide();
            };

            /**
             * Main initialization function
             */
            const init = () => {
                if (!carouselContainer) return console.error("Carousel container not found.");

                // 1. Initialize event listeners for arrows
                nextBtn.addEventListener('click', nextSlide);
                prevBtn.addEventListener('click', prevSlide);

                // 2. Build and initialize navigation dots
                initDots();
                
                // 3. Set the initial state
                updateCarousel();

                // 4. Start the automatic rotation
                startAutoSlide();
                
                // Optional: Stop auto-sliding when the user hovers over the carousel
                carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
                carouselContainer.addEventListener('mouseleave', resetAutoSlide);
            };

            return { init };
        })();

        // Start the carousel once the page content is loaded
        document.addEventListener('DOMContentLoaded', Carousel.init);