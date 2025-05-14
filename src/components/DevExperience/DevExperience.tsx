import { ArrowIcon } from "../common/icons";
import styles from "./DevExperience.module.scss";

export const DevExperience = () => {
  return (
    <section id="dev-experience" className={styles.devExpSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.count}>03</p>
          <p className={styles.count}>02</p>
          <p className={styles.count}>01</p>
        </div>
        <div className={styles.right}>
          <div className={styles.rightTop}>
            <ArrowIcon width={86} height={86} className={styles.arrowIcon} />
            <div className={styles.rightTopText}>
              <p className={styles.mediumText}> &#123; DEVELOPMENT &#125;</p>
              <p className={styles.boldText}>PATH</p>
            </div>
          </div>
          <div className={styles.rightBottom}>
            <p className={styles.devText}>Discovery & Planning Analysis</p>
            <p className={styles.description}>
              We analyze your vision, define requirements, and map out the best
              technology stack to bring your idea to life.
            </p>
            <div className={styles.squareTl} />
            <div className={styles.squareTr} />
            <div className={styles.squareBl} />
            <div className={styles.squareBr} />
          </div>
        </div>
      </div>
    </section>
  );
};
