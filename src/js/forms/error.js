export const showError = (fields) => {
    for (const selector in fields) {
        const input = document.querySelector(selector);
        if (!input) {
            continue;
        }

        const formInput = input.closest(".form__input");
        if (!formInput) {
            continue;
        }

        const formError = input.nextElementSibling;
        if (!formError) {
            continue;
        }

        const isValid = fields[selector].isValid;
        const errorMessage = fields[selector].errorMessage;
        if (isValid) {
            continue;
        }

        const inputValue = input.value.trim();
        const inputValueLength = inputValue.length;
        if (inputValueLength > 0) {
            formError.classList.add("active");
            formError.textContent = errorMessage;
        }
        else {
            input.value = "";
            input.placeholder = errorMessage;
        }
        formInput.classList.add("error");
    }
}