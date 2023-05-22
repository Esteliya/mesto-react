import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
    const { isOpen, onClose, currentUser } = props;

    //переменые полей имени и о себе пользователя
    const [name, setName] = React.useState(currentUser.name);
    const [description, setDescription] = React.useState(currentUser.about);
    

    //обработчик поля имени
    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    //обработчик поля о себе
    function handleDescriptionChange(evt) {
        setDescription(evt.target.value);
    }


    return (
        <PopupWithForm name='profile' title='Редактировать профиль' btnText='Сохранить' isOpen={isOpen} onClose={onClose}>
            <input type="text" id="firstname" required minLength="2" maxLength="40" name="name" placeholder="Имя" className="edit-form__personalia" value={name} onChange={handleNameChange}/>
            <span className="firstname-error edit-form__personalia-error" />
            <input type="text" id="profession" required minLength="2" maxLength="200" name="about" placeholder="О себе" className="edit-form__personalia" value={description} onChange={handleDescriptionChange}/>
            <span className="profession-error edit-form__personalia-error" />
        </PopupWithForm>
    )
}

export default EditProfilePopup;