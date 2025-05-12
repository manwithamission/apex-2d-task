import styles from "./Technologies.module.scss";
import { FallingWords } from "../FallingWords";

interface TechCategory {
  id: number;
  name: string;
  technologies: string[];
}

export const Technologies = () => {
  const techCategories: TechCategory[] = [
    {
      id: 1,
      name: "Frontend",
      technologies: [
        "React JS",
        "Next JS",
        "Vue.js",
        "Angular",
        "TypeScript",
        "JavaScript",
        "Solid JS",
        "Redux",
        "HTML5/CSS3",
        "Tailwind CSS",
        "Material UI",
      ],
    },
    {
      id: 2,
      name: "Backend",
      technologies: [
        "Node JS",
        "Express",
        "NestJS",
        "Django",
        "Ruby on Rails",
        "Laravel",
        "Spring Boot",
        "ASP.NET Core",
        "GraphQL",
      ],
    },
    {
      id: 3,
      name: "Database",
      technologies: [
        "SQL Databases",
        "PostgreSQL",
        "MySQL",
        "NOSQL Databases",
        "MongoDB",
        "Firebase",
        "Redis",
        "Elasticsearch",
      ],
    },
    {
      id: 4,
      name: "DevOps & Cloud",
      technologies: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "Google Cloud",
        "CI/CD",
        "Jenkins",
        "GitHub Actions",
      ],
    },
    {
      id: 5,
      name: "CMS & Tools",
      technologies: [
        "Headless CMS",
        "Shopify",
        "WordPress",
        "Strapi",
        "Contentful",
        "Sanity",
      ],
    },
  ];

  return (
    <section id="technologies" className={styles.techSection}>
      <div className="container">
        <div className="section-header">
          <h2>Технологии</h2>
          <p className="subheading">Стек технологий, которыми мы владеем</p>
        </div>

        <div className={styles.techCategories}>
          {techCategories.map((category) => (
            <div className={styles.techCategory} key={category.id}>
              <h3>{category.name}</h3>
              <div className={styles.techTags}>
                {category.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.backgroundAnimation}>
        <FallingWords backgroundColor="transparent" />
      </div>
    </section>
  );
};
