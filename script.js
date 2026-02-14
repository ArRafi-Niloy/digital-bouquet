document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('mainContent');
    const bgMusic = document.getElementById('bgMusic');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
            mainContent.style.display = 'flex';
            if (bgMusic) {
                bgMusic.play().catch(() => console.log("Music blocked"));
            }
        });
    }
});

function rainFlowers() {
    const flowerContainer = document.getElementById('flowerFallContainer');
    
    // Check if your images are .png or .jpg and match it here
    const flowerFiles = ['F1.png', 'F2.png', 'F3.png', 'F4.png', 'F5.png'];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const flower = document.createElement('img');
            
            // This picks a random number between 0 and 4
            const randomIndex = Math.floor(Math.random() * flowerFiles.length);
            const randomFile = flowerFiles[randomIndex];
            
            flower.src = `images/${randomFile}`;
            flower.classList.add('falling-flower');
            
            // Random horizontal position
            flower.style.left = Math.random() * 90 + "%";
            
            // Random speed
            const duration = 2 + Math.random() * 3;
            flower.style.animation = `fallDown ${duration}s linear forwards`;
            
            // If the image is missing, don't show the broken icon
            flower.onerror = function() { this.remove(); };
            
            if (flowerContainer) {
                flowerContainer.appendChild(flower);
            }

            // Clean up after fall
            setTimeout(() => {
                if(flower) flower.remove();
            }, duration * 1000);
        }, i * 150);
    }
}