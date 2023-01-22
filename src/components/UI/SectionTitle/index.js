import styles from "./index.module.scss";

export const SectionTitle = ({ children, color }) => {
  return (
    <div className={styles.wrapper} style={{ color }}>
      {children}
    </div>
  );
};
