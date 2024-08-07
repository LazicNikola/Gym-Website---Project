// <=========================== TRAINING PROGRAM PAGES ===========================>
const trainingProgramsPagesHeading =
  document.querySelectorAll(".training-heading");
const trainingProgramsPagesVideo = document.querySelectorAll(".training-video");

const showingElementsInTrainingProgramPages = () => {
  trainingProgramsPagesHeading.forEach((element) => {
    element.classList.add("show-tr-prog-heading");
  });
  trainingProgramsPagesVideo.forEach((element) => {
    element.classList.add("show-tr-prog-video");
  });
};
window.addEventListener("load", showingElementsInTrainingProgramPages);

// <=============================== PRICING PAGE ===============================>
const pricingFirstHeading = document.querySelector(".pricing-h-first");
const pricingSecondHeading = document.querySelector(".pricing-h-second");
const pricingAllPackages = document.querySelector(".packages");

const showingElementsInPricingPage = () => {
  pricingFirstHeading.classList.add("show-pricing-headings");
  pricingSecondHeading.classList.add("show-pricing-headings");
  pricingAllPackages.classList.add("show-all-packages");
};
window.addEventListener("load", showingElementsInPricingPage);
