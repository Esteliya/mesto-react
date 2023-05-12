function Card(props) {
const {card} = props;

    return (
            <article className="card">
                <div className="card__image" style={{backgroundImage: `url(${card.link})`}}></div>
                <div className="card__name">
                    <h2 className="card__title">{card.name}</h2>
                    <div className="card__like">
                        <button
                            type="button"
                            aria-label="Мне нравится."
                            className="card__like-button button-like">
                        </button>
                        <span className="card__like-counter">{card.likes.length}</span>
                    </div>
                </div>
                <button
                    type="button"
                    aria-label="Удалить."
                    className="button-remove">
                </button>
            </article>
    )
}

export default Card;