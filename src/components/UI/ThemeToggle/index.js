import { useTheme } from "@providers/ThemeProvider";
import styles from "./index.module.scss";

export const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={styles.circle} onClick={toggleTheme}>
      <div className={styles.shape} />
    </div>
  );
};
