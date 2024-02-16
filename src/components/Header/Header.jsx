import "./Header.scss";

import { Link, useLocation } from "react-router-dom";
import React from "react";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="header__navigation">
        <Link to={`/`} className="header__logo">
          <img className="header__image" alt="dating wrapped logo" src="" />
        </Link>
        <ul className="header__menu">
          <li className="header__item">
            <Link to={`warehouses`} className="header__link">
              <button
                type="submit"
                className={
                  "header__button " +
                  (location.pathname === "/warehouses" ? "active" : "")
                }
              >
                Sign In
              </button>
            </Link>
          </li>
          <li className="header__item">
            <Link to={`inventories`} className="header__link">
              <button
                type="submit"
                className={
                  "header__button " +
                  (location.pathname === "/inventories" ? "active" : "")
                }
              >
                Register
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
