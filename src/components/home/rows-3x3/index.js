import ChadMontano from "@assets/rows-3x3/chad-montano.png";
import ChrisATweten from "@assets/rows-3x3/chris-a-tweten.png";
import ClarkDouglas from "@assets/rows-3x3/clark-douglas.png";
import EvanWise from "@assets/rows-3x3/evan-wise.png";
import ShannonNickerson from "@assets/rows-3x3/shannon-nickerson.png";
import YoavAziz from "@assets/rows-3x3/yoav-aziz.png";
import styles from "./index.module.scss";
import { Badge } from "@components/UI/Badge";
import { SectionTitle } from "@components/UI/SectionTitle";

const data = [
  {
    title: "keto kebabs",
    image: ChadMontano,
    description: "Meals on wheels best food trucks in the UAE",
    footer: "U. R. Oliver",
  },
  {
    title: "italian deserts",
    image: ChrisATweten,
    description: "Meals on wheels best food trucks in the UAE",
    footer: "U. R. Oliver",
  },
  {
    title: "japanese flavors",
    image: ClarkDouglas,
    description: "Meals on wheels best food trucks in the UAE",
    footer: "U. R. Oliver",
  },
  {
    title: "vegan meals",
    image: EvanWise,
    description: "Meals on wheels best food trucks in the UAE",
    footer: "U. R. Oliver",
  },
  {
    title: "french pasta",
    image: ShannonNickerson,
    description: "Meals on wheels best food trucks in the UAE",
    footer: "U. R. Oliver",
  },
  {
    title: "korean bbq",
    image: YoavAziz,
    description: "Meals on wheels best food trucks in the UAE",
    footer: "U. R. Oliver",
  },
];

export const Rows3X3 = () => {
  return (
    <>
      <SectionTitle color="#DD6849">2 rows: 3 x 3</SectionTitle>
      <section>
        <div className={styles.grid}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.card}>
                <img src={item.image} alt={item.title} className={styles.img} />
                <div className={styles.content}>
                  <Badge>{item.title}</Badge>
                  <p className={styles.description}>{item.description}</p>
                  <p className={styles.footer}>{item.footer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
