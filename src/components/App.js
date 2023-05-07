import '../App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div className="page">
  <Header/>
  <Main />
  <Footer />
 
  <div className="popup profile-popup">
    <div className="popup__container">
      <form name="personalia" noValidate method="post" className="edit-form edit-form-profile" >
        <h2 className="edit-form__title">Редактировать профиль</h2>
        <input type="text" id="firstname" required minLength="2" maxLength="40" name="name" placeholder="Имя"
          className="edit-form__personalia" />
        <span className="firstname-error edit-form__personalia-error"></span>
        <input type="text" id="profession" required minLength="2" maxLength="200" name="about" placeholder="О себе"
          className="edit-form__personalia" />
        <span className="profession-error edit-form__personalia-error"></span>
        <button type="submit" className="popup__save-button">Сохранить</button>
      </form>
      <button type="button" aria-label="Закрыть." className="popup__close-button"></button>
    </div>
  </div>
  
  <div className="popup add-card-popup">
    <div className="popup__container">
      <form name="personalia" noValidate method="post" id="add-form" className="edit-form edit-form-add-card">
        <h2 className="edit-form__title">Новое место</h2>
        <input type="text" required minLength="2" maxLength="30" id="name-card" name="name" placeholder="Название"
          className="edit-form__personalia" />
        <span className="name-card-error edit-form__personalia-error"></span>
        <input type="url" required id="images" name="link" placeholder="Ссылка на картинку"
          className="edit-form__personalia" />
        <span className="images-error edit-form__personalia-error"></span>
        <button type="submit" className="popup__save-button">Создать</button>
      </form>
      <button type="button" aria-label="Закрыть." className="popup__close-button" id="close-add-card"></button>
    </div>
  </div>
  
  <div className="popup popup_darck zoom-img-popup">
    <div className="popup__card">
      <div className="popup__user-photo">
        <img className="popup__photo" alt="#" src="#" />
        <button type="button" aria-label="Закрыть." className="popup__close-button" id="close-img-card"></button>
        <h2 className="popup__photo-title">Текст картинки</h2>
      </div>
    </div>
  </div>
 
  <div className="popup delete-card-popup">
    <div className="popup__container">
      <form name="confirmation" noValidate method="post" className="edit-form">
        <h2 className="edit-form__title">Вы уверены?</h2>
        <button type="submit" className="popup__save-button">Да</button>
      </form>
      <button type="button" aria-label="Закрыть." className="popup__close-button"></button>
    </div>
  </div>
  
  <div className="popup add-avatar-popup">
    <div className="popup__container">
      <form name="personalia" noValidate method="post" id="add-form-avatar" className="edit-form edit-form-avatar">
        <h2 className="edit-form__title">Обновить аватар</h2>
        <input type="url" required id="avatar" name="avatar" placeholder="Ссылка на картинку"
          className="edit-form__personalia" />
        <span className="avatar-error edit-form__personalia-error"></span>
        <button type="submit" className="popup__save-button">Создать</button>
      </form>
      <button type="button" aria-label="Закрыть." className="popup__close-button" id="close-add-avatar"></button>
    </div>
  </div>
</div>
  );
}

export default App;
