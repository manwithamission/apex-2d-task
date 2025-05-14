import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import Matter from "matter-js";

interface UseTagsProps {
  words: { name: string; link: string }[];
  backgroundColor: string;
  widthPercentage: number;
  sceneRef: RefObject<HTMLDivElement>;
  isInView?: boolean;
  onWordClick?: (link: string) => void;
  onWordHover?: (word: { name: string; link: string } | null) => void;
}

interface WordBody extends Matter.Body {
  word: { name: string; link: string };
  width: number;
  height: number;
}

export const useTags = ({
  words,
  backgroundColor,
  widthPercentage,
  sceneRef,
  isInView = false,
  onWordClick,
  onWordHover,
}: UseTagsProps) => {
  const animationStartedRef = useRef(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    const viewportWidth = window.innerWidth;
    let displayWidth = (viewportWidth * widthPercentage) / 100;

    const MAX_WIDTH = 1900;
    if (displayWidth > MAX_WIDTH) {
      displayWidth = MAX_WIDTH;
    }

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0.4 },
    });

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: displayWidth,
        height: 580,
        wireframes: false,
        background: backgroundColor,
      },
    });

    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
      restitution: 0.6,
    };

    const floor = Matter.Bodies.rectangle(
      displayWidth / 2,
      580 + 50,
      displayWidth,
      100,
      wallOptions
    );

    const leftWall = Matter.Bodies.rectangle(
      0,
      580 / 2,
      2,
      580 * 2,
      wallOptions
    );

    const rightWall = Matter.Bodies.rectangle(
      displayWidth,
      580 / 2,
      2,
      580 * 2,
      wallOptions
    );

    Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);

    Matter.Runner.run(Matter.Runner.create(), engine);
    Matter.Render.run(render);

    const handleCanvasClick = (event: MouseEvent) => {
      if (!onWordClick) return;

      const canvas = render.canvas;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const bodies = Matter.Composite.allBodies(engine.world).filter(
        (body): body is WordBody => (body as WordBody).word !== undefined
      );

      for (const body of bodies) {
        if (Matter.Bounds.contains(body.bounds, { x, y })) {
          const originalStyle = body.render.strokeStyle;
          body.render.strokeStyle = "#ffffff";

          setTimeout(() => {
            body.render.strokeStyle = originalStyle;
          }, 200);
          onWordClick(body.word.link);
        }
      }
    };

    if (onWordClick) {
      render.canvas.addEventListener("click", handleCanvasClick);
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!onWordHover) return;

      const canvas = render.canvas;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const bodies = Matter.Composite.allBodies(engine.world).filter(
        (body): body is WordBody => (body as WordBody).word !== undefined
      );

      let hoveredWord = null;

      for (const body of bodies) {
        if (Matter.Bounds.contains(body.bounds, { x, y })) {
          hoveredWord = body.word;
          break;
        }
      }

      onWordHover(hoveredWord);
    };

    const handleMouseLeave = () => {
      if (onWordHover) {
        onWordHover(null);
      }
    };

    render.canvas.addEventListener("mousemove", handleMouseMove);
    render.canvas.addEventListener("mouseleave", handleMouseLeave);

    const createWord = (
      word: { name: string; link: string },
      index: number
    ) => {
      const div = document.createElement("div");
      div.textContent = word.name;
      div.style.position = "absolute";
      div.style.visibility = "hidden";
      div.style.fontFamily = "Orbitron";
      div.style.fontSize = "18px";
      div.style.padding = "10px";
      document.body.appendChild(div);

      const width = div.offsetWidth;
      const height = div.offsetHeight;
      document.body.removeChild(div);

      const wordSizes = words.map((w) => {
        const tempDiv = document.createElement("div");
        tempDiv.textContent = w.name;
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.fontFamily = "Orbitron";
        tempDiv.style.fontSize = "18px";
        tempDiv.style.padding = "10px";
        document.body.appendChild(tempDiv);
        const size = {
          width: tempDiv.offsetWidth,
          height: tempDiv.offsetHeight,
        };
        document.body.removeChild(tempDiv);
        return size;
      });

      const padding = 30;
      const maxRows = 5;
      const rowHeight = 80;

      const positions = [];

      let currentX = padding;
      let currentRow = 0;
      let highestInRow = 0;

      for (let i = 0; i < words.length; i++) {
        const tagWidth = wordSizes[i].width;
        const tagHeight = wordSizes[i].height;

        if (currentX + tagWidth > displayWidth - padding && i > 0) {
          currentX = padding;
          currentRow++;
          highestInRow = 0;
        }

        if (currentRow >= maxRows) {
          currentRow = 0;
          currentX = padding;
        }

        const y = 40 + currentRow * rowHeight;

        positions.push({
          x: currentX + tagWidth / 2,
          y: y,
          width: tagWidth,
          height: tagHeight,
        });

        highestInRow = Math.max(highestInRow, tagHeight);
        currentX += tagWidth + padding;
      }

      const pos = positions[index];

      const body = Matter.Bodies.rectangle(pos.x, pos.y, width, height, {
        restitution: 0.8,
        friction: 0.1,
        frictionAir: 0.01,
        render: {
          fillStyle: "rgba(255,255,255,0.1)",
          strokeStyle: "#07E0B0",
          lineWidth: 1,
        },
      });

      (body as WordBody).word = word;
      (body as WordBody).width = width;
      (body as WordBody).height = height;

      Matter.Composite.add(engine.world, body);

      return body;
    };

    Matter.Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;

      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];

        if ((pair.bodyA as WordBody).word !== undefined) {
          Matter.Body.setAngularVelocity(
            pair.bodyA,
            (Math.random() - 0.5) * 0.05
          );
        }
        if ((pair.bodyB as WordBody).word !== undefined) {
          Matter.Body.setAngularVelocity(
            pair.bodyB,
            (Math.random() - 0.5) * 0.05
          );
        }
      }
    });

    const wordBodies = words.map((word, index) => createWord(word, index));
    wordBodies.forEach((body) => {
      Matter.Body.setStatic(body, true);
    });

    if (isInView && !animationStartedRef.current) {
      animationStartedRef.current = true;

      setTimeout(() => {
        wordBodies.forEach((body) => {
          Matter.Body.setStatic(body, false);
          Matter.Body.setVelocity(body, {
            x: (Math.random() - 0.5) * 2,
            y: 0,
          });
        });
      }, 2000);
    }

    Matter.Events.on(render, "afterRender", () => {
      const ctx = render.context;

      const wallGradient = ctx.createLinearGradient(0, 0, 0, 580);
      wallGradient.addColorStop(0, "#011301");
      wallGradient.addColorStop(1, "#046247");

      ctx.fillStyle = wallGradient;
      const leftWallWidth = 2;
      ctx.fillRect(
        leftWall.bounds.min.x,
        leftWall.bounds.min.y,
        leftWallWidth,
        leftWall.bounds.max.y - leftWall.bounds.min.y
      );

      ctx.fillStyle = wallGradient;
      const rightWallWidth = 2;
      ctx.fillRect(
        rightWall.bounds.min.x,
        rightWall.bounds.min.y,
        rightWallWidth,
        rightWall.bounds.max.y - rightWall.bounds.min.y
      );

      ctx.strokeStyle = "#07E0B0";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 580 - 2);
      ctx.lineTo(displayWidth, 580 - 2);
      ctx.stroke();

      const bodies = Matter.Composite.allBodies(engine.world).filter(
        (body): body is WordBody => (body as WordBody).word !== undefined
      );

      bodies.forEach((body) => {
        const pos = body.position;
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(body.angle);

        ctx.fillStyle = "rgba(40, 44, 52, 0.8)";
        ctx.strokeStyle = "#07E0B0";
        ctx.lineWidth = 2;

        ctx.font = `bold 16px 'Orbitron'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(body.word.name, 0, 0);

        ctx.fillStyle = "#ffffff";
        ctx.restore();
      });
    });

    const handleResize = () => {
      const newViewportWidth = window.innerWidth;
      let newDisplayWidth = (newViewportWidth * widthPercentage) / 100;

      if (newDisplayWidth > MAX_WIDTH) {
        newDisplayWidth = MAX_WIDTH;
      }

      render.options.width = newDisplayWidth;
      render.options.height = 580;
      render.canvas.width = newDisplayWidth;
      render.canvas.height = 580;

      Matter.Body.setPosition(floor, {
        x: newDisplayWidth / 2,
        y: 580 + 50,
      });

      Matter.Body.setPosition(leftWall, {
        x: 0,
        y: 580 / 2,
      });

      Matter.Body.setPosition(rightWall, {
        x: newDisplayWidth,
        y: 580 / 2,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (onWordClick) {
        render.canvas.removeEventListener("click", handleCanvasClick);
      }
      render.canvas.removeEventListener("mousemove", handleMouseMove);
      render.canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      render.canvas.remove();
      Matter.Engine.clear(engine);

      animationStartedRef.current = false;
    };
  }, [
    words,
    backgroundColor,
    widthPercentage,
    sceneRef,
    isInView,
    onWordClick,
    onWordHover,
  ]);
};
