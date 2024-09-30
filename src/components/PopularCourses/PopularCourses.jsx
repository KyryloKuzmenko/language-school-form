import css from './PopularCourses.module.css';

const PopularCourses = () => {
  return (
    <section className={`${css.popularCoursesSection} container`}>
      <div className={css.wrap}>
        <h2 className={css.title}>Most Popular Courses</h2>
        <ul className={css.courseList}>
          <li className={css.course}>
            <a className={css.linkCourse} href="#">
              <div className={css.box}>
                <svg className={`${css.iconLang}`} width="48px" height="48px">
                  <use href="/assets/icons/vectors.svg#icon-germany"></use>
                </svg>
                <h3 className={css.courseTitle}>Course1</h3>
                <span className={css.line}></span>
                <p className={css.text}>
                  The gradual accumulation and small-scale..
                </p>
              </div>
            </a>
          </li>
          <li className={css.course}>
            <a className={css.linkCourse} href="#">
              <div className={css.box}>
                <svg className={`${css.iconLang}`} width="48px" height="48px">
                  <use href="/assets/icons/vectors.svg#icon-ukraine"></use>
                </svg>
                <h3 className={css.courseTitle}>Course2</h3>
                <span className={css.line}></span>
                <p className={css.text}>
                  The gradual accumulation and small-scale..
                </p>
              </div>
            </a>
          </li>
          <li className={css.course}>
            <a className={css.linkCourse} href="#">
              <div className={css.box}>
                <svg className={`${css.iconLang}`} width="48px" height="48px">
                  <use href="/assets/icons/vectors.svg#icon-france"></use>
                </svg>
                <h3 className={css.courseTitle}>Course3</h3>
                <span className={css.line}></span>
                <p className={css.text}>
                  The gradual accumulation and small-scale..
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PopularCourses;
