import React, { useState } from 'react';
import Button from '../Button/Button';
import InputMask from 'react-input-mask';
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const nameRegex = /^[a-zA-Zа-яА-Я]+$/iu;
  const phoneRegex =
    /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;

  const validateName = (value) => {
    if (!nameRegex.test(value)) {
      setNameError('Неправильно указано имя');
    } else {
      setNameError('');
    }
  };

  const validatePhone = (value) => {
    if (!phoneRegex.test(value)) {
      setPhoneError('Неправильно указан номер');
    } else {
      setPhoneError('');
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    validatePhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameError && !phoneError && (phone.length > 2) ) {
      const token = '5885413193:AAGKJJtvOWiK5pcvJE1aMwwchUruMpo1QJs';
      const chatId = '-973683498';
      const cleanedPhone = phone.replace(/^\+7/, '');
      const nospacePhone = cleanedPhone.replace(/\s/g, '');
      // Replace the first digit with "8"
      const formattedPhone = `8${nospacePhone}`;
      // Create a string with the form data to send to the Telegram API
      const text = `Имя: ${name}%0A ${formattedPhone}%0AКоммент: ${message}`;
  
      const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSubmitStatus('success');
          console.log(data);
        })
        .catch((error) => {
          setSubmitStatus('error');
          console.error(error);
        });

      setName('');
      setPhone('');
      setMessage('');
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <h2 className='contact-form__title'>Обратный звонок</h2> <br />
      <div className='contact-form__input-wrapper'>
        <label className='contact-form__label'>Ваше Имя * </label>
        <input
          type='text'
          value={name}
          id='name'
          placeholder='Как к вам обращаться'
          onChange={handleNameChange}
          className={`contact-form__input ${nameError ? 'error' : ''}`}
        />
        {nameError && <span className='error-message'>{nameError}</span>}
      </div>
      <br />
      <div className='contact-form__input-wrapper'>
        <label className='contact-form__label'>Ваш Телефон * </label>
        <InputMask
          type='tel'
          mask="+7 999 999 99 99"
          value={phone}
          id='phone'
          placeholder='+7 999 156 61 95'
          onChange={handlePhoneChange}
          className={`contact-form__input ${phoneError ? 'error' : ''}`}
        />
        {phoneError && <span className='error-message'>{phoneError}</span>}
      </div>
      <div>
        <br />
        <label className='contact-form__label'>Комментарий </label>
        <textarea
          value={message}
          className='contact-form__textarea'
          placeholder='Какой выбрали катер, маршрут. Сколько человек и т.д.'
          onChange={(e) => setMessage(e.target.value)}
        />

        <br />
      </div>
      <div className='contact-form__buttons'>
      <Button name='Отправить' width='180' height='60' type='submit' />
      </div>
      {submitStatus === 'success' && (
        <div className='success-message'>Отправленно</div>
      )}
      {submitStatus === 'error' && (
        <div className='error-message__submit'>Корректно заполните поля со *</div>
      )}
 
    </form>
  );
}

export default ContactForm;
