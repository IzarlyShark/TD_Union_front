import React, { useEffect, useRef, useState } from 'react';
import style from './Footer.module.css';
import { useDispatch } from 'react-redux';
import { options } from '../../Utils/options';
import { setServiceActiveTag } from '../../Redux/Slices/Services/Services';
import { setFormType } from "../../Redux/Slices/Calc";

const Footer = () => {
  const ref = useRef();
  const [servise, setServise] = useState();
  const [calc, setCalc] = useState();
  const [about, setAbout] = useState();
  const [home, setHome] = useState();
  useEffect(() => {
    setServise(document.querySelector('#services'))
    setCalc(document.querySelector('#calc'))
    setAbout(document.querySelector('#about'))
    setHome(document.querySelector('#home'))
  }, [ref]);
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

  function handleClickCalc(item) {
    if (item) {
      dispatch(setFormType(item));
    } else {
      dispatch(setFormType(null));
    }
    if (!calc) return;
    calc.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleNavigate (item) {
    if(item === 'calc'){
      calc.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if(item === 'about'){
      about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (item === 'home') {
      home.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <footer className={style.footer} ref={ref}>
      <div className={`${style.footerContent} content`}>
        <div className={style.footerColumns}>
          {/* Новая колонка с пунктами "Главная", "О нас", "Калькулятор" */}
          <div className={style.footerColumn}>
            <h3>Навигация</h3>
            <ul>
              <li><button onClick={() => handleNavigate('home')}>Главная</button></li>
              <li><button onClick={() => handleNavigate('about')}>О нас</button></li>
              <li><button onClick={() => handleNavigate('calc')}>Калькулятор</button></li>
            </ul>
          </div>
          {/* Колонка "Стеллажи" */}
          <div className={style.footerColumn}>
            <h3>Стеллажи</h3>
            <ul>
              <li><button onClick={() => handleClickCalc('front')}>Фронтальные</button></li>
              <li><button onClick={() => handleClickCalc('pallet')}>Паллетные</button></li>
              <li><button onClick={() => handleClickCalc('depth')}>Глубинные</button></li>
              <li><button onClick={() => handleClickCalc('shelves')}>Полочные</button></li>
              <li><button onClick={() => handleClickCalc('mezzanine')}>Мезонинные</button></li>


              {/* <li><button onClick={() => handleClick('knockdown')}>Набивные</button></li>
              <li><button onClick={() => handleClick('consoles')}>Консольные</button></li> */}
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