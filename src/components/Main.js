import React from 'react';
import api from '../utils/Api';
import Card from './Card.js';

function Main(props) {
    const { onEditProfile, onAddPlace, onEditAvatar, onCardClick, currentUser, cards, onCardLike, onCardDelete} = props;

    //добавляем переменные состояния 
    //const [userName, setUserName] = React.useState("");//имя профиля 
    //const [userDescription, setUserDescription] = React.useState("");//о пользователе
    //const [userAvatar, setUserAvatar] = React.useState("");//аватарка
    //const [cards, setCards] = React.useState([]);///карточки

    /* React.useEffect(() => {
        //получаем одновременно данные сервера
        Promise.all([api.getArrCards()])//данные пользователя и массив карточек
            .then(([cardsData]) => {
                //console.log(cardsData);
                setCards(cardsData);
            })
            .catch((err) => {
                console.error(`Ошибка: ${err}`);
            });
    }, []); */

    return (
        <main>
            <section
                aria-label="Профиль пользователя"
                className="profile">
                <div className="profile__user">
                    <div className="profile__avatar-block">
                        <img
                            src={currentUser.avatar} alt="Аватар профиля."
                            className="profile__avatar"
                            onClick={onEditAvatar} />
                    </div>
                    <div className="profile__data">
                        <div className="profile__user-name">
                            <h1 className="profile__user-firstname">{currentUser.name}</h1>
                            <button
                                type="button"
                                aria-label="Редактировать профиль."
                                className="edit-button "
                                onClick={onEditProfile}>
                            </button>
                        </div>
                        <p className="profile__user-profession">{currentUser.about}</p>
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
                    <Card card={card} key={card._id} onCardClick={onCardClick} currentUser = {currentUser} onCardLike={onCardLike} onCardDelete={onCardDelete}/>
                    //console.log(card)
                    )
                })}
            </section>
        </main>
    )
}
export default Main;