import React from "react";

const reviews = [
  { name: "Владислав", text: "Теперь мои продажи растут, а времени тратится меньше" },
  { name: "Зарина", text: "SaleScout помог выбрать правильные товары и заработать больше" },
  { name: "Нусыпбек", text: "Всё работает автоматически, экономия огромная" },
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="reviews">
      <h2>Отзывы</h2>
      {reviews.map((r, idx) => (
        <div key={idx} className="review">
          <h3>{r.name}</h3>
          <p>{r.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
