import styles from "./index.module.scss";
import { Badge } from "@components/UI/Badge";
import Img1 from "@assets/hero/img-1.png";
import Img2 from "@assets/hero/img-2.png";
import Img3 from "@assets/hero/img-3.png";

const data = [
  {
    title:
      "Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum.",
    tag: "Travel",
    footer: "U. R. Oliver",
    imageUrl: Img1,
  },
  {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.",
    description: "Test",
    tag: "Open House",
    footer: "U. R. Oliver",
  },
  {
    title:
      "Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis.",
    description: "Test",
    tag: "Dine",
    footer: "U. R. Oliver",
  },
  {
    title: "Meals on wheels best food trucks in the UAE",
    description: "Test",
    tag: "Dine",
    footer: "U. R. Oliver",
    imageUrl: Img2,
  },
  {
    title:
      "UAE: CBSE Term 1 exams begin tomorrow; important guidelines announced",
    description: "Test",
    tag: "Open House",
    footer: "U. R. Oliver",
    imageUrl: Img3,
  },

  {
    title:
      "World Expo in Dubai: MP delegation holds discussion over film city and institute",
    description: "Test",
    tag: "Dine",
    footer: "U. R. Oliver",
  },

  {
    title: "Meals on wheels best food trucks in the UAE",
    description: "Test",
    tag: "Dine",
    footer: "U. R. Oliver",
  },
];

export const Hero = () => {
  const firstArticle = data[0];
  const restArticles = data.slice(1);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.large_article}>
          <Badge>{firstArticle.tag}</Badge>
          <h1>{firstArticle.title}</h1>
          <h3>{firstArticle.description}</h3>
          <h6>{firstArticle.footer}</h6>
          <img src={firstArticle.imageUrl} alt="" />
        </div>
        <div className={styles.article_grid}>
          {restArticles.map((article, index) => {
            return (
              <div key={index} className={styles.small_article}>
                {article.imageUrl && <img src={article.imageUrl} alt="" />}
                <Badge>{article.tag}</Badge>
                <h3>{article.title}</h3>
                <h6>{article.footer}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
