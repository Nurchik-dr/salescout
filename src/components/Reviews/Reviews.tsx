import "./Reviews.css";

const data = [
  {
    name: "Магазин A",
    text: "С ботом стоим постоянно в топ-3, вручную вообще не трогаем.",
    rating: 5,
    badge: "Kaspi",
    avatar: "",
    time: "2 месяца назад",
  },
  {
    name: "Магазин B",
    text: "Экономия кучи времени. Заказы реально растут.",
    rating: 5,
    badge: "Kaspi",
    avatar: "",
    time: "1 месяц назад",
  },
  {
    name: "Магазин C",
    text: "Не лезет в деньги, только цены меняет — это плюс.",
    rating: 4,
    badge: "Kaspi",
    avatar: "",
    time: "3 недели назад",
  },
];

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-head">
        <span className="section-kicker">Отзывы</span>
        <h2>Что говорят продавцы на Kaspi</h2>
        <p>Без воды — как это влияет на выдачу и заказы в реальности.</p>
      </div>

      <div className="reviews-grid">
        {data.map((item, i) => (
          <div key={i} className="review-card">
            <div className="review-top">
              <div className="review-user">
                <div className="review-avatar" />
                <div className="review-name">{item.name}</div>
              </div>
              <div className="review-badge">{item.badge}</div>
            </div>

            <div className="review-rating">
              {Array.from({ length: item.rating }).map((_, idx) => (
                <span key={idx}>★</span>
              ))}
            </div>

            <div className="review-text">{item.text}</div>

            <div className="review-footer">{item.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
