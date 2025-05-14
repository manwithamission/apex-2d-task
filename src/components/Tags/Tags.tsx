import { useRef } from "react";
import { useTags } from "../../hooks/useTags";
import { useInView } from "../../hooks/useInView";
import styles from "./Tags.module.scss";

interface TagsProps {
  words?: string[];
  backgroundColor?: string;
  widthPercentage?: number;
  onWordClick?: (word: string) => void;
}

export const Tags = ({
  words = [
    "Typescript",
    "Javascript",
    "React JS",
    "Node JS",
    "Headless CMS",
    "Kubernetes",
    "Solid JS",
    "NOSQL Databases",
    "Next JS",
    "Shopify",
    "SQL Databases",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST APIs",
    "Tailwind CSS",
    "SCSS",
    "Styled Components",
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe After Effects",
    "Vue JS",
    "Angular",
    "SASS",
    "HTML",
    "CSS",
  ],
  backgroundColor = "#242424",
  widthPercentage = 100,
  onWordClick,
}: TagsProps) => {
  const sceneRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const isInView = useInView<HTMLDivElement>(containerRef, {
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleWordClick = (word: string) => {
    if (onWordClick && word === words[0]) {
      // Only first tag is clickable
      onWordClick(word);
    }
  };

  useTags({
    words,
    backgroundColor,
    widthPercentage,
    sceneRef,
    isInView,
    onWordClick: handleWordClick,
  });

  return (
    <div ref={containerRef} className={styles.TagsContainer}>
      <div ref={sceneRef} className={styles.canvasContainer} />
    </div>
  );
};
