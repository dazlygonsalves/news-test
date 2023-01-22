import Img1 from "@assets/row-2x1-inverted/img-1.png";
import Img2 from "@assets/row-2x1-inverted/img-2.png";
import Img3 from "@assets/row-2x1-inverted/img-3.png";
import styles from "./index.module.scss";
import { Badge } from "@components/UI/Badge";
import { SectionTitle } from "@components/UI/SectionTitle";

const images = [Img1, Img2, Img3];

export const Row2X1Inverted = () => {
  return (
    <>
      <SectionTitle color="#EDC47F">1 row: 2 x 1 inverted</SectionTitle>
      <section>
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={index} className={styles.card}>
              <img src={img} className={styles.img} />
              <div className={styles.content}>
                <Badge>OPEN HOUSE</Badge>
                <span className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus in odio vel.
                </span>
                <span className={styles.footer}>U. R. Oliver</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
