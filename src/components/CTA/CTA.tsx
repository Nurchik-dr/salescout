import React from "react";

const CTA: React.FC = () => {
  return (
    <section id="cta" className="cta">
      <h2>Хочешь быть в числе лидеров Kaspi?</h2>
      <p>Запуск занимает 3 минуты. Не нужны специальные навыки</p>
      <a href="#" className="btn">Попробовать бесплатно</a>
      <a href="#" className="btn" style={{ marginLeft: "10px" }}>Попросить звонок</a>
    </section>
  );
};

export default CTA;
