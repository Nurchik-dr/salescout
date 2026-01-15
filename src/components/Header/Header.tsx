import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [active, setActive] = useState<string>(""); // активная секция
  const [scrolled, setScrolled] = useState(false);

  // отслеживаем скролл для тени
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { id: "how", label: "Как работает" },
    { id: "results", label: "Результаты" },
    { id: "plans", label: "Планы" },
    { id: "try", label: "Попробовать" },
  ];

  return (
    <header
      style={{
        width: "100%",
        padding: "20px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        background: scrolled ? "#ffffff" : "linear-gradient(to right, #E0F4F2, #FFFFFF)",
        boxShadow: scrolled ? "0 4px 10px rgba(0,0,0,0.1)" : "none",
        transition: "all 0.3s ease",
        zIndex: 1000,
      }}
    >
      <div style={{ fontSize: "24px", fontWeight: 700, color: "#00BFA6", cursor: "pointer" }}>
        SaleScout
      </div>

      <nav style={{ display: "flex", gap: "30px" }}>
        {menu.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActive(item.id)}
            style={{
              textDecoration: "none",
              color: active === item.id ? "#00BFA6" : "#1E1E1E",
              fontWeight: 500,
              padding: "8px 12px",
              borderRadius: "8px",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#E7F4F2";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
