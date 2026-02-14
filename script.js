const startBtn = document.getElementById('startBtn');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');
const bouquet = document.getElementById('bouquet');

// Start and Play Music
startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    mainContent.style.display = 'flex';
    bgMusic.play().catch(err => console.log("Music play blocked"));
});

function addFlower() {
    const newFlower = document.createElement('img');
    newFlower.src = "images/flower.jpg"; // Using your exact file name
    newFlower.classList.add('flower-in-bouquet');

    // Randomize position and look
    const randomX = Math.floor(Math.random() * 120) - 60; // Spread left/right
    const randomRotate = Math.floor(Math.random() * 80) - 40; // Tilt -40 to 40 deg
    const randomScale = 0.8 + Math.random() * 0.4; // Slightly different sizes
    const randomBrightness = 90 + Math.random() * 20; // Slightly different lighting

    newFlower.style.left = `calc(50% + ${randomX}px)`;
    newFlower.style.bottom = "80px";
    newFlower.style.transform = `translateX(-50%) rotate(${randomRotate}deg) scale(${randomScale})`;
    newFlower.style.filter = `brightness(${randomBrightness}%)`;

    bouquet.appendChild(newFlower);
}

function resetBouquet() {
    const flowers = document.querySelectorAll('.flower-in-bouquet');
    flowers.forEach(f => f.remove());
}