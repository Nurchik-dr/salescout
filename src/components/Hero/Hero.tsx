import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{marginTop: 80}}>
      <div className="container">
        <h1>Будь первым на Kaspi</h1>
        <p>
          TopPrice проверяет цены конкурентов каждые 3 минуты и ставит твой товар первым в списке. 
          Ты получаешь больше заказов — без ручного труда.
        </p>
        <a href="#" className="btn">Попробовать бесплатно</a>
      </div>
    </section>
  );
};

export default Hero;
