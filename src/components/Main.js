import avatar from '../images/avatar.jpg';
//import Button from './Button';
//import App from './App';

function Main(/* {onEditProfile} */) {
    

    const handleEditAvatarClick = () => {
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
    }


    return (
        <main>
            <section aria-label="Профиль пользователя" className="profile">
                <div className="profile__user">
                    <div className="profile__avatar-block">
                        <img src={avatar} alt="Аватар профиля." className="profile__avatar" onClick={handleEditAvatarClick} />
                    </div>
                    <div className="profile__data">
                        <div className="profile__user-name">
                            <h1 className="profile__user-firstname">Жак-Ив Кусто</h1>
                            <button type="button" aria-label="Редактировать профиль." className="edit-button " onClick={handleEditProfileClick}></button>
                        </div>
                        <p className="profile__user-profession">Исследователь океана</p>
                    </div>
                </div>
                <button type="button" aria-label="Добавить фотографию." className="add-button" onClick={handleAddPlaceClick} />
            </section>

            <section aria-label="Фотографии пользователя" className="cards">

                <template id="templite-card">
                    <article className="card">
                        <div className="card__image"></div>
                        <div className="card__name">
                            <h2 className="card__title">Заголовок</h2>
                            <div className="card__like">
                                <button type="button" aria-label="Мне нравится." className="card__like-button button-like"></button>
                                <span className="card__like-counter">0</span>
                            </div>
                        </div>
                        <button type="button" aria-label="Удалить." className="button-remove"></button>
                    </article>
                </template>
            </section>
        </main>
    )
}
export default Main;