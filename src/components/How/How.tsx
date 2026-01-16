import React from "react";

const How: React.FC = () => {
  const steps = [
    { title: "Смотрим цены", text: "Сравниваем твою цену с конкурентами." },
    { title: "Снижаем на 1₸", text: "Если ты не первый — снижаем аккуратно." },
    { title: "Ты снова первый", text: "Твой товар поднимается на вершину списка." },
    { title: "Клиенты покупают", text: "Первый продавец получает почти все заказы." },
  ];

  return (
    <section id="how">
      <div className="container">
        <h2>Как работает TopPrice</h2>
        <div className="grid" style={{gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"}}>
          {steps.map((s, idx) => (
            <div key={idx} className="card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
