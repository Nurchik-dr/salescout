import React from "react";
import { Package } from "lucide-react";

const Tariffs: React.FC = () => {
  const plans = [
    { title: "Старт", items: "До 50 товаров", price: "35 000 ₸/мес" },
    { title: "Рост", items: "До 500 товаров", price: "50 000 ₸/мес" },
    { title: "Бизнес", items: "До 1300 товаров", price: "80 000 ₸/мес" },
  ];

  return (
    <section id="tariffs">
      <div className="container">
        <div className="section-header">
          <h2>Тарифы без сложной математики</h2>
          <p>
            Платишь за количество товаров, на которых TopPrice следит за ценой.
            Остальное — наша забота.
          </p>
        </div>

        <div className="grid grid-3">
          {plans.map((plan) => (
            <div key={plan.title} className="card">
              <div className="card-header">
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    background: "rgba(15,23,42,0.9)",
                    border: "1px solid rgba(148,163,184,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Package size={18} />
                </div>
                <h3>{plan.title}</h3>
              </div>
              <p style={{ marginBottom: 4 }}>{plan.items}</p>
              <p style={{ fontWeight: 600, fontSize: 16, color: "#e5e7eb" }}>
                {plan.price}
              </p>
              <button className="btn" style={{ marginTop: 14 }}>
                Выбрать
              </button>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 16, fontSize: 12, color: "#6b7280" }}>
          3 дня бесплатно — без карты и без привязки к долгим договорам.
        </p>
      </div>
    </section>
  );
};

export default Tariffs;
