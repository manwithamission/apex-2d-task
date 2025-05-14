import React from "react";
import type { SvgIconProps } from "./SvgIcon";
import { SvgIcon } from "./SvgIcon";

interface CursorIconProps extends Omit<SvgIconProps, "viewBox" | "children"> {
  color?: string;
}

export const CursorIcon: React.FC<CursorIconProps> = ({
  color = "#07E0B0",
  ...props
}) => {
  return (
    <SvgIcon width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M1.89106e-07 4.32617L1.90211 3.70814L6.22835 17.0229L4.32624 17.641L1.89106e-07 4.32617Z"
        fill={color}
      />
      <path
        d="M5.04029 6.89433L6.94241 6.2763L10.0326 15.7869L8.13046 16.4049L5.04029 6.89433Z"
        fill={color}
      />
      <path
        d="M0.618034 6.22829L1.89106e-07 4.32617L13.3148 -6.61612e-05L13.9328 1.90205L0.618034 6.22829Z"
        fill={color}
      />
      <path
        d="M5.65833 8.79644L5.04029 6.89433L14.5509 3.80416L15.1689 5.70627L5.65833 8.79644Z"
        fill={color}
      />
      <path
        d="M10.0806 9.46249L15.7869 7.60839L17.641 13.3147L11.9347 15.1688L10.0806 9.46249Z"
        fill={color}
      />
    </SvgIcon>
  );
};
