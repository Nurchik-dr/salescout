import React from "react";

const CTA: React.FC = () => {
    return (
        <section id="cta" className="cta">
            <h2>Хочешь управлять продажами осознанно?</h2>
            <p>Подключи SaleScout и получай выгоду от данных, а не от скидок.</p>
            <div>
                <a href="#" className="btn">Попробовать бесплатно</a>
                <a href="#" className="btn" style={{ marginLeft: "10px", background: "#fff", color: "#1e6dff", border: "1px solid #1e6dff" }}>
                    Получить консультацию
                </a>
            </div>

        </section>
    );
};

export default CTA;
