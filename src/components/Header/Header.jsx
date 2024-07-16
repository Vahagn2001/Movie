import { Outlet } from "react-router";
import style from "./Header.module.css";
import style2 from "../SearchList/Index.module.css";

export const Header = () => {
  return (
    <>
      <header>
        <div className={style2.container}>
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              <li>
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="header__image"
                />
              </li>
              <li className={style.nav__listItem}>Movies</li>
              <li className={style.nav__listItem}>TV Shows</li>
              <li className={style.nav__listItem}>People</li>
              <li className={style.nav__listItem}>More</li>
            </ul>
            <ul className={style.nav__list}>
              <li className={style.nav__listItem}>+</li>
              <li className={style.nav__listItem}>EN</li>
              <li className={style.nav__listItem}>Login</li>
              <li className={style.nav__listItem}>Join TMDB</li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
