import React from 'react';
import styles from './ClientsPartners.module.css';
import brans from '../../Assets/Images/брендики.jpg';
import whatsappIcon from '../../Assets/Images/whatsapp-icon.png'; // Путь к иконке WhatsApp

const ClientsPartners = () => {
    const phoneNumber = '+79104069669'; // Замените на ваш номер телефона

    return (
        <div className={`${styles.container} content`}>
            <div className={styles.clientsPartners}>
                <h1>Часть наших клиентов и партнеров</h1>
                <img src={brans} alt="Логотипы клиентов и партнеров" className={styles.clientsLogos} />
                <div className={styles.callToAction}>
                    <p>Мы с радостью ответим на любые ваши вопросы</p>
                    <div className={styles.contactForm}>
                        <a href={`https://wa.me/${phoneNumber}`} className={styles.whatsappButton}>
                            <img src={whatsappIcon} alt="Позвонить в WhatsApp" className={styles.whatsappIcon} />
                            Позвонить
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsPartners;
