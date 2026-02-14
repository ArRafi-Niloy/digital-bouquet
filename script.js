const startBtn = document.getElementById('startBtn');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');
const bgMusic = document.getElementById('bgMusic');
const bouquet = document.getElementById('bouquet');

// Start Function
startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    mainContent.style.display = 'flex';
    bgMusic.play();
});

// Adding Flower Logic
function addFlower() {
    const newFlower = document.createElement('img');
    newFlower.src = "images/flower.jpg";
    newFlower.classList.add('flower-in-bouquet');

    // Randomize where they land in the "vase"
    const randomX = Math.floor(Math.random() * 140) - 70; 
    const randomRotate = Math.floor(Math.random() * 60) - 30;
    
    newFlower.style.left = `calc(50% + ${randomX}px)`;
    newFlower.style.bottom = "60px";
    newFlower.style.transform = `translateX(-50%) rotate(${randomRotate}deg)`;

    bouquet.appendChild(newFlower);
}

function resetBouquet() {
    const flowers = document.querySelectorAll('.flower-in-bouquet');
    flowers.forEach(f => f.remove());
}