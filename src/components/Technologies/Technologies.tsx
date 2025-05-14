import styles from "./Technologies.module.scss";
import { Tags } from "../Tags/Tags";

export const Technologies = () => {
  return (
    <section id="technologies" className={styles.techSection}>
      <div className={styles.titleBlock}>
        <p className={styles.title}>Technologies We Master</p>
        <p className={styles.description}>
          From backend architecture to frontend experiences, our expertise
          ensures seamless and efficient digital products.
        </p>
        <div className={styles.squareTl} />
        <div className={styles.squareTr} />
        <div className={styles.squareBl} />
        <div className={styles.squareBr} />
      </div>

      <Tags backgroundColor="transparent" />
    </section>
  );
};
