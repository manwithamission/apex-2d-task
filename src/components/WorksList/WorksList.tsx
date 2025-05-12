import React from "react";
import styles from "./WorksList.module.scss";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
}

export const WorksList: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/images/projects/ecommerce.jpg",
      description:
        "Полнофункциональная платформа электронной коммерции с интеграцией платежей и системой управления заказами.",
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
    },
    {
      id: 2,
      title: "Booking System",
      category: "Web Application",
      image: "/images/projects/booking.jpg",
      description:
        "Система бронирования услуг с календарем, уведомлениями и панелью администратора.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: 3,
      title: "Corporate Dashboard",
      category: "SaaS",
      image: "/images/projects/dashboard.jpg",
      description:
        "Корпоративная панель мониторинга с аналитикой в реальном времени и расширенными отчетами.",
      technologies: ["Vue.js", "Express", "GraphQL", "Chart.js"],
    },
    {
      id: 4,
      title: "Social Media App",
      category: "Mobile Application",
      image: "/images/projects/social.jpg",
      description:
        "Мобильное приложение социальной сети с функциями чата, профилей и обмена контентом.",
      technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
    },
    {
      id: 5,
      title: "Content Management System",
      category: "Web Development",
      image: "/images/projects/cms.jpg",
      description:
        "Настраиваемая CMS с расширенным редактором контента и управлением доступом.",
      technologies: ["Next.js", "Headless CMS", "AWS", "Prisma"],
    },
    {
      id: 6,
      title: "Logistics Tracking System",
      category: "Enterprise Solution",
      image: "/images/projects/logistics.jpg",
      description:
        "Система отслеживания логистики с GPS-мониторингом и отчетами в реальном времени.",
      technologies: ["Angular", "Node.js", "MongoDB", "Google Maps API"],
    },
  ];

  return (
    <section id="works" className={styles.worksSection}>
      <div className="container">
        <div className="section-header">
          <h2>Наши работы</h2>
          <p className="subheading">Избранные проекты из нашего портфолио</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div className={styles.projectCard} key={project.id}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectCategory}>{project.category}</div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.projectsCta}>
          <a href="#contact" className="btn primary">
            Обсудить ваш проект
          </a>
        </div>
      </div>
    </section>
  );
};
