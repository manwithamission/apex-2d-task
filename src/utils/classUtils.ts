import type { ClassValue } from "clsx";

import clsx from "clsx";

/**
 * Combines multiple class values into a single className string
 * This makes it easier to conditionally apply classes
 *
 * @example
 * ```tsx
 * <div className={cn(
 *   'base-class',
 *   isActive && 'active',
 *   isDisabled ? 'disabled' : 'enabled',
 *   {
 *     'dark-mode': isDarkMode,
 *     'mobile': isMobile
 *   },
 *   styles.component
 * )} />
 * ```
 */

export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}
