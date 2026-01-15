import React from "react";

const Hero: React.FC = () => {
  return (
    <section style={{ padding: "120px 80px", background: "linear-gradient(120deg, #E7F4F2 0%, #FFFFFF 100%)" }}>
      <h1 style={{ fontSize: "56px", fontWeight: 800, marginBottom: "20px" }}>Продай больше — без лишних движений</h1>
      <p style={{ fontSize: "20px", maxWidth: "700px", marginBottom: "40px", color: "#444" }}>
        SaleScout помогает магазинам на Kaspi, Jmart и Halyk Market быть первыми и зарабатывать больше. Бот следит за ценами, сравнивает с конкурентами и корректирует их сам — всё работает 24/7 без твоих усилий.
      </p>
      <a href="https://salescout.me" style={{ background: "#00BFA6", color: "white", border: "none", padding: "18px 40px", fontSize: "18px", fontWeight: 600, borderRadius: "10px", cursor: "pointer", textDecoration: "none" }}>
        Попробовать бесплатно
      </a>
    </section>
  );
};

export default Hero;
