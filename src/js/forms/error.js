import ElementHandler from "/src/js/handlers/element_handler.js";

export const showError = (fields) => {
    for (const selector in fields) {
        const input = document.querySelector(selector);
        const formBlock = input.closest(".form-block");
        const inputWrapper = input.closest(".input-wrapper");
        if (!input || !formBlock || !inputWrapper) {
            continue;
        }

        const {isValid, errorMessage} = fields[selector];
        if (isValid) {
            continue;
        }

        const isFilled = input.value.trim().length > 0;
        const isSelect = input.type === "select-one";
        if (isFilled || isSelect) {
            const formErrorElement = formBlock.querySelector(".form-error");
            if (!formErrorElement) {
                const formError = ElementHandler.createElement("div", {
                    classes: [
                        "form-error",
                    ],
                    properties: {
                        textContent: errorMessage,
                    },
                });
                formBlock.appendChild(formError);
            }
        } else {
            input.placeholder = errorMessage;
        }

        const inputErrorSymbol = ElementHandler.createElement("div", {
            classes: [
                "input-error-symbol",
            ],
            properties: {
                textContent: "!",
            },
        });

        inputWrapper.appendChild(inputErrorSymbol);
        input.classList.add("input-error");
    }
}