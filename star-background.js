document.addEventListener('DOMContentLoaded', () => {
    // Configuration
    const numStars = 100; // Number of stars
    const starBackground = document.getElementById('star-background');

    // Function to generate a random number within a range
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Create stars
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random size between 1px and 3px
        const size = random(1, 3);
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random initial position
        star.style.top = `${random(0, 100)}%`;
        star.style.left = `${random(0, 100)}%`;

        // Random animation duration
        const duration = random(10, 30); // Animation duration between 10s and 30s
        star.style.animationDuration = `${duration}s`;

        // Append star to the background container
        starBackground.appendChild(star);
    }
});
