import Addres from "../HeaderAddress/Address";
import css from "./Footer.module.css"


const Footer = () => {


    return (
        <footer className={css.footer}>
            <div className={css.wrap}>
                <Addres />
            </div>
        </footer>
    )
}


export default Footer;