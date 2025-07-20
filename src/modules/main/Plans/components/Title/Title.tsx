import styles from "./Title.module.scss";

export const Title = () => {
  return (
    <div className={styles.title}>
      <p className={styles.titlePref}>Our Pricing</p>
      <h2 className={styles.titleTitle}>Choose Your Plan</h2>
    </div>
  );
};
