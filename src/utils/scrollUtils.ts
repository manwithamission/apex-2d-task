/**
 * Smoothly scrolls to a section specified by ID
 * @param sectionId - The ID of the section to scroll to (without the # symbol)
 * @param event - The click event, used to prevent default navigation
 * @param headerOffset - Optional offset to account for fixed header height (defaults to 80px)
 */
export const scrollToSection = (
  sectionId: string,
  event: React.MouseEvent,
  headerOffset: number = 80
): void => {
  event.preventDefault();
  const section = document.getElementById(sectionId);

  if (section) {
    const offsetTop = section.getBoundingClientRect().top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = offsetTop + scrollTop - headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};
