import React from 'react';
import form from './form.module.css'

const MainForm = (props) => {
  return (
    <form action="mail-telegram.php" name="main-form" method="POST">
      <input type="hidden" name="utm_source" value="" />
      <input type="hidden" name="utm_medium" value="" />
      <input type="hidden" name="utm_campaign" value="" />
      <input type="hidden" name="utm_content" value="" />
      <input type="hidden" name="utm_term" value="" />
      <h3>Заполните эту форму и получите консультацию в течении 5 минут</h3>
      <p>Заполните поля ниже. За вашим телефоном закрепляется доступ к ценам со скидкой.</p>
      <label for="user_name">
        <input id="user_name" type="text" name="user_name" value="" placeholder="Ваше имя" required />
      </label>
      <label for="user_phone">
        <input id="user_phone" type="tel" name="user_phone" value="" placeholder="+375 (" required />
      </label>
      <button type="submit" >Получить консультацию</button>
    </form>
  )
}

export default MainForm;