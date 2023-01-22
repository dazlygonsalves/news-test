import styles from "./Footer.module.scss";

const footerLinks = {
  NEWS: ["Featured News", "Latest News"],
  LIFE: [
    "Latest News",
    "Fashion",
    "Dining",
    "Recipes",
    "Art & Culture",
    "Travel",
    "Motoring",
  ],
  BUSINESS: [
    "Open House",
    "What does that even mean?",
    "Homegrown",
    "How do I...",
    "Bag off",
    "Where to spend it",
  ],
};

const bottomLinks = [
  "Magazine",
  "Contact",
  "About",
  "Press",
  "Sitemap",
  "CS+TS",
];

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.section_links}>
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index} className={styles.links}>
              <h4>{title}</h4>
              {links.map((link, index) => (
                <a key={`${link}${index}`}>{link}</a>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.section_subscribe}>
          <h4>SUBSCRIBE</h4>
          <h5>Get fresh updates about the fashion, beauty, trends</h5>
          <div className={styles.input_wrapper}>
            <input type="text" placeholder="Enter your email below" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className={styles.bottom_links}>
        {bottomLinks.map((link, index) => (
          <a key={`${link}${index}`}>{link}</a>
        ))}
      </div>
    </div>
  );
};
