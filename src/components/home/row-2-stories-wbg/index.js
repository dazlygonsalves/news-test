import { Badge } from "@components/UI/Badge";
import styles from "./index.module.scss";
import Flamingo from "@assets/row-2-stories-wbg/img-1.png";
import { SectionTitle } from "@components/UI/SectionTitle";

export const Row2StoriesWBg = () => {
  return (
    <>
      <SectionTitle color="#F0C0C1">1 row: 2 stories with bg</SectionTitle>
      <section>
        <div className={styles.wrapper}>
          <Badge>One story, Two perspectives</Badge>
          <div className={styles.content}>
            <div>
              <Badge>Half full</Badge>
              <h1>
                Louvre Abu Dhabi marks 4th anniversary with world class
                exhibition Louvre Abu Dhabi marks 4th
              </h1>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in odio vel.
              </h6>
            </div>
            <img src={Flamingo} className={styles.image} />
            <div>
              <Badge outlined>Half Empty</Badge>
              <h1>
                Louvre Abu Dhabi marks 4th anniversary with world class
                exhibition Louvre Abu Dhabi marks 4th
              </h1>
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in odio vel.
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
