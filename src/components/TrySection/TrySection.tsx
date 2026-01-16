import React from "react";

const TrySection: React.FC = () => {
  return (
    <section id="try">
      <div className="container">
        <div className="try-box">
          <h2>Проверь сам</h2>
          <p>
            Если ты не первый — покупают у других. Подключи TopPrice и сравни
            количество заказов.
          </p>
          <a href="#" className="btn">
            Попробовать бесплатно
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrySection;
