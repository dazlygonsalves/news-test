import styles from "./index.module.scss";
import Img1 from "@assets/row-4-reviews/img-1.png";
import Img2 from "@assets/row-4-reviews/img-2.png";
import Img3 from "@assets/row-4-reviews/img-3.png";
import Img4 from "@assets/row-4-reviews/img-4.png";
import ReviewStarLight from "@assets/row-4-reviews/review-star-light.png";
import ReviewStarDark from "@assets/row-4-reviews/review-star-dark.png";
import { Badge } from "@components/UI/Badge";
import { SectionTitle } from "@components/UI/SectionTitle";
import { useTheme } from "@providers/ThemeProvider";

const data = [Img1, Img2, Img3, Img4];

export const Row4Reviews = () => {
  const { theme } = useTheme();

  return (
    <>
      <SectionTitle color="#74BDB1">1 row: 4 reviews</SectionTitle>
      <section>
        <div className={styles.wrapper}>
          {data.map((img, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.img}>
                <img src={img} alt="keto kebabs" />
                <Badge className={styles.badge}>
                  {theme === "light" ? (
                    <img src={ReviewStarLight} alt="review star" />
                  ) : (
                    <img src={ReviewStarDark} alt="review star" />
                  )}
                  4.4
                </Badge>
              </div>
              <Badge>eat</Badge>
              <p className={styles.description}>
                Meals on wheels: Meals on wheels: best in the UAE best in Meals
                on wheels: best in
              </p>
              <div className={styles.footer}>U. R. Oliver</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
