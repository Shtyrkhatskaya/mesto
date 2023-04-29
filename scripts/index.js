const openPopupBtn = document.querySelector('.profile__open');
const popup = document.querySelectorAll('.popup');
const closePopupBtn = document.querySelectorAll('.popup__close');
const popupProfile = document.querySelector('.popup-profile');

const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// Переменные для добавления/ удаления карточек с местами
const addElement = document.querySelector('.add-button');
const popupPlace = document.querySelector('.popup-place');
const formElementPlace = document.querySelector('.form-place');
const formPlaceText = document.querySelector('.form__text_type_place');
const formPlaceLink = document.querySelector('.form__text_type_link');

// Переменные для добавления на страницу карточек из массива, их удаление и лайк
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.getElementById('element-template');

// Переменные для открытия попапа с картинкой
const popupImg = document.querySelector('.popup-img');
const openPictureLink = document.querySelector('.popup-img__photo');
const openPictureName = document.querySelector('.popup-img__place');


// Универсальное открытие, закрытие и сохранение попапов
function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}
function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}


// Открытие, закрытие и сохранение попапа с редактиванием профиля
function openPopupProfileEdit () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

// Универсальное закрытие попапов
closePopupBtn.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;

    // Для закрытия при сохранении
    function closePopupProfileEdit () {
      closePopup(popupProfile);
    }
    return closePopupProfileEdit();

}
formElement.addEventListener('submit', handleFormSubmit);
openPopupBtn.addEventListener('click', openPopupProfileEdit);


// Открытие, закрытие и сохранение попапа для добавления карточки с новым местом
function openPopupPlace () {
  openPopup(popupPlace);
}

function handlePlaceFormSubmit (evt) {
  evt.preventDefault();

  const placeInfo = { name: formPlaceText.value, link: formPlaceLink.value};
  const placeElement = createData(placeInfo);

  elementsContainer.prepend(placeElement);

   // Для закрытия при сохранении
  function closePopupPlace () {
    closePopup(popupPlace);
  }
  evt.target.reset()
  return closePopupPlace();
}
formElementPlace.addEventListener('submit', handlePlaceFormSubmit);
addElement.addEventListener('click', openPopupPlace);


// Массив для карточек с местами
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// Добавление на страницу карточек из массива, их удаление и лайк
const createData = (elementData) => {
  const oneElementContainer = elementTemplate.content.querySelector('.element').cloneNode(true);

  const elementImage = oneElementContainer.querySelector('.element__photo');
  const elemetName = oneElementContainer.querySelector('.element__place');

  const deleteButton = oneElementContainer.querySelector('.element__delete');
  const likeButton = oneElementContainer.querySelector('.element__like');

  elementImage.src = elementData.link;
  elementImage.alt = elementData.name;
  elemetName.textContent = elementData.name;

  // Удаление
  const handleDelete = () => {
    oneElementContainer.remove();
  };

  // Лайк
  const handleLike = () => {
    likeButton.classList.toggle('element__like_active');
  }

  deleteButton.addEventListener('click', handleDelete);
  likeButton.addEventListener('click', handleLike);

 // Открытие попапа с картинкой
 function openPicture () {
  openPopup(popupImg);
  openPictureLink.src = elementData.link;
  openPictureLink.alt = elementData.name;
  openPictureName.textContent = elementData.name;
}
 elementImage.addEventListener('click', openPicture);

  return oneElementContainer;
}

initialCards.forEach((card) => {
  const oneCard = createData(card);
  elementsContainer.prepend(oneCard);
})
