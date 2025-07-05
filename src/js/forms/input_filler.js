import { getPlaceholders } from "/src/js/forms/placeholder.js";

try {
    const inputs = document.querySelectorAll(".input");
    const originalPlaceholders = getPlaceholders(inputs);

    for (const [index, input] of inputs.entries()) {
        input.addEventListener("input", () => {
            try {
                const inputValue = input.value.trim();
                const inputValueLength = inputValue.length;
                const hasInputValue = inputValueLength > 0;
                const formInput = input.closest(".form__input");
                const formError = input.nextElementSibling;
                const inputId = input.id;
                const originalPlaceholder = originalPlaceholders[inputId];

                if (hasInputValue) {
                    input.classList.add("filled");
                }
                else {
                    input.classList.remove("filled");
                }

                if (formInput) {
                    formInput.classList.remove("error");
                }

                if (formError) {
                    formError.classList.remove("active");
                }

                if (hasInputValue && inputId && originalPlaceholder) {
                    input.placeholder = originalPlaceholder;
                }
            }
            catch (err) {
                const message = err.message;
                console.error("Error processing input:", message);
            }
        });
    }
}
catch (err) {
    const message = err.message;
    console.error("Error during initialization:", message);
}