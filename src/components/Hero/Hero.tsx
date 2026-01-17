import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <div className="hero-chip">Для продавцов на Kaspi</div>

        <h1 className="hero-title">
          Бот, который держит твой товар{" "}
          <span className="hero-highlight">первым в выдаче Kaspi</span>
        </h1>

        <p className="hero-subtitle">
          Salescout следит за конкурентами на Kaspi и сам меняет цену так, чтобы
          твой товар был выше в списке. Ты задаёшь минимальную маржу — бот
          делает остальное.
        </p>

        <ul className="hero-list">
          <li>Мониторим цены конкурентов на Kaspi каждые 3 минуты</li>
          <li>Опускаем цену на выбранный шаг, чтобы вернуться на 1 место</li>
          <li>Работает 24/7, не трогая твой баланс и платежи</li>
        </ul>

        <div className="hero-actions">
          <a href="#try" className="hero-btn-primary">
            Подключить к моему магазину на Kaspi
          </a>
          <span className="hero-note">
            Без доступа к деньгам • можно отключить в любой момент
          </span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-mock">
          <div className="hero-mock-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <div className="hero-mock-body">
            <div className="mock-row-top">
              <div className="mock-tag">Категория: Смартфоны</div>
              <div className="mock-status">Kaspi магазин</div>
            </div>

            <div className="mock-table">
              <div className="mock-table-head">
                <span>Товар</span>
                <span>Цена</span>
                <span>Позиция</span>
              </div>

              <div className="mock-table-row active">
                <span>iPhone 13 128GB</span>
                <span>289 990 ₸</span>
                <span className="pos pos-1">1 место</span>
              </div>

              <div className="mock-table-row">
                <span>iPhone 13 128GB</span>
                <span>290 000 ₸</span>
                <span className="pos">2 место</span>
              </div>

              <div className="mock-table-row">
                <span>iPhone 13 128GB</span>
                <span>292 000 ₸</span>
                <span className="pos">3 место</span>
              </div>
            </div>

            <div className="mock-footer">
              Bot: снизили цену на выбранный шаг → вернули 1 место в выдаче Kaspi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
