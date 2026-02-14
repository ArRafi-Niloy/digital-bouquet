const startBtn = document.getElementById('startBtn');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');
const flowerContainer = document.getElementById('flowerFallContainer');

// 1. OPEN GIFT LOGIC
if (startBtn) {
    startBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        mainContent.style.display = 'flex';
        
        // Play music (if it exists)
        if (bgMusic) {
            bgMusic.play().catch(err => console.log("Music play blocked by browser"));
        }
    });
}

// 2. RAIN FLOWERS LOGIC
function rainFlowers() {
    // List your 5 flower names here
    const flowerFiles = ['F1.png', 'F2.png', 'F3.png', 'F4.png', 'F5.png'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const flower = document.createElement('img');
            
            // Randomly pick a flower from your list
            const randomFileName = flowerFiles[Math.floor(Math.random() * flowerFiles.length)];
            
            flower.src = `images/${randomFileName}`;
            flower.classList.add('falling-flower');
            
            // Styles for the fall
            const startX = Math.random() * 90; // Stay slightly away from edges
            flower.style.left = startX + "%";
            
            const duration = 2 + Math.random() * 3;
            flower.style.animation = `fallDown ${duration}s linear forwards`;
            
            // If the image fails to load, don't break the site
            flower.onerror = () => flower.remove();

            if (flowerContainer) {
                flowerContainer.appendChild(flower);
            }
            
            // Remove flower after animation ends
            setTimeout(() => { flower.remove(); }, duration * 1000);
        }, i * 150);
    }
}