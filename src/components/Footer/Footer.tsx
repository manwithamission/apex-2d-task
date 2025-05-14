import { useState } from "react";
import styles from "./Footer.module.scss";
import { cn } from "../../utils/classUtils";
import { PixelIcon } from "../common/icons/PixelIcon";

const categories = [
  "OTHER",
  "CUSTOM AI-DEVELOPMENT",
  "MARKETING AUTOMATION",
  "MOBILE APP DEVELOPMENT",
  "ACCESSIBILITY COMPLIANCE",
  "CUSTOM MARKETING WEBSITES",
  "SERVER DEVELOPMENT & OPTIMIZATION",
  "BLOCKCHAIN & DECENTRALIZED APPS",
  "QUALITY ASSURANCE & TDD",
  "A/B TESTING",
  "E-COMMERCE SOLUTIONS",
];

const technologies = [
  "MEDUSA COMMERCE",
  "POSTGRE SQL",
  "KUBERNETES",
  "CASSANDRA",
  "MONGO DB",
  "SHOPIFY",
  "VITESS",
  "MY SQL",
  "REDIS",
  "PAYLOAD CMS",
  "WORDPRESS",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "HEADLESS",
  "NODE.JS",
  "REACT.JS",
  "NEXT.JS",
  "JAVA",
];

const services = [
  "WEB APPLICATION DEVELOPMENT",
  "MOBILE APP DEVELOPMENT",
  "MARKETING AUTOMATION",
  "A/B TESTING",
  "BLOCKCHAIN & DECENTRALIZED APPS",
  "CUSTOM AI-DEVELOPMENT",
  "CUSTOM MARKETING WEBSITES",
  "CLOUD ARCHITECTURE",
];

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDescription: "",
    termsAgreed: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, termsAgreed: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectDescription: "",
      termsAgreed: false,
    });
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.header}>
            <p className={styles.title}>INNOVATE</p>
            <div />
            <p className={styles.title}>CODE</p>
            <div />
            <p className={styles.title}>DEPLOY</p>
          </div>

          <p className={styles.subtitle}>What we can do for you?</p>

          <ul className={styles.categoryList}>
            {categories.map((category) => (
              <li key={category} className={styles.categoryItem}>
                {category}
              </li>
            ))}
          </ul>

          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="enter your name*"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="enter your phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="projectDescription"
                  placeholder="describe your project"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={cn(styles.formInput, styles.formTextarea)}
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleCheckboxChange}
                    required
                  />
                  <span className={styles.visualCheckbox}>
                    <span>✓</span>
                  </span>
                  <span className={styles.checkboxLabel}>
                    I agree to Terms of Service & Privacy Policy
                  </span>
                </label>
              </div>

              <div className={styles.submitBtnWrapper}>
                <PixelIcon
                  className={cn(styles.pixelIcon, styles.pixelIconLeft)}
                  height={40}
                  width={26}
                />

                <button
                  type="submit"
                  className={cn("btn", "primary", styles.submitButton)}
                >
                  <p className={styles.submitText}>[ SEND ]</p>
                </button>
                <PixelIcon
                  className={cn(styles.pixelIcon, styles.pixelIconRight)}
                  height={40}
                  width={26}
                />
              </div>
            </form>
          </div>

          <div className={styles.links}>
            <div className={styles.leftLinks}>
              <p className={styles.leftsLinkTitle}>&#91; technologies &#93;</p>
              <div className={styles.leftLinksList}>
                {technologies.map((tech) => (
                  <a
                    key={tech}
                    href={`#${tech.toLowerCase().replace(/\s+/g, "-")}`}
                    className={styles.techLink}
                  >
                    {tech}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.middleLinks}>
              <div className={styles.headerMiddleLinks}>
                <hr />
                <p className={styles.middleLinkTitle}>
                  <span>&#91; </span> services <span> &#93;</span>
                </p>
                <hr />
              </div>
              <div className={styles.middleLinksList}>
                {services.map((service) => (
                  <a
                    key={service}
                    href={`#${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className={styles.serviceLink}
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.rightLinks}>
              <div className={cn(styles.social, styles.linkedIn)}>
                <img src="/icons/linkedin.png" alt="LinkedIn" />
              </div>
              <div className={cn(styles.social, styles.facebook)}>
                <img src="/icons/facebook.png" alt="Facebook" />
              </div>
              <a href="#" className={styles.link}>
                Terms of Service
              </a>
              <a href="#" className={styles.link}>
                Privacy Policy
              </a>
              <div className={styles.copyright}>@2025</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
