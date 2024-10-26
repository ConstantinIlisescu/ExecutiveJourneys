export const scrollToHash = (pageHash: string) => {
  const targetElement = document.getElementById(pageHash);
  if (targetElement) {
    try {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } catch (e) {
      // Fallback for browsers that don't support smooth scrolling
      targetElement.scrollIntoView();
    }
  }
};
export const scrollToStartPage = () => {
  try {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (e) {
    // Fallback for smooth scrolling support
    window.scrollTo(0, 0);
  }
};
