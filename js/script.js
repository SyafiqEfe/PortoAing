function toggleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = trailer.querySelector("video");
}

function changeBg(bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");

  banner.style.backgroundImage = `url('./img/movies/${bg}')`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  changeBg("bg-the-covenant.webp", "the-covenant");

  document.querySelector(".trailer").style.display = "none";
});

// JavaScript to toggle sidebar visibility
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.querySelector(".close-btn");

hamburgerMenu.addEventListener("click", () => {
  sidebar.style.left = "0"; // Slide in the sidebar
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-100%"; // Slide out the sidebar
});
