function ImagePopup () {
return (
    <div className="popup popup_darck zoom-img-popup">
    <div className="popup__card">
      <div className="popup__user-photo">
        <img className="popup__photo" alt="#" src="#" />
        <button type="button" aria-label="Закрыть." className="popup__close-button" id="close-img-card"></button>
        <h2 className="popup__photo-title">Текст картинки</h2>
      </div>
    </div>
  </div>
)
}
export default ImagePopup;