import React from "react";
import { BarChart3 } from "lucide-react";

const Results: React.FC = () => {
  return (
    <section id="results">
      <div className="container">
        <h2>Результаты магазинов</h2>
        <p className="section-sub">
          Когда товар стоит первым — его покупают чаще. Это видят и новички, и
          опытные продавцы.
        </p>

        <div className="grid">
          <div className="card">
            <div className="card-header">
              <div className="icon-wrapper">
                <BarChart3 size={18} />
              </div>
              <h3>Новички</h3>
            </div>
            <p className="card-metric">+400% заказов</p>
            <p>За первые 10 дней использования.</p>
          </div>

          <div className="card">
            <div className="card-header">
              <div className="icon-wrapper">
                <BarChart3 size={18} />
              </div>
              <h3>Опытные магазины</h3>
            </div>
            <p className="card-metric">+200% заказов</p>
            <p>За первый месяц работы.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
