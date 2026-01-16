import React from "react";
import { ArrowRight, TrendingUp, Store } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <div className="hero-row" style={{ marginBottom: 16 }}>
            <div className="hero-chip">Для продавцов Kaspi</div>
            <span className="hero-secondary">Работает 24/7</span>
          </div>

          <h1>Будь первым в карточке товара</h1>
          <p className="hero-subtitle">
            TopPrice следит за ценами конкурентов и снижает твою на выбранный шаг,
            чтобы покупатели выбирали тебя, а не других.
          </p>

          <div className="hero-row" style={{ marginTop: 10, gap: 16 }}>
            <a href="#try" className="btn">
              Попробовать бесплатно <ArrowRight size={16} />
            </a>
            <span className="hero-secondary">3 дня бесплатно</span>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-card">
            <div className="hero-card-header">
              <div style={{ display: "flex", gap: 8 }}>
                <div className="hero-avatar">
                  <Store size={14} />
                </div>
                <div>
                  <div className="hero-title">Магазин «Gadget Plus»</div>
                  <div className="hero-city">Kaspi · Алматы</div>
                </div>
              </div>
              <span className="hero-badge">Бот включён</span>
            </div>

            <div className="hero-row-stats">
              <div>
                <div className="hero-stat-label">Сейчас место</div>
                <div className="hero-rank">1 из 12</div>
              </div>
              <div>
                <div className="hero-stat-label">Цена</div>
                <div className="hero-price">18 979 ₸</div>
              </div>
              <div>
                <div className="hero-chip2">
                  <TrendingUp size={12} /> +243%
                </div>
              </div>
            </div>
          </div>

          <div className="hero-float">
            <div className="hero-dot" /> обновлено 3 минуты назад
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
