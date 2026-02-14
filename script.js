function rainFlowers() {
    // List of your 5 flower filenames
    const flowerFiles = ['F1.png', 'F2.png', 'F3.png', 'F4.png', 'F5.png'];

    for (let i = 0; i < 25; i++) { // Increased count to 25 for a better effect
        setTimeout(() => {
            const flower = document.createElement('img');
            
            // Randomly pick one flower from the list
            const randomFlower = flowerFiles[Math.floor(Math.random() * flowerFiles.length)];
            
            flower.src = `images/${randomFlower}`; 
            flower.classList.add('falling-flower');
            
            // Random horizontal position (0 to 100%)
            const startX = Math.random() * 100;
            flower.style.left = startX + "%";
            
            // Random size so they aren't all the same
            const size = 30 + Math.random() * 30; // 30px to 60px
            flower.style.width = size + "px";
            
            // Random fall duration (3 to 6 seconds)
            const duration = 3 + Math.random() * 3;
            flower.style.animation = `fallDown ${duration}s linear forwards`;
            
            flowerContainer.appendChild(flower);
            
            // Remove from memory after it finishes falling
            setTimeout(() => { flower.remove(); }, duration * 1000);
        }, i * 150); 
    }
}