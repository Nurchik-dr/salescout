import React from "react";

const Results: React.FC = () => {
  return (
    <section id="results" style={{ background: "#F9FAFB", textAlign: "center", padding: "100px 80px" }}>
      <h2 style={{ fontSize: "42px", marginBottom: "40px" }}>Реальные результаты клиентов</h2>
      <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto 60px", color:"#444" }}>
        Магазины, которые подключили SaleScout, увеличили продажи в 2–4 раза уже в первый месяц. Всё без менеджеров, выходных и головной боли.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <div style={{ flex:1, background: "#FFFFFF", borderRadius: "20px", padding: "40px", width: "300px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{ marginBottom: "10px", color: "#00BFA6" }}>+400%</h3>
          <p>Рост продаж у новичков за 10 дней</p>
        </div>
        <div style={{ flex:1, background: "#FFFFFF", borderRadius: "20px", padding: "40px", width: "300px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          <h3 style={{ marginBottom: "10px", color: "#00BFA6" }}>+200%</h3>
          <p>Рост у опытных продавцов за месяц</p>
        </div>
      </div>
      <p style={{ marginTop:"40px", fontSize:"18px", color:"#555" }}>Примеры показывают, как быстро бот помогает стать лидером в карточках товаров.</p>
    </section>
  );
};

export default Results;
