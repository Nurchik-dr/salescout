import React from "react";

const tariffs = [
  { name: "Мини", price: "35 000 ₸/мес", desc: "До 50 товаров" },
  { name: "Стандарт", price: "50 000 ₸/мес", desc: "До 500 товаров" },
  { name: "Бизнес", price: "80 000 ₸/мес", desc: "До 800 товаров" },
  { name: "PRO", price: "100 000 ₸/мес", desc: "До 1300 товаров" },
];

const Tariffs: React.FC = () => {
  return (
    <section id="tariffs" className="tariffs">
      <h2>Тарифы</h2>
      <div className="ttt">
        {tariffs.map((t, idx) => (
        <div key={idx} className="tariff">
          <h3>{t.name}</h3>
          <p>{t.price}</p>
          <p>{t.desc}</p>
          <a href="#" className="btn">Попробовать</a>
        </div>
      ))}</div>
    </section>
  );
};

export default Tariffs;
