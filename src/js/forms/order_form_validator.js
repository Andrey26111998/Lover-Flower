import JustValidate from "just-validate";
import {showError} from "/src/js/forms/error.js";

try {
    const orderFormValidator = new JustValidate("#order-form");

    orderFormValidator.addField("#order-name", [
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

    orderFormValidator.addField("#order-phone", [
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

    orderFormValidator.addField("#order-email", [
        {
            rule: "required",
            errorMessage: "Поле должно быть заполнено."
        },
        {
            rule: "email",
            errorMessage: "Неправильный формат электронной почты."
        },
    ]);

    orderFormValidator.addField("#order-recipient-phone", [
        {
            rule: "customRegexp",
            value: /^\+7\s?\(?\d{3}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
            errorMessage: "Формат номера: +7 (XXX) XXX-XX-XX.",
        },
    ]);

    orderFormValidator.addField("#order-recipient-name", [
        {
            rule: "minLength",
            value: 2,
            errorMessage: "Минимальное количество символов: 2."
        },
    ]);

    orderFormValidator.addField("#order-message", [
        {
            rule: "minLength",
            value: 5,
            errorMessage: "Минимальное количество символов: 5."
        },
    ]);

    orderFormValidator.addRequiredGroup("#order-delivery-method", "Тип доставки должен быть выбран.");

    orderFormValidator.addField("#order-city", [
        {
            rule: "required",
            errorMessage: "Город должен быть выбран."
        },
    ]);

    orderFormValidator.addField("#order-street", [
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

    orderFormValidator.addField("#order-building", [
        {
            rule: "number",
            errorMessage: "Значение должно быть числовым.",
        },
    ]);

    orderFormValidator.addField("#order-house", [
        {
            rule: "number",
            errorMessage: "Значение должно быть числовым.",
        },
    ]);

    orderFormValidator.addField("#order-apartment", [
        {
            rule: "number",
            errorMessage: "Значение должно быть числовым.",
        },
    ]);

    orderFormValidator.addField("#order-time", [
        {
            rule: "customRegexp",
            value: /^([01]\d|2[0-3]):[0-5]\d$/,
            errorMessage: "Формат времени: HH:MM.",
        },
    ]);

    orderFormValidator.addRequiredGroup("#order-payment-method", "Тип оплаты должен быть выбран.");

    orderFormValidator.onFail((fields) => {
        showError(fields);
    });
} catch (error) {
    const errorMessage = error.message;
    console.error("Order form validator error:", errorMessage);
}