const params = new URLSearchParams(window.location.search);

// Get values
const name = params.get("name") || "Someone Special";
const msg = params.get("msg") || "I made this for you ❤️";
const pic = params.get("pic");

// Set text
document.getElementById("title").innerText =
  "For " + name + " 🌸";

document.getElementById("msg").innerText = msg;

// Set picture
if (pic) {
  document.getElementById("userPic").src = pic;
} else {
  document.getElementById("userPic").src =
    "https://via.placeholder.com/150";
}
window.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
});
