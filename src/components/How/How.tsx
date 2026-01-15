import React from "react";

const How: React.FC = () => {
  return (
    <section id="how" style={{ padding: "100px 80px" }}>
      <h2 style={{ fontSize: "42px", textAlign: "center", marginBottom: "60px" }}>Как это работает</h2>
      <div style={{ display: "flex", gap: "60px", justifyContent: "space-between" }}>
        <div style={{ flex: 1, background: "#F8FCFB", padding: "40px", borderRadius: "20px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
          <h3 style={{ marginBottom: "15px", color: "#00BFA6" }}>1. Бот проверяет конкурентов</h3>
          <p>Каждые 3 минуты бот проверяет цены у других продавцов и определяет, кто сейчас первый. Больше не нужно следить вручную.</p>
        </div>
        <div style={{ flex: 1, background: "#F8FCFB", padding: "40px", borderRadius: "20px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
          <h3 style={{ marginBottom: "15px", color: "#00BFA6" }}>2. Сам снижает цену</h3>
          <p>Если твой товар не первый, бот аккуратно снижает цену на 1₸, чтобы ты снова оказался на вершине списка.</p>
        </div>
        <div style={{ flex: 1, background: "#F8FCFB", padding: "40px", borderRadius: "20px", textAlign: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
          <h3 style={{ marginBottom: "15px", color: "#00BFA6" }}>3. Магазин снова на первом месте</h3>
          <p>Твои товары поднимаются вверх, получают больше заказов, а ты экономишь время и силы.</p>
        </div>
      </div>
    </section>
  );
};

export default How;
