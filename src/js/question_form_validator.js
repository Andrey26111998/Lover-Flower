import JustValidate from "just-validate";

const questionFormValidator = new JustValidate("#question-form");

questionFormValidator.addField("#name", [
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

questionFormValidator.addField("#phone", [
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

questionFormValidator.addField("#question", [
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
  for (const selector in fields) {
    const input = document.querySelector(selector);
    if (!input) {
      continue;
    }
    const formInput = input.closest(".form__input");
    if (!formInput) {
      continue;
    }
    const isValid = fields[selector].isValid
    if (!isValid) {
      input.value = "";
      const error = fields[selector].errorMessage;
      input.placeholder = error;
      formInput.classList.add("error");
    }


  }
});