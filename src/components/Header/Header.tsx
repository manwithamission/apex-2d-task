import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { scrollToSection } from "../../utils/scrollUtils";
import { cn } from "../../utils/classUtils";
import { PixelIcon } from "../common/icons/PixelIcon";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleSectionClick = (sectionId: string, event: React.MouseEvent) => {
    scrollToSection(sectionId, event);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={styles.container}>
        <a href="#main" className={styles.logo}>
          <img
            className={cn(styles.logoImage)}
            src={"/images/backgrounds/logo.png"}
            alt="Logo"
          />
        </a>

        <nav className={cn(styles.navigation, mobileMenuOpen && styles.active)}>
          <ul>
            <li>
              <a href="#main" onClick={(e) => handleSectionClick("main", e)}>
                [ work ]
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleSectionClick("about", e)}>
                [ about ]
              </a>
            </li>
            <li>
              <a href="#works" onClick={(e) => handleSectionClick("works", e)}>
                [ services ]
              </a>
            </li>
            <li>
              <a
                href="#dev-experience"
                onClick={(e) => handleSectionClick("dev-experience", e)}
              >
                [ dev experience ]
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                onClick={(e) => handleSectionClick("technologies", e)}
              >
                [ technologies ]
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={(e) => handleSectionClick("contact", e)}
              >
                [ contact ]
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.btnWrapper}>
          <button className={cn("btn", "primary", styles.quoteButton)}>
            <p className={styles.quoteText}>[ get a quote ]</p>
          </button>
          <PixelIcon className={styles.pixelIcon} height={40} width={26} />
        </div>
      </div>
    </header>
  );
};
