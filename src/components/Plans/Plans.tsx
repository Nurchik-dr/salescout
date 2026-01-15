import React from "react";

const Plans: React.FC = () => {
  const plans = [
    { title: "Старт", items: "до 50 товаров", price: "35 000 ₸/мес", desc: "Идеально для небольших магазинов, которые только начинают." },
    { title: "Рост", items: "до 500 товаров", price: "50 000 ₸/мес", desc: "Для магазинов среднего размера, которые хотят увеличить продажи быстро." },
    { title: "Бизнес", items: "до 1300 товаров", price: "80 000 ₸/мес", desc: "Максимальный план для крупных магазинов с большим ассортиментом." },
  ];

  return (
    <section id="plans" style={{ padding: "100px 80px" }}>
      <h2 style={{ fontSize: "42px", textAlign: "center", marginBottom: "60px" }}>Тарифы и планы</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        {plans.map((plan) => (
          <div key={plan.title} style={{ background: "#FFFFFF", border: "2px solid #E7F4F2", borderRadius: "20px", padding: "40px", width: "300px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
            <h3 style={{ marginBottom: "10px", color: "#00BFA6" }}>{plan.title}</h3>
            <p>{plan.items}</p>
            <h2>{plan.price}</h2>
            <p>{plan.desc}</p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", marginTop: "40px", color:"#555" }}>3 дня бесплатно — попробуй без рисков и без карт.</p>
    </section>
  );
};

export default Plans;
