import React from "react";
import "./TrySection.css";

const TrySection: React.FC = () => {
  return (
    <section id="try" className="try">
      <div className="try-inner">
        <div className="try-left">
          <h2>Попробуйте держать цены в топе хотя бы 7 дней</h2>
          <p>
            Мы подключим бота к вашему магазину на Kaspi, настроим минимальную
            цену и правила. Через неделю вы наглядно увидите разницу по заказам.
          </p>

          <ul className="try-list">
            <li>Не просим логин/пароль от Kaspi</li>
            <li>Не трогаем деньги и выплаты</li>
            <li>Можно отключить бота в любой момент</li>
          </ul>
        </div>

        <form
          className="try-form"
          onSubmit={(e) => {
            e.preventDefault();
            // тут потом воткнёшь свою отправку
          }}
        >
          <h3>Оставить контакт</h3>
          <p>Мы напишем в WhatsApp/Telegram и подключим бота.</p>

          <label>
            Ваше имя
            <input placeholder="Как к вам обращаться" required />
          </label>

          <label>
            Телефон / WhatsApp
            <input placeholder="+7 ..." required />
          </label>

          <label>
            Ссылка на магазин на Kaspi
            <input placeholder="https://kaspi.kz/shop/..." required />
          </label>

          <button type="submit">Отправить заявку</button>

          <span className="try-agreement">
            Нажимая на кнопку, вы соглашаетесь на обработку данных.
          </span>
        </form>
      </div>
    </section>
  );
};

export default TrySection;
