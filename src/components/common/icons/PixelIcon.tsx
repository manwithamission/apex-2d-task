import React from "react";
import type { SvgIconProps } from "./SvgIcon";
import { SvgIcon } from "./SvgIcon";

interface PixelIconProps extends Omit<SvgIconProps, "viewBox" | "children"> {
  primaryColor?: string;
  secondaryColor?: string;
}

export const PixelIcon: React.FC<PixelIconProps> = ({
  primaryColor = "#036547",
  secondaryColor = "#07E0B0",
  ...props
}) => {
  return (
    <SvgIcon width={24} height={38} viewBox="0 0 24 38" fill="none" {...props}>
      <path d="M0 0H24V19H0V0Z M0 19L24 19L0 38Z" fill={primaryColor} />
      <path d="M24 0V19" stroke={secondaryColor} strokeWidth="2" />
      <path d="M24 19L0 38" stroke={secondaryColor} strokeWidth="2" />
      <path d="M0 0H24" stroke={secondaryColor} strokeWidth="2" />

      <clipPath id="clip">
        <path d="M0 0H24V19H0V0Z M0 19L24 19L0 38Z" />
      </clipPath>

      <g clipPath="url(#clip)">
        <path d="M20 0H24V4H20V0Z" fill={secondaryColor} />
        <path d="M16 4H20V8H16V4Z" fill={secondaryColor} />
        <path d="M20 8H24V12H20V8Z" fill={secondaryColor} />
        <path d="M10 2H14V6H10V2Z" fill={secondaryColor} />
        <path d="M4 0H8V4H4V0Z" fill={secondaryColor} />
        <path d="M8 8H12V12H8V8Z" fill={secondaryColor} />
        <path d="M9 17H13V21H9V17Z" fill={secondaryColor} />
        <path d="M15 22H19V26H15V22Z" fill={secondaryColor} />
        <path d="M10 26H14V30H10V26Z" fill={secondaryColor} />
        <path d="M4 34H8V38H4V34Z" fill={secondaryColor} />
        <path d="M4 22H8V26H4V22Z" fill={secondaryColor} />
        <path d="M4 12H8V16H4V12Z" fill={secondaryColor} />
        <path d="M15 12H19V16H15V12Z" fill={secondaryColor} />
        <path d="M20 17H24V21H20V17Z" fill={secondaryColor} />
        <path d="M0 17H4V21H0V17Z" fill={secondaryColor} />
        <path d="M0 5.5H4V9.5H0V5.5Z" fill={secondaryColor} />
        <path d="M0 27H4V31H0V27Z" fill={secondaryColor} />
      </g>
    </SvgIcon>
  );
};
