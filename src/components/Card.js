function Card(props) {
    const { card, onCardClick, currentUser, onCardLike } = props;

    //открываем zoom-popup по клику на картинку
    function handleCardClick() {
        onCardClick(card);
    }

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    //класс кнопки лайка
    const cardLikeButtonClassName = (
        `button-like ${isLiked && 'button-like_activ'}`
    );

    //ставим лайк карточке 
    function handleLike () {
        onCardLike(card);
        //console.log(card);
    }
    //button-like button-like_activ 

    // Далее в разметке используем переменную для условного рендеринга
    //{ isOwn && <button className='button_del' onClick={handleDeleteClick} /> } удаление карточки - добавить функцию

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    //card__like-button 
    //<button type="button" aria-label="Мне нравится." className="button-like" />


    return (
        <article className="card">
            <div className="card__image" style={{ backgroundImage: `url(${card.link})` }}
                onClick={handleCardClick} />
            <div className="card__name">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like">
                    <button type="button" aria-label="Мне нравится." className={cardLikeButtonClassName} onClick={handleLike} />
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
            {isOwn && <button type="button" aria-label="Удалить." className="button-remove" />}
        </article>
    )
}

export default Card;