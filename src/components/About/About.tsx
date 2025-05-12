import styles from "./About.module.scss";

export const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className="section-header">
          <h2>О нас</h2>
          <p className="subheading">Узнайте больше о нашей компании</p>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <img src="/images/team.jpg" alt="Наша команда" />
          </div>
          <div className={styles.aboutText}>
            <h3>Разработка с подходом</h3>
            <p>
              Наша команда состоит из опытных разработчиков, дизайнеров и
              менеджеров проектов с многолетним опытом создания
              высококачественных веб-приложений и систем. Мы специализируемся на
              разработке решений, которые не только соответствуют, но и
              превосходят ожидания наших клиентов.
            </p>
            <p>
              Мы верим в прозрачный процесс разработки, тесное сотрудничество с
              клиентами и использование передовых технологий для достижения
              максимальной эффективности и качества.
            </p>
            <div className={styles.aboutStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>8+</span>
                <span className={styles.statLabel}>Лет на рынке</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>60+</span>
                <span className={styles.statLabel}>Успешных проектов</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>25+</span>
                <span className={styles.statLabel}>Специалистов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
