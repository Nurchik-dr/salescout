import React from "react";

const How: React.FC = () => {
  const steps = [
    { title: "1. Бот проверяет конкурентов", text: "Каждые 3 минуты бот проверяет цены у других продавцов и определяет, кто первый.", icon: "👀" },
    { title: "2. Сам снижает цену", text: "Если твой товар не первый, бот аккуратно снижает цену на 1₸.", icon: "⚡" },
    { title: "3. Магазин снова на первом месте", text: "Твои товары поднимаются вверх, получают больше заказов, а ты экономишь время.", icon: "🏆" },
  ];

  return (
    <section id="how" style={{ padding:"100px 80px" }}>
      <h2 style={{ fontSize:"42px", textAlign:"center", marginBottom:"60px" }}>Как это работает</h2>
      <div style={{ display:"flex", gap:"40px", justifyContent:"space-between" }}>
        {steps.map((s, idx) => (
          <div key={idx} style={{ flex:1, background:"#F8FCFB", padding:"40px", borderRadius:"20px", textAlign:"center",cursor:"pointer", boxShadow:"0 4px 15px rgba(0,0,0,0.08)", transition:"transform 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.transform="translateY(-5px)")}
            onMouseLeave={e => (e.currentTarget.style.transform="translateY(0px)")}
          >
            <div style={{ fontSize:"50px", marginBottom:"15px", cursor:"pointer" }}>{s.icon}</div>
            <h3 style={{ marginBottom:"15px", color:"#00BFA6" }}>{s.title}</h3>
            <p style={{ color:"#444" }}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default How;
