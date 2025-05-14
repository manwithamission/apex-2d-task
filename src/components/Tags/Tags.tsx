import { useCallback, useRef, useState } from "react";
import { useTags } from "../../hooks/useTags";
import { useInView } from "../../hooks/useInView";
import { MoreTooltip } from "../common/icons";
import styles from "./Tags.module.scss";

interface TagsProps {
  words?: string[];
  backgroundColor?: string;
  widthPercentage?: number;
}

const words = [
  { link: "typescript.lang.org/docs/", name: "Typescript" },
  { link: "javascript.com", name: "Javascript" },
  { link: "reactjs.org", name: "React JS" },
  { link: "nodejs.org", name: "Node JS" },
  { link: "headlesscms.org", name: "Headless CMS" },
  { link: "kubernetes.io", name: "Kubernetes" },
  { link: "solidjs.com", name: "Solid JS" },
  { link: "nosql-databases.org", name: "NOSQL Databases" },
  { link: "nextjs.org", name: "Next JS" },
  { link: "shopify.com", name: "Shopify" },
  { link: "sql-databases.org", name: "SQL Databases" },
  { link: "mongodb.com", name: "MongoDB" },
  { link: "postgresql.org", name: "PostgreSQL" },
  { link: "graphql.org", name: "GraphQL" },
  { link: "restfulapi.net", name: "REST APIs" },
  { link: "tailwindcss.com", name: "Tailwind CSS" },
  { link: "scss.info", name: "SCSS" },
  { link: "styled-components.com", name: "Styled Components" },
  { link: "figma.com", name: "Figma" },
  { link: "adobe.com", name: "Adobe XD" },
  { link: "adobe.com", name: "Adobe Illustrator" },
  { link: "adobe.com", name: "Adobe Photoshop" },
  { link: "adobe.com", name: "Adobe After Effects" },
  { link: "vuejs.org", name: "Vue JS" },
  { link: "angular.io", name: "Angular" },
  { link: "sass-lang.com", name: "SASS" },
  { link: "html.com", name: "HTML" },
  { link: "css.com", name: "CSS" },
];

export const Tags = ({
  backgroundColor = "#242424",
  widthPercentage = 100,
}: TagsProps) => {
  const sceneRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const [hoveredWord, setHoveredWord] = useState<{
    name: string;
    link: string;
  } | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const isInView = useInView<HTMLDivElement>(containerRef, {
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleWordClick = useCallback((link: string) => {
    window.open(`https://${link}`, "_blank");
  }, []);

  const handleWordHover = useCallback(
    (word: { name: string; link: string } | null) => {
      setHoveredWord(word);

      const updatePosition = (e: MouseEvent) => {
        setTooltipPosition({ x: e.clientX + 80, y: e.clientY + 30 });
      };

      if (word) {
        document.addEventListener("mousemove", updatePosition);

        if (window.event instanceof MouseEvent) {
          updatePosition(window.event as MouseEvent);
        }
      } else {
        document.removeEventListener("mousemove", updatePosition);
      }

      return () => {
        document.removeEventListener("mousemove", updatePosition);
      };
    },
    []
  );

  useTags({
    words,
    backgroundColor,
    widthPercentage,
    sceneRef,
    isInView,
    onWordClick: handleWordClick,
    onWordHover: handleWordHover,
  });

  return (
    <div ref={containerRef} className={styles.TagsContainer}>
      <div ref={sceneRef} className={styles.canvasContainer} />

      {/* {hoveredWord && ( */}
      <div
        className={styles.wordTooltip}
        style={{
          left: `${tooltipPosition.x}px`,
          top: `${tooltipPosition.y}px`,
          opacity: hoveredWord ? 1 : 0,
        }}
      >
        <div className={styles.wordTooltipContent}>
          <MoreTooltip width={100} height={40} />
        </div>
      </div>
      {/* )} */}
    </div>
  );
};
