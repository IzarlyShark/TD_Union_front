import React from 'react';
import styles from './Marquee.module.css'; // Импортируем стили

const Marquee = () => {
  const messages = [
    'Позвоните нам',
    'Бесплатный план расстановки',
    'Решения под ключ',
    'Выгодные цены',
    'Профессиональный подход',
    'Гарантия на стеллажное оборудование до 5 лет',
    'Оставьте заявку и мы свяжемся с вами',
  ];

  // Дублируем массив сообщений для бесконечной прокрутки
  const fullMessages = [...messages, ...messages];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        {fullMessages.map((message, index) => (
          <span className={styles.marqueeItem} key={index}>
            {message} &nbsp; &nbsp; {/* Добавляем пробелы между сообщениями */}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
