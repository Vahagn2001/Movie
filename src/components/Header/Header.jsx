import { Outlet } from "react-router";
import "../Header/header.css";

export const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="nav">
            <ul className="nav__list">
              <li><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="header__image" /></li>
              <li className="nav__list">Movies</li>
              <li className="nav__list">TV Shows</li>
              <li className="nav__list">People</li>
              <li className="nav__list">More</li>
            </ul>
            <ul className="nav__list">
              <li className="nav__list">+</li>
              <li className="nav__list">EN</li>
              <li className="nav__list">Login</li>
              <li className="nav__list">Join TMDB</li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
