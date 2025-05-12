import { useRef } from "react";
import { useFallingWords } from "../hooks/useFallingWords";
import styles from "./FallingWords.module.scss";

interface FallingWordsProps {
  words?: string[];
  backgroundColor?: string;
  widthPercentage?: number;
}

export const FallingWords = ({
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
  ],
  backgroundColor = "#242424",
  widthPercentage = 80,
}: FallingWordsProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);

  // Use our custom hook to handle all the physics and rendering logic
  useFallingWords({
    words,
    backgroundColor,
    widthPercentage,
    sceneRef,
  });

  return <div ref={sceneRef} className={styles.fallingWordsContainer} />;
};
