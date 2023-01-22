import styles from "./index.module.scss";

export const Badge = ({ children, className, outlined = false }) => {
  return (
    <div
      className={`${styles.badge} ${className} ${outlined && styles.outlined}`}
    >
      {children}
    </div>
  );
};
