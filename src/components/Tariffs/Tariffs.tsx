import React from "react";

const Tariffs: React.FC = () => {
  const plans = [
    { title: "Старт", items: "до 50 товаров", price: "35 000 ₸/мес" },
    { title: "Рост", items: "до 500 товаров", price: "50 000 ₸/мес" },
    { title: "Бизнес", items: "до 1300 товаров", price: "80 000 ₸/мес" },
  ];

  return (
    <section id="tariffs">
      <div className="container">
        <h2>Тарифы</h2>

        <div className="grid" style={{gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"}}>
          {plans.map((p) => (
            <div key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.items}</p>
              <h3>{p.price}</h3>
              <a className="btn" style={{marginTop: 12}}>Выбрать</a>
            </div>
          ))}
        </div>

        <p style={{marginTop: 16, fontSize: 14, color: "#777"}}>
          3 дня бесплатно — без карт и без обязательств.
        </p>
      </div>
    </section>
  );
};

export default Tariffs;
