import React, { useEffect, useState } from "react";
import { CursorIcon } from "../common/icons";
import styles from "./CustomCursor.module.scss";

interface Position {
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isOverLink, setIsOverLink] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      if (!visible) {
        setVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseEnterLink = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button") ||
        (e.target as HTMLElement).classList.contains("clickable")
      ) {
        setIsOverLink(true);
      }
    };

    const handleMouseLeaveLink = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button") ||
        (e.target as HTMLElement).classList.contains("clickable")
      ) {
        setIsOverLink(false);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    document.addEventListener("mouseover", handleMouseEnterLink);
    document.addEventListener("mouseout", handleMouseLeaveLink);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnterLink);
      document.removeEventListener("mouseout", handleMouseLeaveLink);
    };
  }, [visible]);

  return (
    <div
      className={`${styles.cursor} ${visible ? styles.visible : ""} ${
        isClicking ? styles.clicking : ""
      } ${isOverLink ? styles.overLink : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className={styles.cursorIcon}>
        <CursorIcon width={18} height={18} />
      </div>
    </div>
  );
};
