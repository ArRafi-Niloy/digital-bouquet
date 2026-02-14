function rainFlowers() {
    const flowerContainer = document.getElementById('flowerFallContainer');
    // MAKE SURE THESE MATCH YOUR FILENAMES EXACTLY
    const flowerFiles = ['F1.png', 'F2.png', 'F3.png', 'F4.png', 'F5.png'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const flower = document.createElement('img');
            const randomFile = flowerFiles[Math.floor(Math.random() * flowerFiles.length)];
            
            flower.src = `images/${randomFile}`;
            flower.classList.add('falling-flower');
            flower.style.left = Math.random() * 90 + "%";
            
            const duration = 2 + Math.random() * 3;
            flower.style.animation = `fallDown ${duration}s linear forwards`;
            
            flower.onerror = function() { this.remove(); };
            
            if (flowerContainer) {
                flowerContainer.appendChild(flower);
            }
            setTimeout(() => flower.remove(), duration * 1000);
        }, i * 150);
    }
}