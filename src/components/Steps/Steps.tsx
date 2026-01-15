import React from "react";

const steps = [
  {
    title: "1. Анализ рынка",
    desc: "Платформа собирает актуальные данные о ценах, спросе и позициях конкурентов.",
  },
  {
    title: "2. Умная стратегия",
    desc: "SaleScout рассчитывает оптимальные цены и стратегии роста без демпинга.",
  },
  {
    title: "3. Автоматизация",
    desc: "Система обновляет данные и корректирует цены автоматически — ты фокусируешься на бизнесе.",
  },
];

const Steps: React.FC = () => {
  return (
    <section id="how" className="steps">
      <h2>Как работает SaleScout</h2>
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
