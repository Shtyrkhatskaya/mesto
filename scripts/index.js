const openPopupBtn = document.querySelector('.profile__open');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');

const formElement = document.querySelector('.form');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// Переменные для добавления/ удаления карточек с местами
const addElement = document.querySelector('.add-button');
const popupPlace = document.querySelector('.popup-place');
const closePopupPlaceBtn = document.querySelector('.popup-place__close');
const formElementPlace = document.querySelector('.form-place');
const formPlaceText = document.querySelector('.form-place__text_type_place');
const formPlaceLink = document.querySelector('.form-place__text_type_link');

// Открытие попапа с редактиванием профиля
function openPopup () {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
}

// Закрытие и сохранение попапа с редактиванием профиля
function closePopup () {
    popup.classList.remove('popup_opened');
}
function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup ()
}

// Вызов функций открытия, закрытия, сохранения (редактирование профиля)
formElement.addEventListener('submit', handleFormSubmit);
openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);

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



// Открытие попапа для добавления карточки с новым местом
function openPopupPlace () {
  popupPlace.classList.add('popup-place_opened');
}

// Закрытие попапа для добавления карточки с новым местом
function closePopupPlace () {
  popupPlace.classList.remove('popup-place_opened');
}

// Сохранение карточки с новым местом
function FormPlaceSubmit (evt) {
  evt.preventDefault();

  const placeInfo = { name: formPlaceText.value, link: formPlaceLink.value};
  const placeElement = createData(placeInfo);

  elementsContainer.prepend(placeElement);
  closePopupPlace ()
}

// Вызов функций открытия, закрытия, сохранения (добавление карточек с новыми метами)
formElementPlace.addEventListener('submit', FormPlaceSubmit);
addElement.addEventListener('click', openPopupPlace);
closePopupPlaceBtn.addEventListener('click', closePopupPlace);

// Добавление на страницу карточек из массива, их удаление и лайк
const elementsContainer = document.querySelector('.elements');
const elementTemplate = document.getElementById('element-template');

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
 const popupImg = document.querySelector('.popup-img');
 const openPictureLink = document.querySelector('.popup-img__figure_photo');
 const openPictureName = document.querySelector('.popup-img__figure_place');

 function openPicture () {
   popupImg.classList.add('popup-img_open');
   openPictureLink.src = elementData.link;
   openPictureName.textContent = elementData.name;
 }
 elementImage.addEventListener('click', openPicture);

  // Закрытие попапа с картинкой
 const popupImgClose = document.querySelector('.popup-img__close');
 console.log(popupImgClose);
 function closePicture () {
  popupImg.classList.remove('popup-img_open');
 }

 popupImgClose.addEventListener('click', closePicture);

  return oneElementContainer;
}

initialCards.forEach((card) => {
  const oneCard = createData(card);
  elementsContainer.prepend(oneCard);
})











