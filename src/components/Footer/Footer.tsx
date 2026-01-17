import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-logo">Salescout</div>
          <p>
            Бот, который помогает продавцам на Kaspi держать цены в топе и
            получать больше заказов.
          </p>
        </div>

        <div className="footer-columns">
          <div>
            <h4>Продукт</h4>
            <a href="#how">Как работает</a>
            <a href="#tariffs">Тарифы</a>
          </div>
          <div>
            <h4>Связаться</h4>
            <span>Напишите нам в WhatsApp/Telegram</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Salescout</span>
        <span>Не является продуктом Kaspi. Работаем как отдельный сервис.</span>
      </div>
    </footer>
  );
};

export default Footer;
