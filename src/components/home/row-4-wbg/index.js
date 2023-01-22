import LilLarry from "@assets/row-4-wbg/lil-larry.png";
import LubnaHamdan from "@assets/row-4-wbg/lubna-hamdan.png";
import OmarMukhtar from "@assets/row-4-wbg/omar-mukhtar.png";
import ShawnJohn from "@assets/row-4-wbg/shawn-jhon.png";
import { Badge } from "@components/UI/Badge";
import { SectionTitle } from "@components/UI/SectionTitle";
import styles from "./index.module.scss";

const data = [
  {
    img: OmarMukhtar,
    name: "omar mukhtar",
  },
  {
    img: LilLarry,
    name: "lil larry",
  },
  {
    img: LubnaHamdan,
    name: "lubna hamdan",
  },
  {
    img: ShawnJohn,
    name: "shawn jhon",
  },
];

export const Row4WBg = () => {
  return (
    <>
      <SectionTitle color="#74BDB1">1 row: 4 with bg</SectionTitle>
      <section>
        <div className={styles.grid}>
          {data.map((person, index) => (
            <div key={index} className={styles.card}>
              <img src={person.img} alt="keto kebabs" className="img" />
              <Badge>{person.name}</Badge>
              <p className={styles.description}>
                Meals on wheels: Meals on wheels: best in the UAE best in Meals
                on wheels: best in
              </p>
              <p className={styles.footer}>U. R. Oliver</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
