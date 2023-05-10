/* import '../App.css'; */
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {

/* const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

function handleEditProfileClick() {
  setIsEditProfilePopupOpen(true);
};

function closeAllPopups() {

} */

  return (
    <div className="page">
  <Header/>
  <Main />
  <Footer />

  <PopupWithForm name = 'profile' title = 'Редактировать профиль' btnText = 'Сохранить'>
        <input type="text" id="firstname" required minLength="2" maxLength="40" name="name" placeholder="Имя"
          className="edit-form__personalia" />
        <span className="firstname-error edit-form__personalia-error"/>
        <input type="text" id="profession" required minLength="2" maxLength="200" name="about" placeholder="О себе"
          className="edit-form__personalia" />
        <span className="profession-error edit-form__personalia-error"/>
  </ PopupWithForm>
 
  <PopupWithForm name = 'add-card' title = 'Новое место' btnText = 'Создать'>
        <input type="text" required minLength="2" maxLength="30" id="name-card" name="name" placeholder="Название"
          className="edit-form__personalia" />
        <span className="name-card-error edit-form__personalia-error" />
        <input type="url" required id="images" name="link" placeholder="Ссылка на картинку"
          className="edit-form__personalia" />
        <span className="images-error edit-form__personalia-error" />
  </ PopupWithForm>
 
  <PopupWithForm name = 'avatar' title = 'Обновить аватар' btnText = 'Создать'>
        <input type="url" required id="avatar" name="avatar" placeholder="Ссылка на картинку"
          className="edit-form__personalia" />
        <span className="avatar-error edit-form__personalia-error" />
  </ PopupWithForm>

  <PopupWithForm name = 'delete-card' title = 'Вы уверены?' btnText = 'Да' />
  
  <div className="popup popup_darck zoom-img-popup">
    <div className="popup__card">
      <div className="popup__user-photo">
        <img className="popup__photo" alt="#" src="#" />
        <button type="button" aria-label="Закрыть." className="popup__close-button" id="close-img-card"></button>
        <h2 className="popup__photo-title">Текст картинки</h2>
      </div>
    </div>
  </div>
 

  

</div>
  );
}

export default App;
