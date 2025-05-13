import React from "react";
import styles from "./WorksList.module.scss";

export const WorksList: React.FC = () => {
  return (
    <section id="works" className={styles.worksSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>WORKS</h2>
          <p className={styles.subheading}>
            From sleek websites to robust enterprise platforms, we craft
            high-performance digital products that drive impact.
          </p>
        </div>

        <div></div>
      </div>
    </section>
  );
};
