import React, { useState } from "react";

const Header: React.FC = () => {
  const [active, setActive] = useState("");

  const menu = [
    { id: "how", label: "Как работает" },
    { id: "results", label: "Результаты" },
    { id: "tariffs", label: "Тарифы" },
    { id: "try", label: "Попробовать" },
  ];

  return (
    <header>
      <div className="container header-inner">
        <div className="logo">
          TopPrice<span className="logo-dot" />
        </div>
        <nav className="header-nav">
          {menu.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
