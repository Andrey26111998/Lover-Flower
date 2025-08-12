import JustValidate from "just-validate";
import {showError} from "/src/js/forms/error.js";

try {
    const orderCallFormValidator = new JustValidate("#modal-order-call-form");

    orderCallFormValidator.addField("#call-name", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено.",
        },
        {
            rule: "minLength",
            value: 2,
            errorMessage: "Минимальное количество символов: 2.",
        },
    ]);

    orderCallFormValidator.addField("#call-phone", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено.",
        },
        {
            rule: "customRegexp",
            value: /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
            errorMessage: "Формат номера: +7 (XXX) XXX-XX-XX.",
        },
    ]);

    orderCallFormValidator.onFail((fields) => {
        showError(fields);
    });
}
catch (error) {
    const errorMessage = error.message;
    console.error("Order call form validator error:", errorMessage);
}