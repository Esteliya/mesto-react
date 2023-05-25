import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    const { isOpen, onClose, onAddPlace } = props;

    //рефы полей имени и ссылки 
    const name = React.useRef();
    const link = React.useRef();
    /* const [name, setName] = React.useState('');
    const [link, setLink] = React.useState(''); */

/*     //обработчик поля имени
    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    //обработчик поля ссылки на картинку
    function handleLinkChange(evt) {
        setLink(evt.target.value);
    } */

    //отправка данных вверх
    function handleSubmit(evt) {
        evt.preventDefault();
        //console.log(name.current.value);
        //console.log(link.current.value);
        onAddPlace({
            name: name.current.value,
            link: link.current.value,
        });
    }

    return (
        <PopupWithForm
            name='add-card'
            title='Новое место'
            btnText='Создать'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <input
                type="text"
                required
                minLength="2" maxLength="30"
                id="name-card"
                name="name"
                placeholder="Название"
                className="edit-form__personalia"
                ref={name}
                /* onChange={handleNameChange} */ />
            <span className="name-card-error edit-form__personalia-error" />
            <input
                type="url"
                required
                id="images"
                name="link"
                placeholder="Ссылка на картинку"
                className="edit-form__personalia"
                ref={link}
                /* onChange={handleLinkChange} */ />
            <span className="images-error edit-form__personalia-error" />
        </ PopupWithForm>
    )
}

export default AddPlacePopup;