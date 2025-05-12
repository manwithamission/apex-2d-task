import styles from "./DevExperience.module.scss";

interface ExperienceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const DevExperience = () => {
  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      title: "Agile-методология",
      description:
        "Мы используем гибкие методологии разработки, такие как Scrum и Kanban, которые позволяют нам быстро адаптироваться к изменениям и поддерживать прозрачность процесса для клиентов.",
      icon: "agile",
    },
    {
      id: 2,
      title: "Тестирование и QA",
      description:
        "Каждый проект проходит тщательное тестирование на всех этапах разработки, включая модульное, интеграционное и End-to-End тестирование для обеспечения высокого качества продукта.",
      icon: "testing",
    },
    {
      id: 3,
      title: "Чистый код",
      description:
        "Мы придерживаемся принципов чистого кода, который легко поддерживать и масштабировать. Регулярные код-ревью и стандарты кодирования обеспечивают высокое качество кодовой базы.",
      icon: "code",
    },
    {
      id: 4,
      title: "CI/CD",
      description:
        "Автоматизированные процессы сборки, тестирования и развертывания позволяют нам быстро и безопасно доставлять обновления приложений в производственную среду.",
      icon: "cicd",
    },
    {
      id: 5,
      title: "Оптимизация производительности",
      description:
        "Мы уделяем особое внимание производительности приложений, оптимизируя время загрузки, отзывчивость интерфейса и эффективность работы с данными.",
      icon: "performance",
    },
    {
      id: 6,
      title: "Масштабируемая архитектура",
      description:
        "Наши решения проектируются с учетом возможного роста и масштабирования, что позволяет системам справляться с увеличением нагрузки и количества пользователей.",
      icon: "architecture",
    },
  ];

  return (
    <section id="dev-experience" className={styles.devExpSection}>
      <div className="container">
        <div className="section-header">
          <h2>Опыт разработки</h2>
          <p className="subheading">
            Наш подход к разработке программного обеспечения
          </p>
        </div>

        <div className={styles.experienceGrid}>
          {experienceItems.map((item) => (
            <div className={styles.experienceCard} key={item.id}>
              <div className={styles.cardIcon}>
                <div className={`${styles.icon} ${styles[item.icon]}`}></div>
              </div>
              <div className={styles.cardContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
