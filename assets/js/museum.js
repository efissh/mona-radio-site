// Museum filtering only; no analytics, storage or network calls.
document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("museum-search");
  const cards = [...document.querySelectorAll(".museum-object")];
  const filters = [...document.querySelectorAll("[data-filter]")];
  const counter = document.getElementById("museum-counter");
  const empty = document.getElementById("museum-empty");
  if (!search || !counter || !empty || !cards.length) return;
  let maker = "all";
  const update = () => {
    const q = search.value.trim().toLowerCase(); let shown = 0;
    for (const card of cards) {
      const visible = (maker === "all" || card.dataset.maker === maker)
        && (q === "" || (card.dataset.search || "").includes(q));
      card.hidden = !visible; if (visible) shown++;
    }
    counter.textContent = shown + " of " + cards.length + " radios";
    empty.hidden = shown > 0;
  };
  filters.forEach(button => button.addEventListener("click", () => {
    maker = button.dataset.filter;
    filters.forEach(other => other.setAttribute("aria-pressed", String(other === button)));
    update();
  }));
  search.addEventListener("input", update);
  update();
});
