const mainDropdown = document.querySelectorAll(".criterios-button");
const iconDropdown = document.querySelectorAll(".icon-dropdown");
const criteriaContainer = document.querySelectorAll(".criteria-container");
const wrappersTransition = document.querySelectorAll(".wrapper-transition");
const iconDropdownBlack = document.querySelectorAll(".icon-dropdown-black");
const criterionSatisfied = document.querySelectorAll(".criterion-satisfied");
const DropdownBlackLink = document.querySelectorAll(".icon-dropdown-black-link");

for (let i = 0; i < mainDropdown.length; i++) {
  mainDropdown[i].addEventListener("click", () => {
    iconDropdown[i].classList.toggle("icon-dropdown-active");
    criteriaContainer[i].classList.toggle("criteria-container-active");
    wrappersTransition[i].classList.toggle("wrapper-transition-active");
  });
}

for (let i = 0; i < DropdownBlackLink.length; i++) {
    DropdownBlackLink[i].addEventListener("click", () => {
        iconDropdownBlack[i].classList.toggle("icon-dropdown-black-active");
        criterionSatisfied[i].classList.toggle("criterion-satisfied-active");
    })
}
