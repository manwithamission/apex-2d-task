import React, { useState, useCallback } from "react";
import styles from "./WorksList.module.scss";

export const WorksList: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = useCallback(() => {
    setShowTooltip(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowTooltip(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (showTooltip) {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
      }
    },
    [showTooltip]
  );

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

        <div className={styles.worksList} onMouseMove={handleMouseMove}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.workItem}
          ></div>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.workItem}
          >
            <p className={styles.nxtTitle}>NXT ARMOR</p>
          </div>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.workItem}
          ></div>
        </div>

        {showTooltip && (
          <div
            className={styles.circleTooltip}
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
            }}
          />
        )}
      </div>
    </section>
  );
};
