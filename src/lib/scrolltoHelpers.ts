export const scrollToHash = (pageHash: string) => {
  const targetElement = document.getElementById(pageHash);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
export const scrollToStartPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
