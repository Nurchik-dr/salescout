import React from "react";
import "./TrySection.css";

const TrySection: React.FC = () => {
  return (
    <section id="try" className="try">
      <div className="try-inner">
        <div className="try-left">
          <h2>Попробуйте 7 дней бесплатно</h2>
          <p>
            Подключим бота к вашему магазину на Kaspi, настроим правила и вы
            сами увидите разницу по заказам.
          </p>

          <ul className="try-list">
            <li>Бот имитирует действия продавца</li>
            <li>Безопасно и без доступа к платежам</li>
            <li>Можно отключить в любой момент</li>
          </ul>
        </div>

        <form
          className="try-form"
          onSubmit={(e) => {
            e.preventDefault();
            // handling
          }}
        >
          <h3>Оставить контакт</h3>
          <p>Мы напишем в WhatsApp и подключим бота.</p>

          <label>
            Имя
            <input placeholder="Как вас зовут" required />
          </label>

          <label>
            WhatsApp
            <input placeholder="+7 ..." required />
          </label>

          <button type="submit">Отправить</button>

          <span className="try-agreement">
            Нажимая на кнопку, вы соглашаетесь на обработку данных.
          </span>
        </form>
      </div>
    </section>
  );
};

export default TrySection;
