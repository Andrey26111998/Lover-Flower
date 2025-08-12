import {getPlaceholders} from "/src/js/forms/placeholder.js";
import {applyFilledFiledStyle} from "/src/js/forms/input_filler.js";

try {
    const inputs = document.querySelectorAll(".input");
    const originalPlaceholders = getPlaceholders(inputs);

    for (const input of inputs) {
        input.addEventListener("input", (event) => {
            applyFilledFiledStyle(input, originalPlaceholders);
        });
    }
} catch (error) {
    const errorMessage = error.message;
    console.error("Form error:", errorMessage);
}