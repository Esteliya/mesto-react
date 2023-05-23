import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const { isOpen, onClose, onUpdateUser } = props;

    return (
        <PopupWithForm 
        name='avatar' 
        title='Обновить аватар' 
        btnText='Создать' 
        isOpen={isOpen} 
        onClose={onClose}>
          <input type="url" required id="avatar" name="avatar" placeholder="Ссылка на картинку" className="edit-form__personalia" />
          <span className="avatar-error edit-form__personalia-error" />
        </ PopupWithForm>
    )
}

export default EditAvatarPopup;