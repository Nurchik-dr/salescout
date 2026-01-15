import React from "react";

const steps = [
  { title: "1. Проверка цен", desc: "SaleScout смотрит цены конкурентов каждые 3 минуты" },
  { title: "2. Подбор оптимальной цены", desc: "Чтобы твой магазин был первым в списке" },
  { title: "3. Рост прибыли", desc: "Больше заказов, меньше ручной работы" },
];

const Steps: React.FC = () => {
  return (
    <section id="how" className="steps">
      <h2>Как это работает</h2>
      {steps.map((step, idx) => (
        <div key={idx} className="step">
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Steps;
