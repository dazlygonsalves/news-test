import Img1 from "@assets/row-5-circles-bg/img-1.png";
import Img2 from "@assets/row-5-circles-bg/img-2.png";
import Img3 from "@assets/row-5-circles-bg/img-3.png";
import Img4 from "@assets/row-5-circles-bg/img-4.png";
import Img5 from "@assets/row-5-circles-bg/img-5.png";
import { Badge } from "@components/UI/Badge";
import { SectionTitle } from "@components/UI/SectionTitle";
import styles from "./index.module.scss";

const data = [Img1, Img2, Img3, Img4, Img5];

export const Row5CirclesWBg = () => {
  return (
    <>
      <SectionTitle color="#EDC47F">1 row: 5 circles with bg</SectionTitle>
      <section>
        <div className={styles.wrapper}>
          {data.map((img, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.index}>{index + 1}</span>
              <img src={img} alt="keto kebabs" className={styles.img} />
              <Badge>Vladimir Putin</Badge>
              <p className={styles.description}>
                Meals on wheels best in the UAE
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
