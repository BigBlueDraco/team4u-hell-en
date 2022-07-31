// скрипт для мобильного меню
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector("#page");
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
    if (!expanded) {
      const header = document.getElementById("header");
      header.classList.remove("header--no-transparency");
    } else {
      setTimeout(() => {
        changeHeaderBackground();
      },50);
    }
  });
})();

//  скрипт для фиксированного полупрозрачного хедера
window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.getElementById("header");
  const headerOffsetTrigger = header.offsetTop;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add("header--no-transparency");
  } else {
    header.classList.remove("header--no-transparency");
  }
}