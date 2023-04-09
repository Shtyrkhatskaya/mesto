const openPopupBtn = document.querySelector('.profile__open');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');

let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__text_type_name');
let jobInput = document.querySelector('.form__text_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

function openPopup () {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}
function closePopup () {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup ()
}

formElement.addEventListener('submit', handleFormSubmit); 
openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);