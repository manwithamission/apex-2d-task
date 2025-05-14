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
