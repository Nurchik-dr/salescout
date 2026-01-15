import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">ScoutNur</div>
      <nav>
        <a href="#how">Как это работает</a>
        <a href="#tariffs">Тарифы</a>
        <a href="#reviews">Отзывы</a>
        <a href="#cta">Контакты</a>
        <a href="#" className="btn">Попробовать бесплатно</a>
      </nav>
    </header>
  );
};

export default Header;
