import ElementHandler from "/src/js/handlers/element_handler.js";

export const applyFilledFiledStyle = (input, originalPlaceholders) => {
    const isFilled = input.value.trim().length > 0;
    if (isFilled) {
        input.classList.add("filled");
    } else {
        input.classList.remove("filled");
    }

    const isError = input.classList.contains("input-error");
    if (isError) {
        input.classList.remove("input-error");
    }

    const inputErrorSymbol = input.nextElementSibling;
    if (inputErrorSymbol) {
        ElementHandler.removeElement(inputErrorSymbol);
    }

    const formError = input.closest(".input-wrapper").nextElementSibling;
    if (formError) {
        ElementHandler.removeElement(formError);
    }

    const inputId = input.id;
    const originalPlaceholder = originalPlaceholders[inputId];
    if (isFilled && inputId && originalPlaceholder) {
        input.placeholder = originalPlaceholder;
    }
}