// <============================= HEADER =============================>

// <============== TOP HEADER ==============>

const documentElement = document.documentElement;
const showTopHeaderBackground = () => {
  const headerElement = document.querySelector("header");
  if (documentElement.scrollTop > 0) {
    headerElement.classList.add("show-top-header");
  } else {
    headerElement.classList.remove("show-top-header");
  }
};
window.addEventListener("scroll", showTopHeaderBackground);

// <=========== RIGHT NAV BAR OPEN ===========>

const navBarOpenButton = document.querySelector(".nav-menu-open-button");
const rightNavBar = document.querySelector(".nav-menu");
const showRightNavBar = () => {
  if (rightNavBar) {
    rightNavBar.classList.add("show-right-nav-bar");
  }
};
navBarOpenButton.addEventListener("click", showRightNavBar);

// <=========== RIGHT NAV BAR EXIT ===========>

const navBarExitButton = document.querySelector(".nav-menu-exit-button");
const exitRightNavBar = () => {
  rightNavBar.classList.remove("show-right-nav-bar");
};
navBarExitButton.addEventListener("click", exitRightNavBar);

// <============================= SCROLL-UP BUTTON =============================>

const scrollUpButton = document.querySelector(".scroll-up");
const showScrollUpButton = () => {
  if (scrollUpButton && documentElement.scrollTop > 200) {
    scrollUpButton.classList.add("show-scroll-up-button");
  } else {
    scrollUpButton.classList.remove("show-scroll-up-button");
  }
};
window.addEventListener("scroll", showScrollUpButton);

const scrollToTop = () => {
  documentElement.scrollTo({ top: 0, behavior: "smooth" });
};
scrollUpButton.addEventListener("click", scrollToTop);
