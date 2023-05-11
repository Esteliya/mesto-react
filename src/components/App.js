/* import '../App.css'; */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';

function App() {
//редактировать профиль
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  
//добавить карточку
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  //редактировать профиль
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  //закрываем попапы по крестику
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }


  return (
    <div className="page">
  <Header/>
  <Main 
  onEditProfile = {handleEditProfileClick}
  onAddPlace = {handleAddPlaceClick}
  onEditAvatar = {handleEditAvatarClick}
  />
  <Footer />

  <PopupWithForm name = 'profile' title = 'Редактировать профиль' btnText = 'Сохранить' isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups}>
        <input type="text" id="firstname" required minLength="2" maxLength="40" name="name" placeholder="Имя"
          className="edit-form__personalia" />
        <span className="firstname-error edit-form__personalia-error"/>
        <input type="text" id="profession" required minLength="2" maxLength="200" name="about" placeholder="О себе"
          className="edit-form__personalia" />
        <span className="profession-error edit-form__personalia-error"/>
  </ PopupWithForm>
 
  <PopupWithForm name = 'add-card' title = 'Новое место' btnText = 'Создать' isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups}>
        <input type="text" required minLength="2" maxLength="30" id="name-card" name="name" placeholder="Название"
          className="edit-form__personalia" />
        <span className="name-card-error edit-form__personalia-error" />
        <input type="url" required id="images" name="link" placeholder="Ссылка на картинку"
          className="edit-form__personalia" />
        <span className="images-error edit-form__personalia-error" />
  </ PopupWithForm>
 
  <PopupWithForm name = 'avatar' title = 'Обновить аватар' btnText = 'Создать' isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups}>
        <input type="url" required id="avatar" name="avatar" placeholder="Ссылка на картинку"
          className="edit-form__personalia" />
        <span className="avatar-error edit-form__personalia-error" />
  </ PopupWithForm>

  <PopupWithForm name = 'delete-card' title = 'Вы уверены?' btnText = 'Да' />
  
  <ImagePopup />

</div>
  );
}

export default App;
