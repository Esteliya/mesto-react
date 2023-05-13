function Card(props) {
    const { card, onCardClick } = props;

    //открываем zoom-popup по клику на картинку
    function handleCardClick() {
        onCardClick(card);
    }

    return (
        <article className="card">
            <div className="card__image" style={{ backgroundImage: `url(${card.link})` }}
                onClick={handleCardClick} />
            <div className="card__name">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like">
                    <button type="button" aria-label="Мне нравится." className="card__like-button button-like" />
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
            <button type="button" aria-label="Удалить." className="button-remove" />
        </article>
    )
}

export default Card;