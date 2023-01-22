import Flamingo from "@assets/full-width-article/flamingo.png";
import { SectionTitle } from "@components/UI/SectionTitle";
import styles from "./index.module.scss";

export const FullWidthArticle = () => {
  return (
    <>
      <SectionTitle color="#DD6849">1 full width article</SectionTitle>
      <section>
        <div className={styles.wrapper}>
          <img src={Flamingo} alt="keto kebabs" className={styles.img} />
          <div className={styles.gradient} />
          <div className={styles.badge}>Long Read</div>
          <div className={styles.content}>
            <div className={styles.title}>Meals on wheels: best in the UAE</div>
            <div className={styles.description}>
              Louvre Abu Dhabi marks 4th anniversary with world class exhibition
              Louvre Abu Dhabi marks 4th anniversary with world class
              exhibitions, programming for all
            </div>
            <div className={styles.footer}>A. R. Oliver</div>
          </div>
        </div>
      </section>
    </>
  );
};
