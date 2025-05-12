import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { scrollToSection } from "../../utils/scrollUtils";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change header style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll-to-section with mobile menu closing
  const handleSectionClick = (sectionId: string, event: React.MouseEvent) => {
    console.log(sectionId, "sectionId");
    scrollToSection(sectionId, event);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>APEX</h1>
        </div>

        <nav
          className={`${styles.navigation} ${
            mobileMenuOpen ? styles.active : ""
          }`}
        >
          <ul>
            <li onClick={(e) => handleSectionClick("main", e)}>Главная</li>
            <li onClick={(e) => handleSectionClick("about", e)}>О нас</li>
            <li>
              <a href="#works" onClick={(e) => handleSectionClick("works", e)}>
                Наши работы
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                onClick={(e) => handleSectionClick("technologies", e)}
              >
                Технологии
              </a>
            </li>
            <li>
              <a
                href="#dev-experience"
                onClick={(e) => handleSectionClick("dev-experience", e)}
              >
                Опыт
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSectionClick("contact", e)}
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`${styles.mobileMenuBtn} ${
            mobileMenuOpen ? styles.active : ""
          }`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};
