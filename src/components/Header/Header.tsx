import React from "react";

const Header: React.FC = () => {
  return (
    <header style={{ width: "100%", padding: "30px 80px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "fixed",top:"0", left:"0", background:"#faf5f5", borderBottom:"1px solid #faf5f5" }}>
      <div style={{ fontSize: "22px", fontWeight: 700, color: "#00BFA6" }}>SaleScout</div>
      <nav>
        <a href="#how" style={{ marginLeft: "30px", textDecoration: "none", color: "#1E1E1E", fontWeight: 500 }}>Как работает</a>
        <a href="#results" style={{ marginLeft: "30px", textDecoration: "none", color: "#1E1E1E", fontWeight: 500 }}>Результаты</a>
        <a href="#plans" style={{ marginLeft: "30px", textDecoration: "none", color: "#1E1E1E", fontWeight: 500 }}>Планы</a>
        <a href="#try" style={{ marginLeft: "30px", textDecoration: "none", color: "#1E1E1E", fontWeight: 500 }}>Попробовать</a>
      </nav>
    </header>
  );
};

export default Header;
