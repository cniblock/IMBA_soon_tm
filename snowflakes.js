document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.getElementById('snowflakes-container');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '*';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Slower fall
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflakesContainer.appendChild(snowflake);
    }

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            const x = event.gamma; // In degree in the range [-90,90]
            const y = event.beta;  // In degree in the range [-180,180]

            const snowflakes = document.querySelectorAll('.snowflake');
            snowflakes.forEach(snowflake => {
                const offsetX = (x / 90) * 10; // Adjust the multiplier for sensitivity
                const offsetY = (y / 180) * 10; // Adjust the multiplier for sensitivity
                snowflake.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            });
        });
    }
});