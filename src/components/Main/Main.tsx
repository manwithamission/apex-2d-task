import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <section id="main" className={styles.mainSection}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>
              Разрабатываем{" "}
              <span className={styles.highlight}>веб-решения</span> для вашего
              бизнеса
            </h1>
            <p>
              Современные технологии, быстрая разработка, индивидуальный подход
              к каждому проекту
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="#contact"
                className={`btn primary ${styles.btn} ${styles.primary}`}
              >
                Связаться с нами
              </a>
              <a
                href="#works"
                className={`btn secondary ${styles.btn} ${styles.secondary}`}
              >
                Портфолио
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
