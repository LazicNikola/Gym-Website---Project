// <============================= HEADER =============================>
// <================ LOGO SCROLL-TOP ================>
const documentElement = document.documentElement;
const logoTextHeader = document.querySelector(".gym-name");
const logoImageHeader = document.querySelector(".gym-name-img");
const logoScrollingToTop = () => {
  documentElement.scrollTo({ top: 0 });
  setTimeout(() => {
    window.location.reload();
  }, 50);
};
logoTextHeader.addEventListener("click", logoScrollingToTop);
logoImageHeader.addEventListener("click", logoScrollingToTop);

// <============== TOP HEADER BACKGROUND ==============>
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
const navLinks = document.querySelectorAll(".nav-link");
const exitRightNavBar = () => {
  rightNavBar.classList.remove("show-right-nav-bar");
};
navBarExitButton.addEventListener("click", exitRightNavBar);
navLinks.forEach((e) => e.addEventListener("click", exitRightNavBar));

// <=============================  NAV BAR SCROLL-TO =============================>
const homeLink = document.querySelector(".nav-home");

const scrollToHomePage = (e) => {
  e.preventDefault();
  documentElement.scrollTo({ top: 0, behavior: "smooth" });
};
homeLink.addEventListener("click", scrollToHomePage);

const programLink = document.querySelector(".nav-program");
const programSection = document.querySelector(".program");

const chooseUsLink = document.querySelector(".nav-choose-us");
const chooseUsSection = document.querySelector(".choose-us");

const scrollToSectionOfPage = (e, section) => {
  e.preventDefault();
  section.scrollIntoView({ behavior: "smooth" });
};

programLink.addEventListener("click", (e) =>
  scrollToSectionOfPage(e, programSection)
);

chooseUsLink.addEventListener("click", (e) =>
  scrollToSectionOfPage(e, chooseUsSection)
);

//
//
//
// <============================= CALCULATE BMI =============================>
const calculateBmiButton = document.querySelector(".calculate-button");
const calculateBmi = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const bmiMessage = document.querySelector(".bmi-message");
  const originalClassBmi = bmiMessage.className;
  if (heightInput.value === "" || weightInput.value === "") {
    bmiMessage.classList.remove("skinny");
    bmiMessage.classList.remove("healthy");
    bmiMessage.classList.remove("overweight");
    bmiMessage.classList.add("incorrect-input");
    bmiMessage.textContent = "You need to fill in the Height and Weight";

    setTimeout(() => {
      bmiMessage.textContent = "";
      bmiMessage.className = originalClassBmi;
    }, 4000);
  } else {
    let bmiValue =
      weightInput.value /
      ((heightInput.value / 100) * (heightInput.value / 100));
    const bmiValueRounded = bmiValue.toFixed(1);
    if (bmiValue <= 18.5) {
      bmiMessage.classList.remove("incorrect-input");
      bmiMessage.classList.remove("healthy");
      bmiMessage.classList.remove("overweight");
      bmiMessage.classList.add("skinny");
      bmiMessage.textContent = `Your BMI is ${bmiValueRounded} and you are skinny`;
    } else if (bmiValue > 18.5 && bmiValue <= 25) {
      bmiMessage.classList.remove("incorrect-input");
      bmiMessage.classList.remove("skinny");
      bmiMessage.classList.remove("overweight");
      bmiMessage.classList.add("healthy");
      bmiMessage.textContent = `Your BMI is ${bmiValueRounded} and you are healthy`;
    } else {
      bmiMessage.classList.remove("incorrect-input");
      bmiMessage.classList.remove("skinny");
      bmiMessage.classList.remove("healthy");
      bmiMessage.classList.add("overweight");
      bmiMessage.textContent = `Your BMI is ${bmiValueRounded} and you are overweight`;
    }
    setTimeout(() => {
      bmiMessage.textContent = "";
      bmiMessage.className = originalClassBmi;
    }, 4000);
  }
};
calculateBmiButton.addEventListener("click", calculateBmi);

//
//
//
// <============================= EMAIL INPUT =============================>
const subscribeButton = document.querySelector(".subscribe-button");
const subscribing = (e) => {
  e.preventDefault();
  const emailInput = document.querySelector("#email");
  const subscribeMessage = document.querySelector(".subscribe-message");
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const originalClassEmail = subscribeMessage.className;
  if (regexEmail.test(emailInput.value)) {
    subscribeMessage.classList.add("correct-email");
    subscribeMessage.classList.remove("wrong-email");
    subscribeMessage.textContent = "You have successfully subscribed!";
  } else if (emailInput.value === "") {
    subscribeMessage.classList.add("wrong-email");
    subscribeMessage.classList.remove("correct-email");
    subscribeMessage.textContent = "You need to enter your email address";
  } else {
    subscribeMessage.classList.add("wrong-email");
    subscribeMessage.classList.remove("correct-email");
    subscribeMessage.textContent = "Your email address is incorrect";
  }
  setTimeout(() => {
    subscribeMessage.textContent = "";
    subscribeMessage.className = originalClassEmail;
  }, 3000);
};
subscribeButton.addEventListener("click", subscribing);

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

//
//
//
// <============================= REVEAL SECTIONS =============================>
// <============== HOME SECTION REVEAL ==============>
const homeLeft = document.querySelector(".home-left");
const homeRight = document.querySelector(".home-right");

const revealHomeLeft = () => {
  homeLeft.classList.add("reveal-home-left");
};
window.addEventListener("load", revealHomeLeft);

const revealHomeRight = () => {
  homeRight.classList.add("reveal-home-right");
};
window.addEventListener("load", revealHomeRight);

// <=================== OTHER SECTIONS REVEAL ===================>
const mainElementsRevealedBottom = document.querySelectorAll(
  ".main-element-bottom"
);

const mainElementsRevealedLeft =
  document.querySelectorAll(".main-element-left");

const mainElementsRevealedRight = document.querySelectorAll(
  ".main-element-right"
);

const revealElements = () => {
  const triggerHeight = window.innerHeight / 1.3;

  mainElementsRevealedBottom.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerHeight) {
      element.classList.add("show-main-element-bottom");
    }
  });

  mainElementsRevealedLeft.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerHeight) {
      element.classList.add("show-main-element-left");
    }
  });

  mainElementsRevealedRight.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerHeight) {
      element.classList.add("show-main-element-right");
    }
  });
};

window.addEventListener("scroll", revealElements);
