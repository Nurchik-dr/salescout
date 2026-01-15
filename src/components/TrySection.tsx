import React from "react";

const TrySection: React.FC = () => {
  return (
    <section id="try" style={{ textAlign:"center", background:"#F8FCFB", padding:"120px 80px" }}>
      <h2 style={{ fontSize: "46px", marginBottom: "30px" }}>Проверь, сколько ты теряешь</h2>
      <p style={{ fontSize:"20px", color:"#444", marginBottom:"40px" }}>
        Подключи SaleScout, и твои товары снова будут первыми. Не трать время на ручное снижение цен — бот сделает всё за тебя.
      </p>
      <a href="https://salescout.me" style={{ background: "#00BFA6", color: "white", border: "none", padding: "18px 40px", fontSize: "18px", fontWeight: 600, borderRadius: "10px", cursor: "pointer", textDecoration: "none" }}>
        Попробовать бесплатно
      </a>
    </section>
  );
};

export default TrySection;
