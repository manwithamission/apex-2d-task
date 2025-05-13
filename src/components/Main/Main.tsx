import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <section id="main" className={styles.mainSection}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <div className={styles.titleGroup}>
              <h1 className={styles.boldTitle}>Beyond</h1>
              <h2 className={styles.title}>We Engineer</h2>
            </div>
            <div className={styles.titleGroup}>
              <h2 className={styles.title}>Development</h2>
              <h1 className={styles.boldTitle}>Success</h1>
            </div>
          </div>

          <div className={styles.bottomContent}>
            <div className={styles.left}>
              <p>
                With elite engineering talent and deep industry expertise, we
                build digital products that drive growth and innovation.
              </p>
              <div className={styles.squareTl} />
              <div className={styles.squareTr} />
              <div className={styles.squareBl} />
              <div className={styles.squareBr} />
            </div>
            <div className={styles.right}>
              <p>
                At 10x Code Lab, we don’t just code— we craft scalable,
                high-impact solutions.
              </p>
              <div className={styles.squareTl} />
              <div className={styles.squareTr} />
              <div className={styles.squareBl} />
              <div className={styles.squareBr} />
            </div>
          </div>

          <div className={styles.cube} />
          <div className={styles.cornerBl} />
          <div className={styles.cornerBr} />
          <div className={styles.cornerTl} />
          <div className={styles.cornerTr} />
        </div>
      </div>
    </section>
  );
};
