import css from "./HeaderMenu.module.css"
import { useState } from "react";



const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  }

    return (
      <>
        {!isMenuOpen ? (
          <button className={css.menuButton} onClick={toggleMenu}>
            <svg className={css.menuOpenButtonSvg} width="28" height="28">
              <use href="/assets/icons/vectors.svg#icon-btn-burger-menu"></use>
            </svg>
          </button>
        ) : (
          <button className={css.closeButton} onClick={toggleMenu}>
            <svg className={`${css.closeModalIcon}`} width="38px" height="38px">
              <use href="/assets/icons/vectors.svg#icon-btn-close-modal"></use>
            </svg>
          </button>
        )}
        <div className={`${css.menu} ${isMenuOpen ? css.open : ''}`}
        onClick={handleBackDropClick}>
          <ul className={css.list}>
            <li className={css.listItem}>
              <a className={css.listLink} href="/">
                Home
              </a>
            </li>
            <li className={css.listItem}>
              <a className={css.listLink} href="product">
                Product
              </a>
            </li>
            <li className={css.listItem}>
              <a className={css.listLink} href="pricing">
                Pricing
              </a>
            </li>
            <li className={css.listItem}>
              <a className={css.listLink} href="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </>
    );
}

export default HeaderMenu;