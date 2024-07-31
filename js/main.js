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
    subscribeMessage.textContent = "You subscribed successfully!";
  } else {
    subscribeMessage.classList.add("wrong-email");
    subscribeMessage.classList.remove("correct-email");
    subscribeMessage.textContent = "Your email address is incorrect.";
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
