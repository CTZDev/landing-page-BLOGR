const d = document;

export default function menuHamburguer() {
  const $hamburguer = d.querySelector(".menu-hamburguer"),
    $navigation = d.querySelector(".navigation"),
    $menuLinks = d.querySelectorAll(".menu-link"),
    $submenus = d.querySelectorAll(".submenu");

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu-hamburguer") || e.target.matches(".menu-hamburguer *")) {
      $hamburguer.classList.toggle("open");
      $navigation.classList.toggle("open");
    }

    if (e.target.matches(".submenu-link")) {
      $navigation.classList.remove("open");
      $hamburguer.classList.remove("open");

      let widthMQ = d.documentElement.clientWidth || window.innerWidth;

      if (widthMQ >= 1024) {
        e.target.parentElement.parentElement.classList.remove("open");
        e.target.parentElement.parentElement.previousElementSibling.classList.remove("open");
      }
    }
  });

  $menuLinks.forEach((menu, i) => {
    menu.addEventListener("click", (e) => {
      $submenus[i].classList.toggle("open");
      menu.classList.toggle("open");
    });
  });
}
