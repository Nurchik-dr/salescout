import React from "react";
import { ArrowRight, TrendingUp, Store } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <div className="hero-row" style={{ marginBottom: 16 }}>
            <div className="hero-chip">Сервис для продавцов Kaspi</div>
            <span className="hero-secondary">
              Подходит новичкам и опытным магазинам
            </span>
          </div>

          <h1>Будь первым в карточке товара — забирай все заказы</h1>

          <p className="hero-subtitle">
            TopPrice следит за ценами конкурентов каждые несколько минут и
            аккуратно снижает твою цену. Твой товар поднимается выше, и
            покупают у тебя, а не у соседнего магазина.
          </p>

          <div className="hero-row" style={{ marginTop: 8, gap: 16 }}>
            <a href="#try" className="btn">
              Попробовать бесплатно
              <ArrowRight size={16} />
            </a>
            <span className="hero-secondary">
              3 дня бесплатно, без карты и без обязательств
            </span>
          </div>
        </div>

        <div className="hero-side">
          <div className="hero-card">
            <div className="hero-card-header">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    background: "rgba(15,23,42,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(148,163,184,0.5)",
                  }}
                >
                  <Store size={16} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "#e5e7eb" }}>
                    Магазин «Gadget Plus»
                  </div>
                  <div className="hero-city">Kaspi · Алматы</div>
                </div>
              </div>
              <span className="hero-badge">Автоценник включён</span>
            </div>

            <div
              style={{
                fontSize: 12,
                color: "#9ca3af",
                marginBottom: 8,
              }}
            >
              Карточка товара · Смартфон
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 10,
              }}
            >
              <span className="hero-stat-pill">
                Был на 7 месте · 18 990 ₸
              </span>
            </div>

            <div className="hero-row-stats">
              <div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>
                  Сейчас место
                </div>
                <div className="hero-rank">1 из 12</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>
                  Цена после TopPrice
                </div>
                <div style={{ fontSize: 14, color: "#e5e7eb" }}>18 979 ₸</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "3px 8px",
                    borderRadius: 999,
                    background: "var(--accent-soft)",
                    color: "#bbf7d0",
                    fontSize: 11,
                  }}
                >
                  <TrendingUp size={14} />
                  +243% заказов
                </div>
              </div>
            </div>
          </div>

          <div className="hero-float">
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#22c55e",
              }}
            />
            <span>TopPrice обновил цены 3 минуты назад</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
