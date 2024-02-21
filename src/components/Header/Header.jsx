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
            <Link to={`new-date-form`} className="header__link">
              <button
                type="submit"
                className={
                  "header__button " +
                  (location.pathname === "/new-date-form" ? "active" : "")
                }
              >
                New Form
              </button>
            </Link>
          </li>
          <li className="header__item">
            <Link to={`past-dates`} className="header__link">
              <button
                type="submit"
                className={
                  "header__button " +
                  (location.pathname === "/past-dates" ? "active" : "")
                }
              >
                Past Dates
              </button>
            </Link>
          </li>
          <li className="header__item">
            <Link to={`/`} className="header__link">
              <button
                type="submit"
                className={
                  "header__button " +
                  (location.pathname === "/" ? "active" : "")
                }
              >
                Sign Out
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
