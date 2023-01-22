import styles from "./index.module.scss";
import Img1 from "@assets/row-3-video/img-1.png";
import Img2 from "@assets/row-3-video/img-2.png";
import Img3 from "@assets/row-3-video/img-3.png";
import PlayButtonImg from "@assets/row-3-video/play-button.png";
import { Badge } from "@components/UI/Badge";
import { SectionTitle } from "@components/UI/SectionTitle";

const data = [Img1, Img2, Img3];

export const Row3Video = () => {
  return (
    <>
      <SectionTitle color="#F0C0C1">1 row: 3 video</SectionTitle>
      <section>
        <div className={styles.wrapper}>
          {data.map((img, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.img}>
                <img src={img} alt="keto kebabs" />
                <PlayButton />
              </div>
              <Badge>eat</Badge>
              <p className={styles.description}>
                Meals on wheels: Meals on wheels: best in the UAE best
              </p>
              <div className={styles.footer}>U. R. Oliver</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const PlayButton = () => {
  return (
    <div className={styles.play_button}>
      <img src={PlayButtonImg} alt="play button" />
    </div>
  );
};
