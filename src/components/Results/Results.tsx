import React from "react";
import "./Results.css";

const stats = [
  {
    label: "Рост заказов",
    value: "+32%",
    desc: "В среднем по магазинам, которые держат товар в топ-3 выдачи.",
  },
  {
    label: "Экономия времени",
    value: "3–4 ч/день",
    desc: "Больше не нужно вручную перепроверять конкурентов и менять цены.",
  },
  {
    label: "Безопасность",
    value: "0 доступов к деньгам",
    desc: "Бот работает только с ценой — не может списать или получить оплату.",
  },
];

const Results: React.FC = () => {
  return (
    <section id="results" className="results">
      <div className="results-head">
        <span className="section-kicker">Результаты</span>
        <h2>Что даёт демпинг-бот на Kaspi в реальности</h2>
        <p>
          Основная задача — не “магические цифры”, а стабильный поток заказов за
          счёт того, что вы выше конкурентов.
        </p>
      </div>

      <div className="results-grid">
        {stats.map((item) => (
          <div key={item.label} className="results-card">
            <div className="results-value">{item.value}</div>
            <div className="results-label">{item.label}</div>
            <p className="results-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
