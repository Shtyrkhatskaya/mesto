//проверка валидации
const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    inputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    noneInputError(formElement, inputElement, obj);
  }
};

//проверить поля на валидацию
const invalidElement = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const passiveButton = (buttonElement, obj) => {
  buttonElement.classList.add(obj.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
};

const activateButton = (buttonElement, obj) => {
  buttonElement.classList.remove(obj.inactiveButtonClass);
  buttonElement.removeAttribute('disabled', true);
};

//показать ошибку
const inputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};

//скрыть ошибку
const noneInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = '';
};


//кнопка активна или неактивна
const toggleButtonState = (inputList, buttonElement, obj) => {
  if (invalidElement(inputList)) { //есть ли невалидные поля?
    passiveButton(buttonElement, obj);
  } else {
    activateButton(buttonElement, obj);
  }
};

const eventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, obj);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, obj);
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

//слушатели
const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    eventListeners(formElement, obj);
  });
};


const popupBtn = document.querySelector('.popup-card__close-btn');

function disableSubmitButton(popupBtn) {
  const settings = {
    inactiveButtonClass: 'popup__button_disabled',
  };
  popupBtn.setAttribute('disabled', true);
  popupBtn.classList.add(settings.inactiveButtonClass);
}

// //переменные для валидации
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__text',
  submitButtonSelector: '.form__button',

  inactiveButtonClass: 'form__button_inactive', //кнопка выкл
  inputErrorClass: 'form__text_invalid', //инпут
  errorClass: 'popup__error_visible' //спан текст ошибки
});
