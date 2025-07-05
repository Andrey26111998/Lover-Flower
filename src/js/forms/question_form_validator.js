import JustValidate from "just-validate";
import { showError } from "/src/js/forms/error.js";

try {
  const questionFormValidator = new JustValidate("#question-form");

  questionFormValidator.addField("#question-name", [
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
  questionFormValidator.addField("#question-phone", [
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
  questionFormValidator.addField("#question-message", [
    {
      rule: "required",
      errorMessage: "Поле должно быть заполнено.",
    },
    {
      rule: "minLength",
      value: 5,
      errorMessage: "Минимальное количество символов: 5.",
    },
  ]);

  questionFormValidator.onFail((fields) => {
    showError(fields);
  });
}
catch (err) {
  const message = err.message;
  console.error("Error during initialization:", message);
}