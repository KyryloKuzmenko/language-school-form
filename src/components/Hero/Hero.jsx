import { NavLink, useNavigate } from 'react-router-dom';
import style from './Hero.module.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleJoinUsClick = () => {
    navigate('/register');
  }


  return (
    <section className={`${style.heroSection} container`}>
      <div className={style.wrapHero}>
        <div className={style.hero}>
          <NavLink className={style.linkJoinUs} to="/register">
            Join Us
          </NavLink>
          <h1 className={style.heroTitle}>HIGH QUALITY COURSES </h1>
          <div className={`${style.heroPictureContainer}`}>
            <img
              className={style.bground}
              src="/assets/img/background-removebg-preview.png"
              alt="background"
              width="350"
              height="300"
            />
            <img
              className={style.heroImg}
              srcSet="
                /assets/img/x2/girl-person@2x.png 2x,
                /assets/img/girl-person.png
                "
              src="/assets/img/girl-person.png"
              alt="Girl Photo"
            />
          </div>
          <p className={style.text}>
            Every day brings with it a fresh set of learning possibilities.
          </p>
          <div className={style.btnWrap}>
            <button className={style.joinUs} onClick={handleJoinUsClick}>Join Us</button>
            <button className={style.learnMore}>Learn More</button>
          </div>
        </div>
        <div className={style.heroPictureWrap}>
          <img
            className={`${style.bgroundPC}`}
            src="/assets/img/background-removebg-preview.png"
            alt="background"
            // width="570"
            // height="470"
          />
          <img
            className={style.heroImgPC}
            srcSet="
              /assets/img/x2/girl-person@2x.png 2x,
              /assets/img/girl-person.png
              "
            src="/assets/img/girl-person.png"
            alt="Girl Photo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
