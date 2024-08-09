import { Outlet } from "react-router";
import style from "./Header.module.css";
import style2 from "../SearchList/Index.module.css";
import { changeLanguage } from "i18next";
import { useTranslation } from 'react-i18next';



export const Header = () => {
  
 const onLngChange=(e)=>changeLanguage(e.target.value)
const { t, i18n } = useTranslation();


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
              <li className={style.nav__listItem}>{t("Movies")}</li>
              <li className={style.nav__listItem}>TV Shows</li>
              <li className={style.nav__listItem}>{t("People")}</li>
              <li className={style.nav__listItem}>{t("More")}</li>
            </ul>
            <ul className={style.nav__list}>
              <li className={style.nav__listItem}>+</li>
              <li className={style.nav__listItem}>
                <select name="" id="" onChange={onLngChange}>
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                  <option value="arm">Армянский</option>
                </select>
              </li>
              <li className={style.nav__listItem}>{t("Login")}</li>
              <li className={style.nav__listItem}>{t("Join")} TMDB</li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
