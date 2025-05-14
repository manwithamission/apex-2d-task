import React from "react";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconProps } from "./SvgIcon";

interface ArrowIconProps extends Omit<SvgIconProps, "children"> {
  primaryColor?: string;
  secondaryColor?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({
  primaryColor = "#011301",
  secondaryColor = "#07E0B0",
  ...props
}) => {
  const gradientId = `arrow-gradient-${Math.random()
    .toString(36)
    .substring(2, 9)}`;

  return (
    <SvgIcon viewBox="0 0 86 86" {...props}>
      <path
        d="M-0.000976562 0H21.4961V45.8955L58.9707 8.41504L73.9443 23.3906L32.8516 64.4893L86 64.4893V85.9893L21.4961 85.9893V86L-0.000976562 86L-0.000976562 0Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient
          id={gradientId}
          x1="69.0744"
          y1="17.6117"
          x2="-6.90544e-05"
          y2="86.0003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={primaryColor} />
          <stop offset="1" stopColor={secondaryColor} />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
};
