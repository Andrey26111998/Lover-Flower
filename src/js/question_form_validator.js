import JustValidate from "just-validate";

try {
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
    try {
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
    catch (err) {
      const message = err.message;
      console.error("Error processing input:", message);
    }
  });
}
catch (err) {
  const message = err.message;
  console.error("Error during initialization:", message);
}