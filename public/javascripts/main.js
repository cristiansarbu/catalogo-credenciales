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

document.querySelectorAll('.file-upload-button').forEach((button) => {
  const hiddenInput = button.parentElement.querySelector('.file-upload-input');
  const label = button.parentElement.querySelector('.file-upload-label');
  const defaultLabelText = 'Ningún archivo seleccionado';

  // Texto predeterminado para el label
  label.textContent = defaultLabelText;
  label.title = defaultLabelText;

  button.addEventListener('click', function() {
    hiddenInput.click();
  })

  hiddenInput.addEventListener('change', function() {
    const filenameList = Array.from(hiddenInput.files).map((file) => {
      return file.name;
    })

    label.textContent = filenameList.join(', ') || defaultLabelText;
    label.title = label.textContent;
  })
})
