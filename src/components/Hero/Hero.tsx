import React from "react";

const Hero: React.FC = () => {
  return (
    <section style={{ padding: "120px 80px", background: "linear-gradient(120deg, #E0F4F2 0%, #FFFFFF 100%)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "56px", fontWeight: 800, marginBottom: "20px", color: "#1E1E1E", textShadow: "1px 1px 2px rgba(0,0,0,0.05)" }}>
          Продай больше — без лишних движений
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "700px", marginBottom: "40px", color: "#444" }}>
          SaleScout помогает твоему магазину на Kaspi быть первым. Бот следит за ценами, сравнивает с конкурентами и корректирует их сам — 24/7 без твоих усилий.
        </p>
        <a href="https://salescout.me" style={{ background: "#00BFA6", color: "white", border: "none", padding: "18px 50px", fontSize: "18px", fontWeight: 600, borderRadius: "12px", cursor: "pointer", textDecoration: "none", transition: "all 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0px)")}
        >
          Попробовать бесплатно
        </a>
      </div>
    </section>
  );
};

export default Hero;
