import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logo}>
              <h2>APEX</h2>
            </div>
            <p>
              Создаем современные веб-решения с использованием передовых
              технологий для вашего бизнеса.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h3>Навигация</h3>
              <ul>
                <li>
                  <a href="#main">Главная</a>
                </li>
                <li>
                  <a href="#about">О нас</a>
                </li>
                <li>
                  <a href="#works">Наши работы</a>
                </li>
                <li>
                  <a href="#tech">Технологии</a>
                </li>
                <li>
                  <a href="#dev-exp">Опыт разработки</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Услуги</h3>
              <ul>
                <li>
                  <a href="#services">Веб-разработка</a>
                </li>
                <li>
                  <a href="#services">Мобильные приложения</a>
                </li>
                <li>
                  <a href="#services">UI/UX дизайн</a>
                </li>
                <li>
                  <a href="#services">Консалтинг</a>
                </li>
                <li>
                  <a href="#services">Поддержка</a>
                </li>
              </ul>
            </div>

            <div className={`${styles.linkGroup} ${styles.contactInfo}`}>
              <h3>Контакты</h3>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i> г. Москва, ул.
                  Примерная, д. 123
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i> +7 (999) 123-45-67
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@apexdev.ru
                </li>
              </ul>
              <div className={styles.contactButton}>
                <a href="mailto:info@apexdev.ru" className="btn primary">
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} APEX. Все права защищены.</p>
          <div className={styles.footerLegal}>
            <a href="#privacy">Политика конфиденциальности</a>
            <a href="#terms">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
