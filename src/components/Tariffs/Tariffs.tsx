import React from "react";
import "./Tariffs.css";

const plans = [
  {
    name: "Тест",
    price: "0 ₸",
    period: "7 дней",
    highlight: false,
    points: [
      "1 магазин на Kaspi",
      "До 500 товаров",
      "Мониторинг каждые 10 минут",
    ],
    note: "Чтобы почувствовать, как бот двигает цены за вас.",
  },
  {
    name: "Основной",
    price: "X ₸",
    period: "в месяц",
    highlight: true,
    points: [
      "До 3 магазинов на Kaspi",
      "До 10 000 товаров",
      "Мониторинг каждые 3 минуты",
      "Приоритетная поддержка",
    ],
    note: "Оптимальный вариант, если продажи уже идут.",
  },
  {
    name: "Сеть",
    price: "по договорённости",
    period: "",
    highlight: false,
    points: [
      "От 3+ магазинов",
      "Индивидуальные лимиты по товарам",
      "Персональные настройки демпинга",
    ],
    note: "Для крупных продавцов и сетей.",
  },
];

const Tariffs: React.FC = () => {
  return (
    <section id="tariffs" className="tariffs">
      <div className="tariffs-head">
        <span className="section-kicker">Тарифы</span>
        <h2>Сколько стоит держать магазин в топе</h2>
        <p>
          Оплата фиксированная. Бот не забирает процент с оборота и не имеет
          доступа к деньгам на Kaspi.
        </p>
      </div>

      <div className="tariffs-grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`tariff-card ${plan.highlight ? "tariff-card--main" : ""}`}
          >
            <div className="tariff-header">
              <h3>{plan.name}</h3>
              <div className="tariff-price-line">
                <span className="tariff-price">{plan.price}</span>
                {plan.period && <span className="tariff-period">/ {plan.period}</span>}
              </div>
            </div>

            <ul className="tariff-list">
              {plan.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <p className="tariff-note">{plan.note}</p>

            <a href="#try" className="tariff-btn">
              Оставить заявку
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tariffs;
