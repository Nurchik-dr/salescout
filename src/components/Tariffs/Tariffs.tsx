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
        <h2>Простые тарифы</h2>
        <p className="section-sub">
          Платишь за количество товаров. Без странных доплат и мелкого шрифта.
        </p>

        <div className="grid grid-3">
          {plans.map((p) => (
            <div key={p.title} className="card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <Package size={18} />
                </div>
                <h3>{p.title}</h3>
              </div>
              <p>{p.items}</p>
              <p className="card-price">{p.price}</p>
              <button className="btn" style={{ marginTop: 14 }}>
                Выбрать
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tariffs;
