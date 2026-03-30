let current = 0;
const sections = document.querySelectorAll("section");

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    current++;
  } else {
    current--;
  }

  current = Math.max(0, Math.min(current, sections.length - 1));

  sections[current].scrollIntoView({ behavior: "smooth" });
});
