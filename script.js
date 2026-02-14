function rainFlowers() {
    const flowerContainer = document.getElementById('flowerFallContainer');
    
    // This list covers both PNG and JPG just in case your files are mixed
    const flowerFiles = [
        'F1.png', 'F2.png', 'F3.png', 'F4.png', 'F5.png',
        'F1.jpg', 'F2.jpg', 'F3.jpg', 'F4.jpg', 'F5.jpg'
    ];

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const flower = document.createElement('img');
            
            // Pick a random flower from the list
            const randomFile = flowerFiles[Math.floor(Math.random() * flowerFiles.length)];
            
            flower.src = `images/${randomFile}`;
            flower.classList.add('falling-flower');
            
            // Randomize position and look
            flower.style.left = Math.random() * 90 + "%";
            const size = 30 + Math.random() * 20; // Varies size between 30px-50px
            flower.style.width = size + "px";
            
            const duration = 3 + Math.random() * 2;
            flower.style.animation = `fallDown ${duration}s linear forwards`;
            
            // IMPORTANT: If a file (like F2.png) doesn't exist, this hides the broken icon
            // and tries to load the .jpg version instead
            flower.onerror = function() {
                if (this.src.includes('.png')) {
                    this.src = this.src.replace('.png', '.jpg');
                } else {
                    this.remove(); 
                }
            };
            
            if (flowerContainer) {
                flowerContainer.appendChild(flower);
            }

            setTimeout(() => flower.remove(), duration * 1000);
        }, i * 150);
    }
}