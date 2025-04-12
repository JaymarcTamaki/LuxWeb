const slider = document.querySelector('.gallery-slider');
const leftArrow = document.querySelector('.gallery-arrow.left');
const rightArrow = document.querySelector('.gallery-arrow.right');

const scrollAmount = slider.offsetWidth; // Scroll one full image at a time

leftArrow.addEventListener('click', () => {
  slider.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  slider.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

const openBtn = document.getElementById("openModal");
const modal = document.getElementById("searchModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

document.querySelectorAll('.sold-item').forEach((item, index) => {
  if (index % 2 !== 0) {
    item.classList.add('reverse');
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}



