import Img1 from "@assets/rows-1x3/img-1.png";
import Img2 from "@assets/rows-1x3/img-2.png";
import Img3 from "@assets/rows-1x3/img-3.png";
import Img4 from "@assets/rows-1x3/img-4.png";
import styles from "./index.module.scss";
import { Badge } from "@components/UI/Badge";
import { SectionTitle } from "@components/UI/SectionTitle";

const data = [
  {
    image: Img1,
    title:
      "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
    footer: "Cvita Doleschall",
    badge: "Travel",
    description:
      "Exhin imlave asfear asfasas afsfeaarsa asfasfasf asfasfa ten cultable doice inverum",
  },
  {
    image: Img2,
    title: "Meals on wheels best food trucks in the UAE",
    footer: "U. R. Oliver",
    badge: "Culture",
  },
  {
    image: Img3,
    title: "Meals on wheels best food trucks in the UAE",
    footer: "U. R. Oliver",
    badge: "Culture",
  },
  {
    image: Img4,
    title: "Meals on wheels best food trucks in the UAE",
    footer: "U. R. Oliver",
    badge: "Culture",
  },
];

export const Rows1x3 = () => {
  const firstArticle = data[0];
  const restArticles = data.slice(1);

  return (
    <>
      <SectionTitle color="#F0C0C1">2 rows: 1 x 3</SectionTitle>
      <section>
        <div className={styles.hero}>
          <img src={firstArticle.image} alt={firstArticle.title} />
          <div className={styles.hero_content}>
            <Badge>{firstArticle.badge}</Badge>
            <h3 className={styles.hero_title}>{firstArticle.title}</h3>
            <p className={styles.hero_description}>
              {firstArticle.description}
            </p>
            <p className={styles.hero_footer}>{firstArticle.footer}</p>
          </div>
        </div>
        <div className={styles.grid}>
          {restArticles.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.card_img}
                />
                <div className={styles.card_content}>
                  <Badge>{item.badge}</Badge>
                  <p className={styles.card_title}>{item.title}</p>
                  <p className={styles.card_footer}>{item.footer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
