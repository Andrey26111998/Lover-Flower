const inputs = document.querySelectorAll(".input");
const formInputs = document.querySelectorAll(".form__input");

const originalPlaceholders = {};
inputs.forEach(input => {
    originalPlaceholders[input.id] = input.placeholder;
});

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        const inputValue = input.value;
        const inputValueLength = inputValue.length;
        if (inputValueLength > 0) {
            input.classList.add("filled");
            formInputs[index].classList.remove("error");
            input.placeholder = originalPlaceholders[input.id];
        }
        else {
            input.classList.remove("filled");
        }
    });
});