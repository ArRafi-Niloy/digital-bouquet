function rainFlowers() {
    const container = document.getElementById('flowerFallContainer');
    
    // Hard-coded to PNG as you requested
    const flowerFiles = ['F1.png', 'F2.png', 'F3.png', 'F4.png', 'F5.png'];

    for (let i = 0; i < 40; i++) { // Increased to 40 for a beautiful shower!
        setTimeout(() => {
            const img = document.createElement('img');
            
            // Picks one of your 5 PNGs
            const randomFile = flowerFiles[Math.floor(Math.random() * flowerFiles.length)];
            
            img.src = `images/${randomFile}`;
            img.className = 'falling-flower';
            
            // Randomize position
            img.style.left = Math.random() * 90 + "%";
            
            // Randomize size for a natural look
            const size = 30 + Math.random() * 25; 
            img.style.width = size + "px";
            
            // Randomize fall speed
            const duration = 2 + Math.random() * 3;
            img.style.animation = `fallDown ${duration}s linear forwards`;
            
            // Safety: if a specific PNG is missing, don't show a broken icon
            img.onerror = function() { this.remove(); };
            
            container.appendChild(img);
            
            // Remove after animation to keep the site fast
            setTimeout(() => img.remove(), duration * 1000);
        }, i * 120);
    }
}