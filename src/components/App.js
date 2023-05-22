/* import '../App.css'; */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import api from '../utils/Api';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  //контекст текущего пользователя
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
        //выводим на страницу данные профиля
        setCurrentUser(userData);
        //console.log(userData);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }, []);

  //контекст карточек
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getArrCards()
      .then((cardsData) => {
        //выводим на страницу карточки
        setCards(cardsData);
        //console.log(cardsData);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }, [cards]);//обновляем при изменении в cards

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

  //открываем zoom-попап 
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  //ставим лайк 
  function handleCardLike(card) {
    //console.log('ставим лайк карточке');
    //console.log(card);
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      api.putLike(card._id)
      console.log('лайк');
    } else {
      api.deleteLike(card._id)
      console.log('дизлайк');
    }
  }

  //удаляем карточку
  function handleCardDelete(card) {
    //console.log('удаляем карточку');
    //console.log(card);
    api.deleteCard(card._id)
    console.log(`удалили карточку ${card._id}`);
  }

  //закрываем попапы по крестику
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          currentUser={currentUser}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

{/*         <PopupWithForm name='profile' title='Редактировать профиль' btnText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input type="text" id="firstname" required minLength="2" maxLength="40" name="name" placeholder="Имя" className="edit-form__personalia" />
          <span className="firstname-error edit-form__personalia-error" />
          <input type="text" id="profession" required minLength="2" maxLength="200" name="about" placeholder="О себе" className="edit-form__personalia" />
          <span className="profession-error edit-form__personalia-error" />
        </ PopupWithForm> */}

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} currentUser={currentUser}/>

        <PopupWithForm name='add-card' title='Новое место' btnText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input type="text" required minLength="2" maxLength="30" id="name-card" name="name" placeholder="Название" className="edit-form__personalia" />
          <span className="name-card-error edit-form__personalia-error" />
          <input type="url" required id="images" name="link" placeholder="Ссылка на картинку" className="edit-form__personalia" />
          <span className="images-error edit-form__personalia-error" />
        </ PopupWithForm>

        <PopupWithForm name='avatar' title='Обновить аватар' btnText='Создать' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input type="url" required id="avatar" name="avatar" placeholder="Ссылка на картинку" className="edit-form__personalia" />
          <span className="avatar-error edit-form__personalia-error" />
        </ PopupWithForm>

        <PopupWithForm name='delete-card' title='Вы уверены?' btnText='Да' />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
