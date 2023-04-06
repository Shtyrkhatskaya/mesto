const openPopupBtn = document.querySelector('.profile__name__open');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__text-name');
let jobInput = document.querySelector('.form__text-about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function toglePopup () {
    popup.classList.toggle('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    toglePopup ()
}

formElement.addEventListener('submit', handleFormSubmit); 
openPopupBtn.addEventListener('click', toglePopup);
closePopupBtn.addEventListener('click', toglePopup);