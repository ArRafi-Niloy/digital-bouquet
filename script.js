const startBtn = document.getElementById('startBtn');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');

// Start Function
startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    mainContent.style.display = 'flex';
    
    // Attempt to play music
    bgMusic.play().catch(error => {
        console.log("Music play blocked by browser. Interaction required.");
    });
});