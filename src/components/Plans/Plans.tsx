import React from "react";

const Plans: React.FC = () => {
  const plans = [
    { title: "Старт", items: "до 50 товаров", price: "35 000 ₸/мес", desc: "Идеально для небольших магазинов, которые только начинают." },
    { title: "Рост", items: "до 500 товаров", price: "50 000 ₸/мес", desc: "Для магазинов среднего размера, которые хотят увеличить продажи быстро." },
    { title: "Бизнес", items: "до 1300 товаров", price: "80 000 ₸/мес", desc: "Максимальный план для крупных магазинов с большим ассортиментом." },
  ];

  return (
    <section id="plans">
      <h2>Тарифы и планы</h2>
      <div className="grid">
        {plans.map((plan) => (
          <div key={plan.title} className="card">
            <h3>{plan.title}</h3>
            <p>{plan.items}</p>
            <h3>{plan.price}</h3>
            <p>{plan.desc}</p>
          </div>
        ))}
      </div>
      <p>3 дня бесплатно — попробуй без рисков и без карт.</p>
    </section>
  );
};

export default Plans;
