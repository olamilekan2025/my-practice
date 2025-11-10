import React from "react";
import "./Menu.css";
import { DUMMY_MENU } from "../../Dummy_product/menuStyle";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1>menu</h1>
      <div className="menu-container">
        {DUMMY_MENU.map((item) => (
          <Link to={`menu/${item.id}`} key={item.id} className="menu-items">
            <div className="menu-img">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <h2>{item.name}</h2>
            <p>#{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
