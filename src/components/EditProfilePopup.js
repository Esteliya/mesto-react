import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    const { isOpen, onClose, currentUser, onUpdateUser } = props;

    //переменые полей имени и о себе пользователя
    const [name, setName] = React.useState(currentUser.name);
    const [description, setDescription] = React.useState(currentUser.about);

    //используем данные, полученные из api выше
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen ]);

    //обработчик поля имени
    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    //обработчик поля о себе
    function handleDescriptionChange(evt) {
        setDescription(evt.target.value);
    }

    //отправка данных вверх
    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({
            name,
            about: description
        });
    }

    return (
        <PopupWithForm
            name='profile'
            title='Редактировать профиль'
            btnText='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <input
                type="text"
                id="firstname"
                required
                minLength="2" maxLength="40"
                name="name"
                placeholder="Имя"
                className="edit-form__personalia"
                value={(name !== null && name !== undefined) ? name : ''}
                onChange={handleNameChange} />
            <span className="firstname-error edit-form__personalia-error" />
            <input
                type="text"
                id="profession"
                required
                minLength="2" maxLength="200"
                name="about"
                placeholder="О себе"
                className="edit-form__personalia"
                value={(description !== null && description !== undefined) ? description : ''}
                onChange={handleDescriptionChange} />
            <span className="profession-error edit-form__personalia-error" />
        </PopupWithForm>
    )
}

export default EditProfilePopup;