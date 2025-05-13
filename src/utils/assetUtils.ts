/**
 * Utility functions for working with assets (images and icons)
 */

// Base path for assets
const ASSETS_BASE_PATH = "/";

/**
 * Get the path to a project image
 * @param filename The filename of the image (e.g., 'project1.jpg')
 * @returns The full path to the image
 */
export const getProjectImage = (filename: string): string => {
  return `${ASSETS_BASE_PATH}images/projects/${filename}`;
};

/**
 * Get the path to a team image
 * @param filename The filename of the image (e.g., 'member1.jpg')
 * @returns The full path to the image
 */
export const getTeamImage = (filename: string): string => {
  return `${ASSETS_BASE_PATH}images/team/${filename}`;
};

/**
 * Get the path to a background image
 * @param filename The filename of the image (e.g., 'hero-bg.jpg')
 * @returns The full path to the image
 */
export const getBackgroundImage = (filename: string): string => {
  return `${ASSETS_BASE_PATH}images/backgrounds/${filename}`;
};

/**
 * Get the path to a social icon
 * @param filename The filename of the icon (e.g., 'facebook.svg')
 * @returns The full path to the icon
 */
export const getSocialIcon = (filename: string): string => {
  return `/icons/social/${filename}`;
};

/**
 * Get the path to a UI icon
 * @param filename The filename of the icon (e.g., 'arrow-right.svg')
 * @returns The full path to the icon
 */
export const getUIIcon = (filename: string): string => {
  return `/icons/ui/${filename}`;
};

/**
 * Get the path to a technology icon
 * @param filename The filename of the icon (e.g., 'react.svg')
 * @returns The full path to the icon
 */
export const getTechIcon = (filename: string): string => {
  return `/icons/technologies/${filename}`;
};
