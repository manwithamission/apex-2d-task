import styles from "./Technologies.module.scss";
import { Tags } from "../Tags/Tags";

export const Technologies = () => {
  const handleWordClick = (word: string) => {
    // Open technology documentation in a new tab when the first tag is clicked
    if (word === "Typescript") {
      window.open("https://www.typescriptlang.org/docs/", "_blank");
    }
  };

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

      <Tags backgroundColor="transparent" onWordClick={handleWordClick} />
    </section>
  );
};
