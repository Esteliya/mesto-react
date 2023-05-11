function PopupWithForm (props) {
  const { name, title, btnText, children, isOpen, onClose } = props;

  const popupClass = isOpen ? ('popup popup_open') : ('popup');

      return (
    <div className= {popupClass}>
     <div className="popup__container">
     <h2 className="edit-form__title">{title}</h2>
      <form name={name} noValidate method="post" className={`edit-form edit-form-${name}`}>
        {children}

        <button type="submit" className="popup__save-button">{btnText}</button>
      </form>
      <button type="button" aria-label="Закрыть." className="popup__close-button" onClick={onClose}></button>
    </div>
  </div>
    )

}

export default PopupWithForm;