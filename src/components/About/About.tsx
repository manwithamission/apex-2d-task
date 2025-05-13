import { cn } from "../../utils/classUtils";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={cn(styles.axis, styles.axisTop)} />

        <div className={cn(styles.codeBlock, styles.codeBlockRight)}>
          <p>
            .design-philosophy &#123;
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; pixel: "crafted with purpose";
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; code: "written with precision";
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; interaction: "engineered for
            impact";
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; fusion: "art + function";
            <br /> &#125;
          </p>
        </div>

        <div className={cn(styles.codeBlock, styles.codeBlockLeft)}>
          <p>
            .core-values &#123;
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; attention-to-detail: true;
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; innovation: relentless;
            <br /> &nbsp;&nbsp;&nbsp;&nbsp; approach: "Always pushing
            boundaries";
            <br /> &#125;
          </p>
        </div>

        <p className={styles.aboutText}>
          Driven by Passion Defined by Excellence
        </p>

        <div className={styles.cube} />

        <div className={cn(styles.axis, styles.axisBottom)} />
      </div>
    </section>
  );
};
