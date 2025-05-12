import { useEffect, RefObject } from "react";
import Matter from "matter-js";

interface UseFallingWordsProps {
  words: string[];
  backgroundColor: string;
  widthPercentage: number;
  sceneRef: RefObject<HTMLDivElement>;
}

// Define a type for word bodies with custom properties
interface WordBody extends Matter.Body {
  word: string;
  color: string;
  width: number;
  height: number;
}

export const useFallingWords = ({
  words,
  backgroundColor,
  widthPercentage,
  sceneRef,
}: UseFallingWordsProps) => {
  useEffect(() => {
    if (!sceneRef.current) return;

    // Calculate width based on the percentage of viewport width
    const viewportWidth = window.innerWidth;
    const displayWidth = (viewportWidth * widthPercentage) / 100;

    // Create the Matter.js engine with stronger gravity for faster falling
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0.4 }, // Increased gravity for better falling effect
    });

    // Create the renderer
    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: displayWidth, // Set to 80% of viewport width
        height: 580, // Match container height
        wireframes: false,
        background: backgroundColor,
      },
    });

    // Create walls - all invisible
    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
      restitution: 0.6, // Make walls bouncy
    };

    // Bottom wall (floor)
    const floor = Matter.Bodies.rectangle(
      displayWidth / 2, // Center of canvas
      580 + 50,
      displayWidth, // Width of canvas
      100,
      wallOptions
    );

    // Left wall (at left edge of canvas)
    const leftWall = Matter.Bodies.rectangle(
      0, // Left edge of canvas
      580 / 2,
      2,
      580 * 2,
      wallOptions
    );

    // Right wall (at right edge of canvas)
    const rightWall = Matter.Bodies.rectangle(
      displayWidth, // Right edge of canvas
      580 / 2,
      2, // Same width as left wall
      580 * 2,
      wallOptions
    );

    // Add the walls to the world
    Matter.Composite.add(engine.world, [floor, leftWall, rightWall]);

    // Run the engine and renderer
    Matter.Runner.run(Matter.Runner.create(), engine);
    Matter.Render.run(render);

    // Function to create a word block
    const createWord = (word: string, index: number) => {
      const color = "#ffffff"; // Изменили цвет на белый для лучшей контрастности

      // Create a temporary div to measure text size
      const div = document.createElement("div");
      div.textContent = word;
      div.style.position = "absolute";
      div.style.visibility = "hidden";
      div.style.fontFamily = "Arial, sans-serif";
      div.style.fontSize = "18px";
      div.style.padding = "10px";
      document.body.appendChild(div);

      // Get the dimensions
      const width = div.offsetWidth;
      const height = div.offsetHeight;
      document.body.removeChild(div);

      // Get the dimensions of all words first
      const wordSizes = words.map((w) => {
        const tempDiv = document.createElement("div");
        tempDiv.textContent = w;
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.fontFamily = "Arial, sans-serif";
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

      // Implement a wrapping layout algorithm
      const padding = 30; // space between tags
      const maxRows = 5; // Maximum number of rows to distribute the tags
      const rowHeight = 80; // Height for each row

      // Initialize positions array with proper wrap
      const positions = [];

      let currentX = padding;
      let currentRow = 0;
      let highestInRow = 0;

      // Calculate positions for all tags with wrapping
      for (let i = 0; i < words.length; i++) {
        const tagWidth = wordSizes[i].width;
        const tagHeight = wordSizes[i].height;

        // Check if we need to wrap to the next row
        if (currentX + tagWidth > displayWidth - padding && i > 0) {
          currentX = padding;
          currentRow++;
          highestInRow = 0;
        }

        // Ensure we don't exceed max rows
        if (currentRow >= maxRows) {
          currentRow = 0;
          currentX = padding;
        }

        // Calculate Y position based on row and some initial offset from top
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

      // Use the pre-calculated position for this tag
      const pos = positions[index];

      // Create a physics body for the word at the calculated position
      const body = Matter.Bodies.rectangle(pos.x, pos.y, width, height, {
        restitution: 0.8, // Increased bounciness
        friction: 0.1,
        frictionAir: 0.01,
        render: {
          fillStyle: "rgba(255,255,255,0.1)",
          strokeStyle: color,
          lineWidth: 1,
        },
      });

      // Add text data to the body
      (body as any).word = word;
      (body as any).color = color;
      (body as any).width = width;
      (body as any).height = height;

      // Add the body to the world
      Matter.Composite.add(engine.world, body);

      return body;
    };

    // Add collision listener to add rotation on collision
    Matter.Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;

      // Loop through all collisions
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];

        // Check if one of the bodies is a word (not a wall)
        if ((pair.bodyA as any).word) {
          // Add a slight rotation on collision
          Matter.Body.setAngularVelocity(
            pair.bodyA,
            (Math.random() - 0.5) * 0.05
          );
        }
        if ((pair.bodyB as any).word) {
          Matter.Body.setAngularVelocity(
            pair.bodyB,
            (Math.random() - 0.5) * 0.05
          );
        }
      }
    });

    // Create words at regular intervals
    // Create one word for each technology
    const wordBodies = words.map((word, index) => createWord(word, index));
    wordBodies.forEach((body) => {
      Matter.Body.setStatic(body, true);
    });

    setTimeout(() => {
      wordBodies.forEach((body) => {
        Matter.Body.setStatic(body, false);
        Matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 2,
          y: 0,
        });
      });
    }, 2000);

    // Custom render function to draw walls with gradient and text on bodies
    Matter.Events.on(render, "afterRender", () => {
      const ctx = render.context;

      // Draw walls with gradient
      // Create gradient for walls
      const wallGradient = ctx.createLinearGradient(
        0,
        0,
        0,
        580 // Use fixed height
      );
      wallGradient.addColorStop(0, "#011301");
      wallGradient.addColorStop(1, "#046247");

      // Draw left wall with gradient
      ctx.fillStyle = wallGradient;
      // Ensure left wall is exactly 2px wide
      const leftWallWidth = 2;
      ctx.fillRect(
        leftWall.bounds.min.x,
        leftWall.bounds.min.y,
        leftWallWidth,
        leftWall.bounds.max.y - leftWall.bounds.min.y
      );

      // Draw right wall with gradient
      ctx.fillStyle = wallGradient;
      // Ensure right wall is exactly the same width as left wall (2px)
      const rightWallWidth = 2;
      ctx.fillRect(
        rightWall.bounds.min.x,
        rightWall.bounds.min.y,
        rightWallWidth,
        rightWall.bounds.max.y - rightWall.bounds.min.y
      );

      // Draw bottom wall (floor) with gradient
      // Draw text bodies
      const bodies = Matter.Composite.allBodies(engine.world).filter(
        (body): body is WordBody => (body as WordBody).word !== undefined
      );

      // Draw text on each word body
      bodies.forEach((body) => {
        const pos = body.position;
        const width = body.width || body.bounds.max.x - body.bounds.min.x;
        const height = body.height || body.bounds.max.y - body.bounds.min.y;
        const color = body.color;

        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(body.angle);

        // Draw tag background
        ctx.fillStyle = "rgba(40, 44, 52, 0.8)";
        ctx.strokeStyle = "#07E0B0"; // Оставляем обводку бирюзовой
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-width / 2, -height / 2, width, height, 6);
        ctx.fill();
        ctx.stroke();

        // Draw text
        ctx.font = "bold 16px 'Orbitron', Arial, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#ffffff"; // Белый цвет для текста
        ctx.fillText(body.word, 0, 0);
        ctx.restore();
      });
    });

    // Handle window resize
    const handleResize = () => {
      const newViewportWidth = window.innerWidth;
      const newDisplayWidth = (newViewportWidth * widthPercentage) / 100;

      render.options.width = newDisplayWidth; // Set to displayWidth (80%)
      render.options.height = 580; // Fixed height to match container
      render.canvas.width = newDisplayWidth; // Set to displayWidth (80%)
      render.canvas.height = 580; // Fixed height to match container

      // Update floor position
      Matter.Body.setPosition(floor, {
        x: newDisplayWidth / 2, // Center of canvas
        y: 580 + 50, // Bottom of canvas + offset
      });

      // Update left wall position
      Matter.Body.setPosition(leftWall, {
        x: 0, // Left edge of canvas
        y: 580 / 2, // Center of canvas height
      });

      // Update right wall position
      Matter.Body.setPosition(rightWall, {
        x: newDisplayWidth, // Right edge of canvas
        y: 580 / 2, // Center of canvas height
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      // clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      render.canvas.remove();
      Matter.Engine.clear(engine);
    };
  }, [words, backgroundColor, widthPercentage, sceneRef]);
};
