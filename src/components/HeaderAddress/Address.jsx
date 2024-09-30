import css from "./Address.module.css"

const Addres = () => {

    return (
      <address className={`${css.address} container`}>
        <ul className={css.listAddress}>
          <li className={css.listAddressItem}>
            <a className={css.addresLink} href="mailto:info@devstudio.com">
              info@devstudio.com
            </a>
          </li>
          <li>
            <a className={css.addressLink} href="tel:+110001111111">
              +11 (000) 111-11-11
            </a>
          </li>
        </ul>
      </address>
    );
}

export default Addres;