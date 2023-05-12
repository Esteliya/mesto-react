import React from 'react';
import api from '../utils/Api';
import Card from './Card.js';
//import avatar from '../images/avatar.jpg';
//import Button from './Button';
//import App from './App';

function Main(props) {
    const { onEditProfile, onAddPlace, onEditAvatar } = props;

    //добавляем переменные состояния 
    const [userName, setUserName] = React.useState("");//имя профиля 
    const [userDescription, setUserDescription] = React.useState("");//о пользователе
    const [userAvatar, setUserAvatar] = React.useState("");//аватарка
    const [cards, setCards] = React.useState([]);///карточки

    /*  const handleEditAvatarClick = () => {
         console.log('Редактируем аватар');
         document.querySelector('.profile-popup').classList.add('popup_open');
     } 
     const handleEditProfileClick = () => {
         console.log('Редактируем профиль');
         document.querySelector('.add-avatar-popup').classList.add('popup_open');
     }
 
     const handleAddPlaceClick = () => {
         console.log('Добавляем новую карточку');
         document.querySelector('.add-card-popup').classList.add('popup_open');
     } */

    React.useEffect(() => {
        //получаем одновременно данные сервера
        Promise.all([api.getUserInfo(), api.getArrCards()])//данные пользователя и массив карточек
            .then(([userData, cardsData]) => {
                //выводим на страницу данные профиля
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);//заправшиваем картинку с сервера
                console.log(cardsData);
                setCards(cardsData);
                //defaultCard.rendererItems(cardsData);//запрашиваем массив карточек с сервера
            })
            .catch((err) => {
                console.error(`Ошибка: ${err}`);
            });
    }, []);

    return (
        <main>
            <section
                aria-label="Профиль пользователя"
                className="profile">
                <div className="profile__user">
                    <div className="profile__avatar-block">
                        <img
                            src={userAvatar} alt="Аватар профиля."
                            className="profile__avatar"
                            onClick={onEditAvatar} />
                    </div>
                    <div className="profile__data">
                        <div className="profile__user-name">
                            <h1 className="profile__user-firstname">{userName}</h1>
                            <button
                                type="button"
                                aria-label="Редактировать профиль."
                                className="edit-button "
                                onClick={onEditProfile}>
                            </button>
                        </div>
                        <p className="profile__user-profession">{userDescription}</p>
                    </div>
                </div>
                <button
                    type="button"
                    aria-label="Добавить фотографию."
                    className="add-button"
                    onClick={onAddPlace} />
            </section>

            <section
                aria-label="Фотографии пользователя"
                className="cards">
                {cards.map((card) => {
                    return (
                    <Card card={card} key={card._id} />
                    //console.log(card)
                    )
                })}
            </section>
        </main>
    )
}
export default Main;