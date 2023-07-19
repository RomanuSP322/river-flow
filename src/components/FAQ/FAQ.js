import React, { useState } from "react";
import { faq } from "../../const/info";

import "./FAQ.css";
import circle from "../../images/circle.png"


function FAQ() {
  const [cur, setCur] = useState(0);
  const midIndex = Math.floor(faq.length / 2);
  const firstHalf = faq.slice(0, midIndex);
  const secondHalf = faq.slice(midIndex);

  const onClick = (idx) => {
    setCur(idx);
  };

  function dropdownItem(item, idx) {
    return (
      <div className="faq__item" key={idx} id='faq'>
        <button
          onClick={() => onClick(idx)}
          className={`faq__button ${
            idx === cur ? "faq__button_active" : ""
          }`}
        >
          <h3
            className={`faq__item-title ${
              idx  === cur
                ? "faq__item-title_active"
                : ""
            }`}
          >
            {item.title}
          </h3>
          <div
            className={`faq__arrow ${
              idx === cur ? "faq__arrow_active" : ""
            }`}
          ></div>
        </button>
        <p
          className={`faq__dropdown ${
            idx === cur ? "faq__dropdown_active" : ""
          }`}
        >
          {item.description}
        </p>
      </div>
    );
  }
  


  return (
    <div className="faq">
      <h2 className='h2'>Часто задаваемые вопросы</h2>
    {!faq || faq.length === 0 ? null : (
      <div className="faq__list" style={{ "--circle": `url(${circle})` }}>
        <div>
        {firstHalf.map((item, idx) => {
          return (
            dropdownItem(item, idx)
          );
        })}
        </div>
        <div>
        {secondHalf.map((item, idx) => {
          return (
            dropdownItem(item, idx+midIndex)
          );
        })}
        </div>
      </div>
    )}
  </div>
)}


export default FAQ;
