// The only script on the site: the small-screen menu. Without it the menu
// is simply shown open (see .no-js in site.css).
document.documentElement.classList.remove("no-js");
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;
  const set = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => set(toggle.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
});
