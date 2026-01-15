import React from "react";

const advantages = [
  { title: "Всегда первый", desc: "Магазин всегда в топе товаров" },
  { title: "Экономия времени", desc: "Не нужно вручную менять цены" },
  { title: "Работает ночью", desc: "Продажи не теряются, даже когда вы отдыхаете" },
  { title: "Несколько магазинов", desc: "Управляй всеми магазинами из одного окна" },
];

const Advantages: React.FC = () => {
  return (
    <section className="advantages">
      <h2>Преимущества</h2>
      {advantages.map((adv, idx) => (
        <div key={idx} className="adv">
          <h3>{adv.title}</h3>
          <p>{adv.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Advantages;
