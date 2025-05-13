import React from "react";
import { cn } from "../../../utils/classUtils";

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  /** Custom class name for the SVG element */
  className?: string;
  /** Width of the SVG in pixels (default: 24) */
  width?: number | string;
  /** Height of the SVG in pixels (default: 24) */
  height?: number | string;
  /** Custom viewBox for the SVG (default: '0 0 24 24') */
  viewBox?: string;
  /** Fill color for the SVG (default: 'currentColor') */
  fill?: string;
  /** Role attribute for accessibility (default: 'img') */
  role?: string;
  /** ARIA label for accessibility */
  ariaLabel?: string;
}

/**
 * Base SVG Icon component that can be extended for specific icons
 */
export const SvgIcon: React.FC<SvgIconProps> = ({
  className,
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "currentColor",
  role = "img",
  ariaLabel,
  children,
  ...props
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </svg>
  );
};

/**
 * Wrapper for SVG icons with a consistent styling pattern
 */
export interface IconWrapperProps {
  /** The icon component to render */
  icon: React.ReactNode;
  /** Size of the icon - will be applied to both width and height */
  size?: number | string;
  /** Custom class name */
  className?: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  size = 24,
  className,
  onClick,
}) => {
  return (
    <span
      className={cn("icon-wrapper", className)}
      style={{ width: size, height: size, display: "inline-flex" }}
      onClick={onClick}
    >
      {icon}
    </span>
  );
};
