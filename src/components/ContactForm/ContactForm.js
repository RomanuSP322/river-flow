import React, { useState } from 'react';
import './ContactForm.css';


const token = '5885413193:AAGKJJtvOWiK5pcvJE1aMwwchUruMpo1QJs'; // Token obtained during bot registration
const chatId = '5885413193';

// Object with data received from the feedback form
const data = {
  "Имя клиента: ": trim(stripTags(from_name)),
  "Телефон клиента: ": trim(stripTags(from_phone)),
  "Email клиента: ": trim(stripTags(from_email)),
};

// Create a string with all the client data to send to the Telegram API
let text = '';
for (const key in data) {
  text += "<br>" + key + "<br>" + data[key] + "%0A";
}

const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${text}`;
const proxy = "67.154.111.452:3128";




const  handleSubmit = (e) => {
  e.preventDefault();
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    proxy: proxy,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // Handle the response from the Telegram API
    })
    .catch(error => {
      console.error(error); // Handle any errors
    });
}

function Button(props) {

  return (
    <input
      id={props.ID}
      type='submit'
      value='Отправить'      
      className='contact-form__submit'
    />
  );
}
function Input(props) {
  function Checker(event) {
    let value = event.target.value;
    let i = props.ID.toString();
    if (i === 'name') {
      //eslint-disable-next-line
      const re =  /^[a-zA-Zа-яА-Я]+$/ui;
      let ans = re.test(value);
      if (ans === false)
        document.getElementById(i).style = 'border: 1px solid red';
      else document.getElementById(i).style = 'border: 1px solid #00e600';
    } else if (i === 'phone') {
      //eslint-disable-next-line
      const re = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
      let ans = re.test(value);
      if (value.length < 11 || value.length > 13 || ans === false)
        document.getElementById(i).style = 'border: 1px solid red';
      else document.getElementById(i).style = 'border: 1px solid #00e600';
    } else if (i === 'email') {
      //eslint-disable-next-line
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let ans = re.test(value);
      if (ans === false)
        document.getElementById(i).style = 'border: 1px solid red';
      else document.getElementById(i).style = 'border: 1px solid #00e600';
    }
  }
  return (
    <input
      autoComplete='off'
      type={props.type}
      placeholder={props.hint}
      id={props.ID}
      onChange={Checker}
      className='contact-form__input'
      required={props.required}
      name={`from_${props.ID}`}
    />
  );
}

function Form(props) {
  return (
    <div className='form'>
      <form className='contact-form' onSubmit= {handleSubmit}>
        <h2 className='contact-form__title'>Свяжитесь с нами</h2> <br />
        <div>
          <label className='contact-form__label'>Имя*</label> <br />
          <Input hint='Введите имя' type='text' ID='name' required='required'/>
        </div>
        <div className='form-element'>
          <label className='contact-form__label'>E-mail*</label> <br />
          <Input hint='Адрес электронной почты' type='email' ID='email' required='required'/>
        </div>
        <div className='form-element'>
          <label className='contact-form__label'>Телефон</label> <br />
          <Input hint='Контактный номер телефона ' type='text' ID='phone' />
        </div>
        <div className='form-element'>
          <label className='contact-form__label'>Сообщение</label> <br />
          <textarea
            id='message'
            rows='5'
            placeholder=''
            className='contact-form__textarea'           
            name='from_message'
          ></textarea>
        </div>
        <Button ID='submit' />
      </form>
    </div>
  );
}

export default Form;
