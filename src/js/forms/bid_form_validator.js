import JustValidate from "just-validate";
import {showError} from "/src/js/forms/error.js";

try {
    const bidFormValidator = new JustValidate("#bid-form");

    bidFormValidator.addField("#bid-form-organization-name", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
    ]);

    bidFormValidator.addField("#bid-form-mailing-address", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
    ]);

    bidFormValidator.addField("#bid-form-name", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
        {
            rule: "minLength",
            value: 2,
            errorMessage: "Минимальное количество символов: 2."
        },
    ]);

    bidFormValidator.addField("#bid-form-phone-number", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
        {
            rule: "customRegexp",
            value: /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
            errorMessage: "Формат номера: +7 (XXX) XXX-XX-XX.",
        },
    ]);

    bidFormValidator.addField("#bid-form-price", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
        {
            rule: "number",
            errorMessage: "Значение должно быть числовым.",
        },
    ]);

    bidFormValidator.addField("#bid-form-email", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
        {
            rule: "email",
            errorMessage: "Неправильный формат электронной почты."
        },
    ]);

    bidFormValidator.addField("#bid-form-tax-number", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
        {
            rule: "number",
            errorMessage: "Значение должно быть числовым.",
        },
    ]);

    bidFormValidator.addField("#bid-form-current-account", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
        {
            rule: "number",
            errorMessage: "Значение должно быть числовым.",
        },
    ]);

    bidFormValidator.addField("#bid-form-bank-code", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
        {
            rule: "number",
            errorMessage: "Значение должно быть числовым.",
        },
    ]);

    bidFormValidator.addField("#bid-form-bids-number", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
        {
            rule: "number",
            errorMessage: "Значение должно быть числовым.",
        },
    ]);

    bidFormValidator.onFail((fields) => {
        showError(fields);
    });
} catch (error) {
    const errorMessage = error.message;
    console.error("Order form validator error:", errorMessage);
}