import React from 'react';
import styles from './Advantages.module.css'; 

const Advantages = () => {
  const advantages = [
    {
      icon: '🏢',
      text: 'Ваш надежный партнер в мире складских решений!',
    },
    {
      icon: '🔨',
      text: 'Монтаж и демонтаж стеллажей под ключ — быстро и качественно!',
    },
    {
      icon: '📦',
      text: 'Официальный дистрибьютор с уникальными условиями!',
    },
    {
      icon: '📞',
      text: 'Круглосуточная поддержка — мы всегда на связи!',
    },
    {
      icon: '👷‍♂️',
      text: 'Команда профессионалов — ваш успех в надежных руках!',
    },
    {
      icon: '📝',
      text: 'Индивидуальные решения для каждого клиента — мы учитываем все ваши потребности!',
    },
    {
      icon: '⭐',
      text: 'Качество и надежность — наши главные приоритеты!',
    },
    {
      icon: '⚙️',
      text: 'Складские решения, которые работают на вас!',
    },
  ];

  return (
    <div className={`${styles.container} content`}>
      <div className={styles.advantagesContainer}>
        <div className={styles.advantagesColumn}>
          {advantages.slice(0, 4).map((advantage, index) => (
            <div className={styles.advantageItem} key={index}>
              <span className={styles.advantageIcon}>{advantage.icon}</span>
              <span className={styles.advantageText}>{advantage.text}</span>
            </div>
          ))}
        </div>
        <div className={styles.advantagesColumn}>
          {advantages.slice(4).map((advantage, index) => (
            <div className={styles.advantageItem} key={index + 4}>
              <span className={styles.advantageIcon}>{advantage.icon}</span>
              <span className={styles.advantageText}>{advantage.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
