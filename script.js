// Dark / light theme toggle (remembers choice when storage is available)
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("themeToggle");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) {
    root.setAttribute("data-theme", saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.setAttribute("data-theme", "dark");
  }

  btn.addEventListener("click", function () {
    apply(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Keep each skill card's count in sync with the number of chips inside it
  document.querySelectorAll(".skill-card").forEach(function (card) {
    var count = card.querySelector(".count");
    if (count) count.textContent = card.querySelectorAll(".chips-sm span").length;
  });

  // Mobile menu: open/close the nav dropdown
  var menuBtn = document.getElementById("menuToggle");
  var nav = document.getElementById("primaryNav");
  if (menuBtn && nav) {
    var setMenu = function (open) {
      nav.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    menuBtn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
    window.addEventListener("resize", function () { if (window.innerWidth > 900) setMenu(false); });
  }
})();