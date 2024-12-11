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
});