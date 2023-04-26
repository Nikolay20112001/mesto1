let formElement = document.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__name-input");
let jobInput = formElement.querySelector(".popup__about-input");
let profile = document.querySelector(".profile");
let profileInfo = profile.querySelector(".profile__info");
let profileContainer = profileInfo.querySelector(".profile__container");
let editButton = profileContainer.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");
let popupClassList = popup.classList;

function handleFormSubmit (evt) {
    evt.preventDefault();
    let name = nameInput.value;
    let job = jobInput.value;
    let profileName = profileContainer.querySelector(".profile__name");
    let profileJob = profileInfo.querySelector(".profile__about-name");
    profileName.textContent = name;
    profileJob.textContent = job;
    popupClassList.remove("popup_opened");
}

function handleEditButtonClick(evt) {
    evt.preventDefault();
    let profileName = profileContainer.querySelector(".profile__name");
    let profileJob = profileInfo.querySelector(".profile__about-name");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupClassList.add("popup_opened");
}

function handleCloseButtonClick(evt) {
    evt.preventDefault();
    popupClassList.remove("popup_opened");
}

closeButton.addEventListener('click', handleCloseButtonClick);
editButton.addEventListener('click',handleEditButtonClick);
formElement.addEventListener('submit', handleFormSubmit);