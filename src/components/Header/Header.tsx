import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-wrap">
          <div className="logo">Salescout</div>
          <span className="logo-badge">бот для продавцов на Kaspi</span>
        </div>

        <nav className="nav">
          <a href="#how">Как работает</a>
          <a href="#results">Результаты</a>
          <a href="#tariffs">Тарифы</a>
          <a href="#try">Подключение</a>
        </nav>

        <a href="#try" className="header-cta">
          Подключить бота
        </a>
      </div>
    </header>
  );
};

export default Header;
