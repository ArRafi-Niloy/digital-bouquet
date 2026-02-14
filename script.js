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
    
    // UPDATED: These now match your Capitalized filenames F1, F2...
    // If your files are .jpg, change .png to .jpg below!
    const flowerFiles = ['F1.png', 'F2.png', 'F3.png', 'F4.png', 'F5.png'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const flower = document.createElement('img');
            const randomFile = flowerFiles[Math.floor(Math.random() * flowerFiles.length)];
            
            flower.src = `images/${randomFile}`;
            flower.classList.add('falling-flower');
            flower.style.left = Math.random() * 90 + "%";
            
            const duration = 2.5 + Math.random() * 2.5;
            flower.style.animation = `fallDown ${duration}s linear forwards`;
            
            flower.onerror = () => flower.style.display = 'none';
            
            if (flowerContainer) {
                flowerContainer.appendChild(flower);
            }

            setTimeout(() => flower.remove(), duration * 1000);
        }, i * 150);
    }
}