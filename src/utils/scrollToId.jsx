export const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // compensăm navbar‑ul
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
