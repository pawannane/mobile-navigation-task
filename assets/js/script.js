const nav = document.querySelectorAll(".nav-icon");
const img = document.querySelectorAll(".img-container li");

nav.forEach((navItem, idx) => {
  navItem.addEventListener("click", () => changeImage(idx, navItem))
})

function changeImage(idx, navItem){
  const aciveNav = document.querySelector(".active-nav");
  const activeImage = document.querySelector(".active-image");

  aciveNav.classList.remove("active-nav");
  activeImage.classList.remove("active-image");

  navItem.classList.add('active-nav');
  img[idx].classList.add("active-image");
}