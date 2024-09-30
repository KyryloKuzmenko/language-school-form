import css from './Header.module.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import JoinUs from '../JoinUs/JoinUs';
const Header = () => {

  return (
    <>
      <header className={css.header}>
        <div className={`${css.headerWrap} container`}>
          <span className={css.brand}>
            <a href="/">
              <img src="/assets/icons/image2vector.svg" alt="" width="50"/>
            </a>
          </span>
          <nav className={css.navigate}>
            <HeaderMenu className={css.headerMenu} />
          </nav>
          <JoinUs />
        </div>
      </header>
    </>
  );
};

export default Header;
