import React, {useState} from 'react';
import form from './form.module.css';
import InputMask from 'react-input-mask';

const MainForm = (props) => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const onEmailChange = (event) => setUserName(event.target.value);
  const onPhoneChange = (event) => setUserPhone(event.target.value);

  const onSendData = (event) => {
    event.preventDefault();
  }

  return (
    <form action="#" name="main-form" method="GET">
      <input type="hidden" name="utm_source" value="" />
      <input type="hidden" name="utm_medium" value="" />
      <input type="hidden" name="utm_campaign" value="" />
      <input type="hidden" name="utm_content" value="" />
      <input type="hidden" name="utm_term" value="" />
      <h3>Заполните эту форму и получите консультацию в течении 5 минут</h3>
      <p>Заполните поля ниже. За вашим телефоном закрепляется доступ к ценам со скидкой.</p>
      <label for="user_name">
        <InputMask
          onChange={onEmailChange}
          id="user_name"
          type="text"
          name="user_name"
          value={userName}
          placeholder="Ваше имя"
          required
        />
      </label>
      <label for="user_phone">
        <InputMask
          mask='+375 (99) 999-99-99'
          onChange={onPhoneChange}
          value={userPhone}
          id="user_phone"
          type="tel"
          name="user_phone"
          placeholder="+375 ("
          required
        />
      </label>
      <button disabled={!userName || !userPhone}>
        Получить консультацию
      </button>
    </form>
  )
}

export default MainForm;