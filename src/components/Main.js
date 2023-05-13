import React from 'react';
import api from '../utils/Api';
import Card from './Card.js';

function Main(props) {
    const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

    //добавляем переменные состояния 
    const [userName, setUserName] = React.useState("");//имя профиля 
    const [userDescription, setUserDescription] = React.useState("");//о пользователе
    const [userAvatar, setUserAvatar] = React.useState("");//аватарка
    const [cards, setCards] = React.useState([]);///карточки

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
                    <Card card={card} key={card._id} onCardClick={onCardClick}/>
                    //console.log(card)
                    )
                })}
            </section>
        </main>
    )
}
export default Main;