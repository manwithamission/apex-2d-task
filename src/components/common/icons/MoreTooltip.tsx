import React from "react";
import { SvgIcon, type SvgIconProps } from "./SvgIcon";

interface MoreTooltipProps extends Omit<SvgIconProps, "viewBox" | "children"> {
  width?: number;
  height?: number;
  color?: string;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontFamily?: string;
}

export const MoreTooltip: React.FC<MoreTooltipProps> = ({
  width = 100,
  height = 40,
  color = "#07E0B0",
  text = "more",
  textColor = "#050505",
  fontSize = 9,
  fontFamily = "Orbitron",
  ...props
}) => {
  const adjustedWidth = Math.max(width, text.length * 8);

  const maskId = `tooltip-mask-${Math.random().toString(36).substring(2, 10)}`;
  const tooltipStyles: React.CSSProperties = {
    position: "relative",
    width: `${adjustedWidth}px`,
    height: `${height}px`,
  };

  const textStyles: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: textColor,
    fontSize: `${fontSize}px`,
    fontFamily,
    fontWeight: 500,
    opacity: 0.8,
    margin: 0,
    padding: "0 5px",
    textAlign: "center",
    pointerEvents: "none",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  return (
    <div style={tooltipStyles}>
      <SvgIcon
        width={adjustedWidth}
        height={height}
        viewBox={`0 0 ${adjustedWidth} ${height}`}
        fill="none"
        {...props}
      >
        <defs>
          <mask id={maskId}>
            <rect width={adjustedWidth} height={height} fill="white" />

            <rect x="0" y="0" width="4" height="4" fill="black" />
            <rect
              x={`${adjustedWidth / 2 - 2}`}
              y="0"
              width="4"
              height="4"
              fill="black"
            />
            <rect
              x={`${adjustedWidth - 4}`}
              y="0"
              width="4"
              height="4"
              fill="black"
            />
            <rect x="0" y={`${height - 4}`} width="4" height="4" fill="black" />
            <rect
              x={`${adjustedWidth / 2 - 2}`}
              y={`${height - 4}`}
              width="4"
              height="4"
              fill="black"
            />
            <rect
              x={`${adjustedWidth - 4}`}
              y={`${height - 4}`}
              width="4"
              height="4"
              fill="black"
            />
          </mask>
        </defs>

        <rect
          width={adjustedWidth}
          height={height}
          fill={color}
          mask={`url(#${maskId})`}
        />
      </SvgIcon>
      <span style={textStyles}>{text}</span>
    </div>
  );
};
