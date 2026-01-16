import React from "react";
import { Search, ArrowDown, Trophy, ShoppingCart } from "lucide-react";

const How: React.FC = () => {
  const steps = [
    {
      icon: <Search size={20} />,
      title: "Смотрим цены",
      text: "TopPrice проверяет цены продавцов в карточке товара.",
    },
    {
      icon: <ArrowDown size={20} />,
      title: "Снижаем цену",
      text: "Если ты не первый — снижаем на выбранный шаг ниже конкурента.",
    },
    {
      icon: <Trophy size={20} />,
      title: "Ты снова первый",
      text: "Твой товар поднимается в самый верх списка.",
    },
    {
      icon: <ShoppingCart size={20} />,
      title: "Ты забираешь заказы",
      text: "Первый продавец получает большую часть покупок.",
    },
  ];

  return (
    <section id="how">
      <div className="container">
        <h2>Как работает TopPrice</h2>
        <p className="section-sub">
          Без магии и лишних слов. Мы делаем то, что обычно делает менеджер —
          только быстрее и точнее.
        </p>

        <div className="grid grid-3">
          {steps.map((s, idx) => (
            <div key={idx} className="card">
              <div className="card-header">
                <div className="icon-wrapper">{s.icon}</div>
                <h3>{s.title}</h3>
              </div>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
