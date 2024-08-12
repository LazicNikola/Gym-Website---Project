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
const rightNavBarExitBackground = document.querySelector(
  ".nav-bar-exit-background"
);
const showRightNavBar = () => {
  if (rightNavBar) {
    rightNavBar.classList.add("show-right-nav-bar");
    rightNavBarExitBackground.style.display = "block";
  }
};
navBarOpenButton.addEventListener("click", showRightNavBar);

// <=========== RIGHT NAV BAR EXIT ===========>
const navBarExitButton = document.querySelector(".nav-menu-exit-button");
const navLinks = document.querySelectorAll(".nav-link");
const exitRightNavBar = () => {
  rightNavBar.classList.remove("show-right-nav-bar");
  rightNavBarExitBackground.style.display = "none";
};
navBarExitButton.addEventListener("click", exitRightNavBar);
navLinks.forEach((e) => e.addEventListener("click", exitRightNavBar));
rightNavBarExitBackground.addEventListener("click", exitRightNavBar);

// <=============================  SCROLL-TO =============================>
// <=================  NAV BAR SCROLL-TO =================>

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

const footerFlexMuscle = document.querySelector(".footer-flex-link");
const footerCardioExercise = document.querySelector(".footer-cardio-link");
const footerBasicYoga = document.querySelector(".footer-yoga-link");
const footerWeightLifting = document.querySelector(".footer-weight-link");
const programFlexMuscle = document.querySelector(".flex-muscle");
const programCardioExercise = document.querySelector(".cardio-exercise");
const programBasicYoga = document.querySelector(".basic-yoga");
const programWeightLifting = document.querySelector(".weight-lifting");

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

// <=================  FOOTER SCROLL-TO =================>
footerFlexMuscle.addEventListener("click", (e) =>
  scrollToSectionOfPage(e, programFlexMuscle)
);

footerCardioExercise.addEventListener("click", (e) =>
  scrollToSectionOfPage(e, programCardioExercise)
);

footerBasicYoga.addEventListener("click", (e) =>
  scrollToSectionOfPage(e, programBasicYoga)
);

footerWeightLifting.addEventListener("click", (e) =>
  scrollToSectionOfPage(e, programWeightLifting)
);

// <============================= NAV BAR REGISTER =============================>
const registerButton = document.querySelector(".register-button");
const getStartedButton = document.querySelector(".get-started");
const registerForm = document.querySelector(".register-form");
const registerFormOriginalClass = registerForm.className;
const registration = () => {
  registerForm.classList.add("show-register-form");
  rightNavBarExitBackground.style.display = "block";
  rightNavBarExitBackground.classList.add("exit-bg-z-index");
};
registerButton.addEventListener("click", registration);
getStartedButton.addEventListener("click", registration);

const exitRegistration = () => {
  registerForm.classList.remove("show-register-form");
  rightNavBarExitBackground.style.display = "none";
  rightNavBarExitBackground.classList.remove("exit-bg-z-index");
  registerForm.className = registerFormOriginalClass;
};
rightNavBarExitBackground.addEventListener("click", exitRegistration);

const submitRegisterButton = document.querySelector(".submit-register-button");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexString = /^[a-zA-Z]+$/;
const submitingRegisterForm = (e) => {
  e.preventDefault();
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const registerEmail = document.querySelector("#register-email");
  const registerMessage = document.querySelector(".register-message");
  const originalClassRegisterMessage = registerMessage.className;
  const textRegisterInputs = document.querySelectorAll(".register-input");

  textRegisterInputs.forEach(
    (element) => (element.value = element.value.trim())
  );
  registerEmail.value = registerEmail.value.trim();

  if (
    firstName.value.trim() === "" ||
    !regexString.test(firstName.value) ||
    lastName.value.trim() === "" ||
    !regexString.test(lastName.value) ||
    !regexEmail.test(registerEmail.value)
  ) {
    registerMessage.textContent = "Your input is incorrect";
    registerMessage.classList.add("wrong-register-input");
    registerMessage.classList.remove("correct-register-input");
    setTimeout(() => {
      registerMessage.textContent = "";
      registerMessage.className = originalClassRegisterMessage;
    }, 3000);
  } else {
    registerMessage.textContent = "You registered successfully!";
    registerMessage.classList.add("correct-register-input");
    registerMessage.classList.remove("wrong-register-input");
    setTimeout(() => {
      registerMessage.textContent = "";
      registerMessage.className = originalClassRegisterMessage;
      registerForm.className = registerFormOriginalClass;
      firstName.value = "";
      lastName.value = "";
      registerEmail.value = "";
      rightNavBarExitBackground.style.display = "none";
      rightNavBarExitBackground.classList.remove("exit-bg-z-index");
      rightNavBar.classList.remove("show-right-nav-bar");
    }, 2000);
  }
};
submitRegisterButton.addEventListener("click", submitingRegisterForm);

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
      heightInput.value = "";
      weightInput.value = "";
    }, 4000);
  }
};
calculateBmiButton.addEventListener("click", calculateBmi);

//
//
//
// <============================= FOOTER EMAIL INPUT =============================>
const subscribeButton = document.querySelector(".subscribe-button");
const subscribing = (e) => {
  e.preventDefault();
  const emailInput = document.querySelector("#email");
  const subscribeMessage = document.querySelector(".subscribe-message");
  const originalClassEmail = subscribeMessage.className;

  emailInput.value = emailInput.value.trim();

  if (regexEmail.test(emailInput.value)) {
    subscribeMessage.classList.add("correct-email");
    subscribeMessage.classList.remove("wrong-email");
    subscribeMessage.textContent = "You have successfully subscribed!";
    setTimeout(() => {
      emailInput.value = "";
    }, 3000);
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
// <======================== ONLOAD/ONSCROLL REVEAL SECTIONS ========================>
// <============== HOME SECTION ONLOAD REVEAL ==============>
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

// <=================== OTHER SECTIONS ONSCROLL REVEAL ===================>
// <============== MAIN ELEMENTS ONSCROLL REVEAL ==============>
const mainElementsRevealedBottom = document.querySelectorAll(
  ".main-element-bottom"
);

const mainElementsRevealedLeft =
  document.querySelectorAll(".main-element-left");

const mainElementsRevealedRight = document.querySelectorAll(
  ".main-element-right"
);

const revealMainElements = () => {
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

window.addEventListener("scroll", revealMainElements);

// <============== FOOTER ELEMENT ONSCROLL REVEAL ==============>
const revealFooter = () => {
  const footerElement = document.querySelector("footer");
  const footerLeft = document.querySelector(".footer-left");
  const footerRight = document.querySelector(".footer-right");

  const triggerHeightFooter = window.innerHeight / 1.3;
  const elementTop = footerElement.getBoundingClientRect().top;

  if (elementTop < triggerHeightFooter) {
    footerLeft.classList.add("show-footer-left");
    footerRight.classList.add("show-footer-right");
  }
};

window.addEventListener("scroll", revealFooter);

// <=========== PARTNERS ELEMENT ONSCROLL REVEAL AT 680PX MAX-WIDTH ===========>
const revealPartnersElementInMediaQuery = () => {
  const partnersElement = document.querySelector(".partner-logo");
  const triggerHeightPartners = window.innerHeight / 1.3;

  const partnersElementTop = partnersElement.getBoundingClientRect().top;
  if (partnersElementTop < triggerHeightPartners) {
    partnersElement.classList.add("show-partners-element");
  }
};
window.addEventListener("scroll", revealPartnersElementInMediaQuery);

// <=========== PROGRAM ELEMENTS ONSCROLL REVEAL AT 680PX MAX-WIDTH ===========>
const revealEachProgramInMediaQuery = () => {
  const trainingPrograms = document.querySelectorAll(".training-program");
  const triggerHeightPrograms = window.innerHeight / 1.3;

  trainingPrograms.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerHeightPrograms) {
      element.classList.add("show-each-program");
    }
  });
};
window.addEventListener("scroll", revealEachProgramInMediaQuery);

// <=========== FOOTER LINK GROUPS ONSCROLL REVEAL AT 530PX MAX-WIDTH ===========>
const revealEachFooterLinksGroup = () => {
  const footerLinks = document.querySelectorAll(".footer-links");
  const triggerHeightFooterLinks = window.innerHeight / 1.3;

  footerLinks.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerHeightFooterLinks) {
      element.classList.add("show-each-footer-link");
    }
  });
};
window.addEventListener("scroll", revealEachFooterLinksGroup);
