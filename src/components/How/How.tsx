import React from "react";
import "./How.css";

const steps = [
  {
    title: "Подключаете магазин на Kaspi",
    desc: "Создаём отдельный бот-профиль под ваш магазин. Не трогаем платежи и деньги — работаем только с ценой.",
    tag: "1 шаг",
  },
  {
    title: "Выбираете минимальную маржу",
    desc: "Вы задаёте минимальную цену, ниже которой опускаться нельзя. Бот сам решает, насколько демпить, чтобы быть выше конкурентов.",
    tag: "2 шаг",
  },
  {
    title: "Бот следит за конкурентами 24/7",
    desc: "Каждые 3 минуты бот проверяет цены конкурентов на Kaspi и двигает вашу цену в нужный диапазон, чтобы вы оставались первыми.",
    tag: "3 шаг",
  },
];

const How: React.FC = () => {
  return (
    <section id="how" className="how">
      <div className="how-head">
        <span className="section-kicker">Как работает бот</span>
        <h2>Что делает Salescout за продавца на Kaspi</h2>
        <p>
          Вместо того чтобы вручную менять цену десятки раз в день, бот делает
          это сам — по вашим правилам.
        </p>
      </div>

      <div className="how-grid">
        {steps.map((step) => (
          <div key={step.title} className="how-card">
            <div className="how-tag">{step.tag}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default How;
