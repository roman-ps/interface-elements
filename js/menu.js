var cat1 = document.querySelector(".menu__item-cat1");
var submenu = document.querySelector(".menu__submenu");

cat1.addEventListener("mouseover", function(event) {
  event.preventDefault();
  submenu.classList.add("menu__submenu-show");
})