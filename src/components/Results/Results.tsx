import React from "react";
import { BarChart3 } from "lucide-react";

const Results: React.FC = () => {
  return (
    <section id="results">
      <div className="container">
        <div className="section-header">
          <h2>Результаты магазинов</h2>
          <p>
            Когда товар стоит первым в списке продавцов, его покупают чаще.
            После подключения TopPrice магазины видят рост уже в первый месяц.
          </p>
        </div>

        <div className="grid">
          <div className="card">
            <div className="card-header">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  background: "rgba(15,23,42,0.9)",
                  border: "1px solid rgba(148,163,184,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BarChart3 size={18} />
              </div>
              <h3>Новички на Kaspi</h3>
            </div>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#bbf7d0" }}>
              +400% заказов
            </p>
            <p>За первые 10 дней после включения сервиса.</p>
          </div>

          <div className="card">
            <div className="card-header">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  background: "rgba(15,23,42,0.9)",
                  border: "1px solid rgba(148,163,184,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BarChart3 size={18} />
              </div>
              <h3>Опытные магазины</h3>
            </div>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#bbf7d0" }}>
              +200% заказов
            </p>
            <p>За первый месяц работы с TopPrice.</p>
          </div>
        </div>

        <p
          style={{
            marginTop: 14,
            fontSize: 12,
            color: "#6b7280",
          }}
        >
          Цифры основаны на результатах реальных магазинов. Они зависят от
          категории товара и конкуренции.
        </p>
      </div>
    </section>
  );
};

export default Results;
