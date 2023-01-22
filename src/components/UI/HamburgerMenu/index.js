import styles from "./index.module.scss";

export const HamburgerMenu = () => {
  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.hamburgerMenu_line} />
      <div className={styles.hamburgerMenu_line} />
      <div className={styles.hamburgerMenu_line} />
    </div>
  );
};
