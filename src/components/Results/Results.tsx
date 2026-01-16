import React from "react";

const Results: React.FC = () => {
  return (
    <section id="results">
      <div className="container">
        <h2>Результаты магазинов</h2>
        <p>
          Когда товар первый — его покупают. Вот что получили магазины после подключения TopPrice.
        </p>

        <div className="grid" style={{gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"}}>
          <div className="card">
            <h3>+400%</h3>
            <p>Рост заказов у новых магазинов за 10 дней</p>
          </div>
          <div className="card">
            <h3>+200%</h3>
            <p>Рост у опытных продавцов за месяц</p>
          </div>
        </div>

        <p style={{marginTop: 16, fontSize: 14, color: "#777"}}>
          Данные основаны на реальных магазинах и их динамике продаж.
        </p>
      </div>
    </section>
  );
};

export default Results;
