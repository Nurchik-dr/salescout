import React from "react";
import { Search, ArrowDown, Trophy, ShoppingCart } from "lucide-react";

const How: React.FC = () => {
  const steps = [
    {
      icon: <Search size={22} />,
      title: "Смотрим цены",
      text: "TopPrice проверяет цены у продавцов в карточке товара.",
    },
    {
      icon: <ArrowDown size={22} />,
      title: "Снижаем аккуратно",
      text: "Если ты не первый — снижаем цену чуть ниже конкурента.",
    },
    {
      icon: <Trophy size={22} />,
      title: "Ты снова первый",
      text: "Твой магазин поднимается в самый верх списка продавцов.",
    },
    {
      icon: <ShoppingCart size={22} />,
      title: "Забираешь заказы",
      text: "Покупатели чаще выбирают первого — заказы идут к тебе.",
    },
  ];

  return (
    <section id="how">
      <div className="container">
        <div className="section-header">
          <h2>Как работает TopPrice</h2>
          <p>
            Никакой магии. Просто вместо живого менеджера следим за карточкой
            товара и ценой — только быстрее и без выходных.
          </p>
        </div>

        <div className="grid grid-3">
          {steps.map((step, idx) => (
            <div key={idx} className="card">
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
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
              </div>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
