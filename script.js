
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  }

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) link.setAttribute("aria-current", "page");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold: .08});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-demo-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const msg = form.querySelector(".form-message");
      if (msg) msg.textContent = "Thanks — your message has been recorded for this prototype. Connect this form to your official email/form service before launch.";
    });
  });
});
