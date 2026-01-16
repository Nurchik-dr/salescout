import React from "react";
import { Clock } from "lucide-react";

const TrySection: React.FC = () => {
  return (
    <section id="try">
      <div className="container">
        <div className="try-box">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Clock size={18} />
            <span
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
              }}
            >
              Тест 3 дня
            </span>
          </div>
          <h2 style={{ marginBottom: 4 }}>Проверь, сколько ты теряешь</h2>
          <p>
            Если ты не первый в списке продавцов, покупатели уходят к другим.
            Подключи TopPrice на пару дней и сравни количество заказов.
          </p>
          <button className="btn">Попробовать бесплатно</button>
        </div>
      </div>
    </section>
  );
};

export default TrySection;
