const startBtn = document.getElementById('startBtn');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');
const flowerContainer = document.getElementById('flowerFallContainer');

startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    mainContent.style.display = 'flex';
    bgMusic.play();
});

function rainFlowers() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const flower = document.createElement('img');
            flower.src = "images/flower.jpg"; // Using your existing flower image
            flower.classList.add('falling-flower');
            
            // Random horizontal position within the polaroid
            const startX = Math.random() * 100;
            flower.style.left = startX + "%";
            
            // Random fall duration for natural look
            const duration = 2 + Math.random() * 3;
            flower.style.animation = `fallDown ${duration}s linear forwards`;
            
            flowerContainer.appendChild(flower);
            
            // Clean up the flower after it falls
            setTimeout(() => { flower.remove(); }, duration * 1000);
        }, i * 200); // Stagger the start times
    }
}