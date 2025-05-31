import React, { useEffect, useRef, useState } from 'react';
import style from './Footer.module.css';
import { useDispatch } from 'react-redux';
import { options } from '../../Utils/options';
import { setServiceActiveTag } from '../../Redux/Slices/Services/Services';

const Footer = () => {
  const ref = useRef();
  const [servise, setServise] = useState();
  useEffect(() => setServise(document.querySelector('#services')), [ref]);
  const dispatch = useDispatch();

  function handleClick(item) {
    if (item) {
      dispatch(setServiceActiveTag(item));
    } else {
      dispatch(setServiceActiveTag(null));
    }
    if (!servise) return;
    servise.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <footer className={style.footer} ref={ref}>
      <div className={`${style.footerContent} content`}>
        <div className={style.footerColumns}>
          {/* Новая колонка с пунктами "Главная", "О нас", "Калькулятор" */}
          <div className={style.footerColumn}>
            <h3>Навигация</h3>
            <ul>
              <li><button onClick={() => handleClick('home')}>Главная</button></li>
              <li><button onClick={() => handleClick('about')}>О нас</button></li>
              <li><button onClick={() => handleClick('calculator')}>Калькулятор</button></li>
            </ul>
          </div>
          {/* Колонка "Стеллажи" */}
          <div className={style.footerColumn}>
            <h3>Стеллажи</h3>
            <ul>
              <li><button onClick={() => handleClick('front')}>Фронтальные</button></li>
              <li><button onClick={() => handleClick('pallet')}>Паллетные</button></li>
              <li><button onClick={() => handleClick('deep')}>Глубинные</button></li>
              <li><button onClick={() => handleClick('knockdown')}>Набивные</button></li>
              <li><button onClick={() => handleClick('shelf')}>Полочные</button></li>
              <li><button onClick={() => handleClick('mezzanine')}>Мезонинные</button></li>
              <li><button onClick={() => handleClick('consoles')}>Консольные</button></li>
            </ul>
          </div>
          {/* Колонка "Услуги" */}
          <div className={style.footerColumn}>
            <h3>Услуги</h3>
            <ul>
              {options.map((item, index) => {
                return <li key={index}><button onClick={() => handleClick(item)}>{item.name}</button></li>
              })}
            </ul>
          </div>
        </div>
          <div className={style.footerContact}>
            <p>Email: info@tdunion.ru</p>
            <p>Телефон: +7 (123) 456-78-90</p>
            <p><a href="/privacy-policy">Политика конфиденциальности</a></p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;